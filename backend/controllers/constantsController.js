const Constants = require("../models/constantsModel");
const User = require("../models/userModel");
const Order = require("../models/orderModel");
const Product = require("../models/productModel");
const Category = require("../models/categoryModel");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const cloudinary = require("cloudinary");
const CONSTANTS = require("../config/constants");

// create Constant
exports.createConstant = catchAsyncErrors(async (req, res, next) => {
  // req.body.user = req.user.id;

  if (req.body.name === CONSTANTS.CONSTANTS.BANNERS) {
    let imageLinks = [];

    try {
      // 💡 Case 1: Handling file uploads via form-data
      if (req.files && req.files.images) {
        const files = Array.isArray(req.files.images)
          ? req.files.images
          : [req.files.images];

        for (let i = 0; i < files.length; i++) {
          const file = files[i];
       
          const title = req.body[`titles[${i}]`] || `Banner ${i + 1}`;
       
          const id =
            req.body[`ids[${i}]`] ||
            (Array.isArray(req.body.ids)
              ? req.body.ids[i]
              : `banner_${Date.now()}_${i}`);
       
          const result = await cloudinary.v2.uploader.upload(
            file.tempFilePath,
            {
              folder: CONSTANTS.CLOUDINARY_FOLDERS.BANNERS,
              resource_type: "auto",
              quality: "auto",
              fetch_format: "auto",
            }
          );

          imageLinks.push({
            public_id: result.public_id,
            url: result.secure_url,
            title,
            id,
            width: result.width,
            height: result.height,
            format: result.format,
            created_at: result.created_at,
          });
        }
      }

      // 💡 Case 2: Handling JSON-based images (url, base64)
      else if (req.body.images) {
        let images;
        try {
          // Parse if it's a JSON string (from frontend/curl)
          images =
            typeof req.body.images === "string"
              ? JSON.parse(req.body.images)
              : req.body.images;
        } catch (e) {
          return next(new ErrorHandler("Invalid image format", 400));
        }

        for (let i = 0; i < images.length; i++) {
          const image = images[i];
          if (!image || typeof image !== "object") continue;

          if (image.image) {
            const result = await cloudinary.v2.uploader.upload(image.image, {
              folder: CONSTANTS.CLOUDINARY_FOLDERS.BANNERS,
              resource_type: "auto",
              quality: "auto",
              fetch_format: "auto",
            });

            imageLinks.push({
              public_id: result.public_id,
              url: result.secure_url,
              title: image.title || `Banner ${i + 1}`,
              id: image.id || `banner_${Date.now()}_${i}`,
              width: result.width,
              height: result.height,
              format: result.format,
              created_at: result.created_at,
            });
          } else if (image.public_id && image.url) {
            imageLinks.push({
              ...image,
              title: image.title || `Banner ${i + 1}`,
              id: image.id || `banner_${Date.now()}_${i}`,
            });
          }
        }
      }

      req.body.metadata = { banners: imageLinks };
    } catch (error) {
      return next(
        new ErrorHandler(`Error uploading images: ${error.message}`, 500)
      );
    }
  }

  const constants = await Constants.create(req.body);
 
  res.status(200).json({
    success: true,
    constants,
  });
});

// get all banners
exports.getAllBanners = catchAsyncErrors(async (req, res, next) => {
  const banners = await Constants.find({
    name: CONSTANTS.CONSTANTS.BANNERS,
  });
  return res.status(200).json({
    success: true,
    banners: banners || [],
  });
});

// add/update banners
exports.updateBanners = catchAsyncErrors(async (req, res, next) => {
  req.body.user = req.user.id;
  let banners = await Constants.findOne({ name: CONSTANTS.CONSTANTS.BANNERS });
  banners = banners?.metadata?.banners || [];

  if (!req.body.images || !Array.isArray(req.body.images)) {
    return next(new ErrorHandler("Please provide valid images array", 400));
  }

  let images = req.body.images;
  let imageLinks = [];

  try {
    // First, delete all existing banners from cloudinary
    for (let i = 0; i < banners.length; ++i) {
      if (banners[i] && banners[i].public_id) {
        try {
          await cloudinary.v2.uploader.destroy(banners[i].public_id);
        } catch (error) {
          console.error(`Error deleting banner ${i}:`, error);
        }
      }
    }

    // Then upload new images
    for (let i = 0; i < images.length; ++i) {
      let image = images[i];

      if (typeof image === "object" && image.image) {
        // uploading new image to cloudinary
        let result = await cloudinary.v2.uploader.upload(image.image, {
          folder: CONSTANTS.CLOUDINARY_FOLDERS.BANNERS,
          resource_type: "auto",
          quality: "auto",
          fetch_format: "auto",
        });

        imageLinks.push({
          public_id: result.public_id,
          url: result.secure_url,
          title: image.title || `Banner ${i + 1}`,
          id: image.id || `banner_${Date.now()}_${i}`,
        });
      } else if (image && image.public_id && image.url) {
        // If it's already a cloudinary image object
        imageLinks.push({
          ...image,
          title: image.title || `Banner ${i + 1}`,
          id: image.id || `banner_${Date.now()}_${i}`,
        });
      } else {
        return next(
          new ErrorHandler(`Invalid image format at index ${i}`, 400)
        );
      }
    }

    let constants = await Constants.findOneAndUpdate(
      { name: CONSTANTS.CONSTANTS.BANNERS },
      {
        metadata: {
          banners: imageLinks,
        },
        name: CONSTANTS.CONSTANTS.BANNERS,
      },
      {
        new: true,
        runValidators: true,
        useFindAndModify: false,
        upsert: true,
      }
    );

    res.status(200).json({
      success: true,
      constants,
    });
  } catch (error) {
    return next(
      new ErrorHandler(error.message || "Error uploading images", 500)
    );
  }
});

// Get All Stats -- Admin
exports.getStats = catchAsyncErrors(async (req, res, next) => {
  const totalOrders = await Order.countDocuments();
  const totalProducts = await Product.countDocuments();
  const totalCategories = await Category.countDocuments();
  const totalUsers = await User.countDocuments();

  const thirtyDaysOrderAmount = await Order.aggregate([
    {
      $match: {
        createdAt: {
          $gte: new Date(new Date().setDate(new Date().getDate() - 30)),
        },
      },
    },
    {
      $group: {
        _id: null,
        totalAmount: { $sum: "$totalPrice" },
      },
    },
  ]);

  return res.status(200).json({
    success: true,
    totalCategories,
    totalOrders,
    totalProducts,
    totalUsers,
    thirtyDaysOrderAmount: thirtyDaysOrderAmount[0].totalAmount,
  });
});
