const mongoose = require("mongoose");
const enums = require("../utils/enums");

const orderSchema = new mongoose.Schema(
  {
    //  from address slice
    shippingAddress: {
      type: mongoose.Schema.ObjectId,
      ref: "Address",
      required: true,
    },
    //  from  cart (items)
    orderItems: [
      {
        name: {
          type: String,
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
        },
        price: {
          type: Number,
          required: true,
        },
        image: {
          type: String,
          // required: true,
        },
        product: {
          type: mongoose.Schema.ObjectId,
          ref: "Product",
          required: true,
        },
      },
    ],
    //  from user login adn register
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: true,
    },
    //  from cart slice(shippingMethod) only paymentInstrument
    paymentInfo: {
      transactionId: {
        type: String,
        // required: true,
      },
      status: {
        type: String,
        // required: true,
      },
      paymentInstrument: {
        type: Object,
        required: false,
        default: {},
      },
    },
    paidAt: {
      type: Date,
      required: true,
    },
    //  from coupon slice
    coupon: {
      type: String,
      default: "",
    },
    //  from coupon discount
    couponDiscount: {
      type: Number,
      default: 0,
    },
    //  from cart slice ()
    itemsPrice: {
      type: Number,
      requierd: true,
      default: 0,
    },
    //      from cart slice (tax)
    taxPrice: {
      type: Number,
      requierd: true,
      default: 0,
    },
    //  from cart slice (shipping)
    shippingPrice: {
      type: Number,
      requierd: true,
      default: 0,
    },
    //  from cart slice ()
    totalPrice: {
      type: Number,
      requierd: true,
      default: 0,
    },
    orderStatus: {
      type: String,
      required: true,
      default: enums.ORDER_STATUS.PLACED,
    },
    deliveredAt: Date,
  },
  {
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updatedAt",
    },
  }
);

module.exports = mongoose.model("Order", orderSchema);
