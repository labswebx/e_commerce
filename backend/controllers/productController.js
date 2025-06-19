const Product = require("../models/productModel");
const Category = require("../models/categoryModel");
const SubCategory = require("../models/subCategoryModel");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ApiFeatures = require("../utils/apiFeatures");
const cloudinary = require("cloudinary");

// create product -- Admin
exports.createProduct = catchAsyncErrors(async (req, res, next) => {
  let images = [];
  const imagesLink = [];
  if (req.files && req.files.images) {
    const files = Array.isArray(req.files.images)
      ? req.files.images
      : [req.files.images];

    for (const file of files) {
      const result = await cloudinary.v2.uploader.upload(file.tempFilePath, {
        folder: "products",
        resource_type: "auto",
      });

      imagesLink.push({
        public_id: result.public_id,
        url: result.secure_url,
      });
    }
  } else if (req.body.images) {
    if (typeof req.body.images === "string") {
      images = [req.body.images];
    } else if (Array.isArray(req.body.images)) {
      images = req.body.images;
    } else if (
      typeof req.body.images === "object" &&
      req.body.images.public_id &&
      req.body.images.url
    ) {
      images = [req.body.images];
    } else {
      return next(
        new ErrorHandler(
          "Invalid image format. Must be string, array of strings, or public_id/url object.",
          400
        )
      );
    }

    for (let i = 0; i < images.length; i++) {
      const image = images[i];

      // Upload if it's a base64 or URL string
      if (typeof image === "string") {
        const result = await cloudinary.v2.uploader.upload(image, {
          folder: "products",
          resource_type: "auto",
        });

        imagesLink.push({
          public_id: result.public_id,
          url: result.secure_url,
        });
      }

      // Push pre-uploaded object
      else if (image.public_id && image.url) {
        imagesLink.push(image);
      } else {
        return next(
          new ErrorHandler(`Invalid image format at index ${i}`, 400)
        );
      }
    }
  } else {
    return next(new ErrorHandler("Product images are required.", 400));
  }

  // Attach images and user
  req.body.images = imagesLink;
  req.body.user = req.user?.id;

  // Save Product
  const product = await Product.create(req.body);

  res.status(200).json({
    success: true,
    product,
  });
});
// get all products
exports.getAllProducts = catchAsyncErrors(async (req, res) => {
  const resultsPerPage = 5;
  const productsCount = await Product.countDocuments();
  const currentPage = Number(req.query.page) || 1;
  const apiFeature = new ApiFeatures(
    Product.find().populate("category").sort({ order: 1, createdAt: -1 }),
    req.query
  )
    .search()
    .filter()
    .pagination(resultsPerPage);
  const products = await apiFeature.query;

  return res.status(200).json({
    success: true,
    products,
    productsCount,
    resultsPerPage,
    currentPage,
  });
});

// get all products -- Admin
exports.getAdminProducts = catchAsyncErrors(async (req, res) => {
  const page = parseInt(req.query.page, 10) || 1;
  const limit = parseInt(req.query.limit, 10) || 20;

  const skip = (page - 1) * limit;

  const totalProducts = await Product.countDocuments();

  const products = await Product.find()
    .populate("category")
    .populate("subCategory")
    .skip(skip)
    .limit(limit);

  const totalPages = Math.ceil(totalProducts / limit);

  return res.status(200).json({
    success: true,
    products,
    pagination: {
      totalProducts,
      totalPages,
      currentPage: page,
      limit,
    },
  });
});

// search products -- Admin
exports.searchAdminProducts = catchAsyncErrors(async (req, res) => {
  const products = await Product.find({
    name: { $regex: req.query.name, $options: "i" },
  })
    .populate("subCategory")
    .populate("category");

  return res.status(200).json({
    success: true,
    products,
  });
});

// get trending products
exports.getTrendingProducts = catchAsyncErrors(async (req, res) => {
  const page = parseInt(req.query.page, 10) || 1;
  const limit = parseInt(req.query.limit, 10) || 20;

  const skip = (page - 1) * limit;

  const totalTrendingProducts = await Product.countDocuments({
    trending: true,
  });
  const products = await Product.find({ trending: true })
    .populate("category")
    .sort({
      createdAt: -1,
    })
    .skip(skip)
    .limit(limit);

  return res.status(200).json({
    success: true,
    products,
    productsCount: products.length,
    totalTrendingProducts,
    resultsPerPage: limit,
    currentPage: page,
    totalPages: Math.ceil(totalTrendingProducts / limit),
  });
});

// get favourite products
exports.getFavouriteProducts = catchAsyncErrors(async (req, res) => {
  const products = await Product.find({ favourite: true })
    .populate("category")
    .sort({
      createdAt: -1,
    });

  return res.status(200).json({
    success: true,
    products,
    productsCount: products.length,
  });
});

// get most ordered products
exports.getMostOrderedProducts = catchAsyncErrors(async (req, res) => {
  const products = await Product.find({})
    .populate("category")
    .sort({ count: -1, createdAt: -1 });

  return res.status(200).json({
    success: true,
    products,
    productsCount: products.length,
  });
});

