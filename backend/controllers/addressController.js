const Address = require("../models/addressModel");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ApiFeatures = require("../utils/apiFeatures");

// create address
exports.createAddress = catchAsyncErrors(async (req, res, next) => {
  req.body.user = req.user.id;

  const address = await Address.create(req.body);
  res.status(200).json({
    success: true,
    address,
  });
});

// get address details
exports.getAddressDetails = catchAsyncErrors(async (req, res, next) => {
  const address = await Address.findById(req.params.id);

  if (!address) {
    return next(new ErrorHandler("Address Not Found", 404));
  }

  res.status(200).json({
    success: true,
    address,
  });
});

// update an address
exports.updateAddress = catchAsyncErrors(async (req, res, next) => {
  let address = await Address.findById(req.params.id);
  if (!address) {
    return next(new ErrorHandler("Address Not Found.", 404));
  }

  address = await Address.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    address,
  });
});

// delete an address
exports.deleteAddress = catchAsyncErrors(async (req, res, next) => {
  const address = await Address.findById(req.params.id);
  if (!address) {
    return next(new ErrorHandler("Address Not Found", 404));
  }

  await address.deleteOne();
  res.status(200).json({
    success: true,
    message: "Address deleted successfully",
  });
});

// My Saved Addresses for a logged in user

exports.myAddresses = catchAsyncErrors(async (req, res, next) => {
  // Base query - all addresses for the current user
  const baseQuery = { user: req.user._id };

  // Handle sorting in controller
  let sortQuery = { createdAt: -1 }; // Default sort
  if (req.query.sort) {
    switch (req.query.sort) {
      case "label-asc":
        sortQuery = { label: 1 };
        break;
      case "label-desc":
        sortQuery = { label: -1 };
        break;
      case "city-asc":
        sortQuery = { city: 1 };
        break;
      case "city-desc":
        sortQuery = { city: -1 };
        break;
      case "recent":
        sortQuery = { createdAt: -1 };
        break;
      case "oldest":
        sortQuery = { createdAt: 1 };
        break;
      // default case not needed as we have default sortQuery
    }
  }

  // Initialize ApiFeatures with the base query and apply sorting
  const features = new ApiFeatures(
    Address.find(baseQuery).sort(sortQuery),
    req.query
  )
    .search() // Enable search by label/name
    .filter() // Enable filtering
    .pagination(10); // Enable pagination (10 items per page)

  // Execute the query
  const addresses = await features.query;

  // Count total documents (for pagination info)
  const totalCount = await Address.countDocuments(baseQuery);

  res.status(200).json({
    success: true,
    addresses,
    count: addresses.length,
    totalCount,
    resultsPerPage: 10,
    currentPage: Number(req.query.page) || 1,
    totalPages: Math.ceil(totalCount / 10),
  });
});

exports.getUserAddresses = catchAsyncErrors(async (req, res, next) => {
  const addresses = await Address.find({ user: req.params.userId });

  res.status(200).json({
    success: true,
    addresses,
  });
});
