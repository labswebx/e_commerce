import React from "react";

// product card
// data: fetch from product
const ProductCard = ({ data, onAddToCart }) => (
  <div className="card-base w-72">
    <img src={data.image} alt={data.title} className="card-product-img" />
    <h3 className="mt-2 text-lg font-medium">{data.title}</h3>
    <p className="text-sm text-gray-500">{data.description}</p>
    <p className="mt-2 text-xl font-semibold">${data.price}</p>
    <button onClick={onAddToCart} className="btn-cart">
      Add to Cart
    </button>
  </div>
);

// category card
const CategoryCard = ({ data }) => (
  <div className="card-category">
    <div className="flex flex-col items-center gap-2 p-4">
      <div className="flex items-center justify-center w-12 h-12 text-black">
        {data.icon}
      </div>
      <p className="text-lg font-semibold">{data.title}</p>
    </div>
  </div>
);

// review card
const ReviewCard = ({ data }) => (
  <div className="card-review">
    <div className="flex items-center gap-3 mb-2">
      <img
        src={data.userAvatar}
        alt="avatar"
        className="w-10 h-10 rounded-full"
      />
      <div>
        <p className="font-semibold">{data.userName}</p>
        <p className="text-sm text-gray-400">{data.date}</p>
      </div>
    </div>
    <p className="text-sm text-yellow-500">
      {"★".repeat(data.rating)}
      {"☆".repeat(5 - data.rating)}
    </p>
    <p className="mt-2 text-sm text-gray-700">{data.comment}</p>
    {data.images?.length > 0 && (
      <div className="flex gap-2 mt-3">
        {data.images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="review"
            className="object-cover w-20 h-20 rounded-md"
          />
        ))}
      </div>
    )}
  </div>
);

// cart item card
const CartItemCard = ({ data, onIncrement, onDecrement, onRemove }) => (
  <div className="card-cart-item">
    <div className="flex gap-4">
      <img src={data.image} alt={data.title} className="w-16 h-16 rounded-lg" />
      <div>
        <h4 className="text-sm font-semibold">{data.title}</h4>
        <p className="text-xs text-gray-500">{data.productId}</p>
        <div className="flex items-center gap-2 mt-2">
          <button className="btn-qty" onClick={onDecrement}>
            -
          </button>
          <span className="w-6 text-center">{data.quantity}</span>
          <button className="btn-qty" onClick={onIncrement}>
            +
          </button>
        </div>
      </div>
    </div>
    <div className="flex flex-col items-end">
      <p className="text-lg font-bold">${data.price}</p>
      <button
        className="mt-1 text-gray-500 hover:text-red-600"
        onClick={onRemove}
      >
        ✕
      </button>
    </div>
  </div>
);

// card
const Card = ({ type, data, ...handlers }) => {
  switch (type) {
    case "product":
      return <ProductCard data={data} onAddToCart={handlers.onAddToCart} />;
    case "category":
      return <CategoryCard data={data} />;
    case "review":
      return <ReviewCard data={data} />;
    case "cartItem":
      return (
        <CartItemCard
          data={data}
          onIncrement={handlers.onIncrement}
          onDecrement={handlers.onDecrement}
          onRemove={handlers.onRemove}
        />
      );
    default:
      return null;
  }
};

export default Card;