// update a product -- Admin
exports.updateProduct = catchAsyncErrors(async (req, res, next) => {
  let product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorHandler("Product Not Found", 404));
  }

  try {
    // Deleting existing images from cloudinary & adding new images (if any)
    if (req.body.images && req.body.images.length > 0) {
      let images = [];
      if (typeof req.body.images === "string") {
        images.push(req.body.images);
      } else if (Array.isArray(req.body.images)) {
        images = req.body.images;
      } else {
        return next(new ErrorHandler("Invalid images format", 400));
      }

      // delete images from Cloudinary
      for (let i = 0; i < product.images.length; ++i) {
        if (product.images[i].public_id) {
          await cloudinary.v2.uploader.destroy(product.images[i].public_id);
        }
      }

      // Uploading new images
      const imagesLink = [];
      for (let i = 0; i < images.length; ++i) {
        if (typeof images[i] === "string") {
          const result = await cloudinary.v2.uploader.upload(images[i], {
            folder: "products",
            resource_type: "auto",
          });

          imagesLink.push({
            public_id: result.public_id,
            url: result.secure_url,
          });
        } else if (images[i] && images[i].public_id && images[i].url) {
          imagesLink.push(images[i]);
        } else {
          return next(
            new ErrorHandler(`Invalid image format at index ${i}`, 400)
          );
        }
      }

      req.body.images = imagesLink;
    } else {
      req.body.images = product.images;
    }

    product = await Product.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    });

    res.status(200).json({
      success: true,
      product,
    });
  } catch (error) {
    return next(
      new ErrorHandler(error.message || "Error updating product", 500)
    );
  }
});

// get product details
exports.getProductDetails = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.findById(req.params.id)
    .populate("subCategory")
    .populate("category");

  if (!product) {
    return next(new ErrorHandler("Product Not Found", 404));
  }

  res.status(200).json({
    success: true,
    product,
  });
});

// get products of a category
exports.getCategoryProducts = catchAsyncErrors(async (req, res, next) => {

  const category = await Category.findById(req.params.id)

  if (!category) {
  
    return next(new ErrorHandler("Category Not Found", 404));
  }

  const products = await Product.find({ category: category._id }).sort({
    order: 1,
  });


  if (!products || products.length === 0) {
   
    return next(new ErrorHandler("Products Not Found", 404));
  }

  res.status(200).json({
    success: true,
    category: {
      id: category._id,
      name: category.name,
    },
    products,
  });
});

// delete product -- Admin
exports.deleteProduct = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorHandler("Product Not Found", 404));
  }

  // delete images from Cloudinary
  for (let i = 0; i < product.images.length; ++i) {
    await cloudinary.v2.uploader.destroy(product.images[i].public_id);
  }

  await product.deleteOne();
  res.status(200).json({
    success: true,
    message: "Product deleted successfully",
  });
});

// create a new review or update the review
exports.createProductReview = catchAsyncErrors(async (req, res, next) => {
  const { rating, comment, productId } = req.body;

  const review = {
    user: req.user._id,
    name: req.user.name,
    rating: Number(rating),
    comment,
  };

  const product = await Product.findById(productId);
  const isReviewd = product.reviews.find(
    (rev) => rev.user.toString() === req.user._id.toString()
  );

  if (isReviewd) {
    product.reviews.forEach((rev) => {
      if (rev.user.toString() === req.user._id.toString()) {
        rev.rating = rating;
        rev.comment = comment;
      }
    });
  } else {
    product.reviews.push(review);
    product.numOfReviews = product.reviews.length;
  }

  let avgRating = 0;
  product.reviews.forEach((rev) => {
    avgRating += rev.rating;
  });

  product.ratings = avgRating / product.reviews.length;

  await product.save({
    validateBeforeSave: false,
  });

  res.status(200).json({
    success: true,
    product: product,
    review: product.reviews,
    message: "Product rating added successfully",
  });
});

// get all reviews of a product
exports.getProductReviews = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    return next(new ErrorHandler("Product Not Found.", 404));
  }

  res.status(200).json({
    success: true,
    reviews: product.reviews,
  });
});

// delete a review
exports.deleteReview = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.findById(req.query.productId);
  if (!product) {
    return next(new ErrorHandler("Product Not Found.", 404));
  }

  const reviews = product.reviews.filter(
    (rev) => rev._id.toString() !== req.query.id.toString()
  );

  let avgRating = 0;
  reviews.forEach((rev) => {
    avgRating += rev.rating;
  });

  let ratings = 0;
  if (reviews.length > 0) {
    ratings = avgRating / reviews.length;
  }

  const numOfReviews = reviews.length;

  await Product.findByIdAndUpdate(
    req.query.productId,
    { reviews, ratings, numOfReviews },
    {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    }
  );

  res.status(200).json({
    success: true,
    message: "Review Deleted successfully",
  });
});

// get suggested products
exports.getSuggestedProducts = catchAsyncErrors(async (req, res) => {
  const products = await Product.find({}).limit(15);

  return res.status(200).json({
    success: true,
    products,
    productsCount: products.length,
  });
});
