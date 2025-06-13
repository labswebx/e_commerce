import { Cross, Edit, Pencil, X } from "lucide-react";
import React from "react";
import InputField from "./InputField";
import Icon from "./Icon";
import DatePicker from "./DatePicker";
import Button from "./Button";
import AddToCartButton from "./AddToCartButton";

const ProductCard = ({ data, onAddToCart, imageOnly = false }) => {
  return (
    <div className="text-center card-base w-72">
      <img
        src={data.images[0]?.public_id || "/logo-icon.jpg"}
        alt={data.title}
        className={`rounded-md object-cover ${
          imageOnly
            ? "w-full h-52 sm:h-60 md:h-64"
            : "mx-auto w-full h-40 sm:h-48 md:h-52"
        }`}
      />

      {imageOnly ? (
        <>
          <h3 className="mt-2 text-lg font-semibold">{data.title}</h3>
          <Button
            variant="outline"
            onClick={() => onAddToCart(data)}
            label="Shop Now"
          ></Button>
        </>
      ) : (
        <>
          <h3 className="mt-2 text-lg font-medium">{data.title}</h3>
          <p className="text-sm text-gray-500">{data.description}</p>
          <p className="mt-2 text-xl font-semibold">${data.price}</p>
          <div className="w-full mt-2">
            {imageOnly ? (
              <Button
                variant="outline"
                onClick={() => onAddToCart(data)}
                label="Shop Now"
                fullWidth
              />
            ) : (
              <AddToCartButton product={data} />
            )}
          </div>
        </>
      )}
    </div>
  );
};

const CategoryCard = ({ data }) => {
  return (
    <div className="card-category ">
      <div className="card-category-inner">
        <div className="flex items-center justify-center w-12 h-12 text-black">
          {data.icon}
        </div>
        <p className="card-category-title">{data.title || data.name}</p>
      </div>
    </div>
  );
};

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

const CartItemCard = ({ data, onIncrement, onDecrement, onRemove }) => {
  return (
    <div className="flex flex-col gap-4 p-4 border-b border-gray-200 sm:flex-row sm:items-center sm:justify-between">
      {/* Image and Info */}
      <div className="flex items-start gap-4">
        <img
          src={data?.images?.[0]?.public_id || "/logo-icon.jpg"}
          alt={data?.name || data?.title}
          className="object-cover w-20 h-20 rounded-lg"
        />
        <div>
          <h4 className="text-base font-semibold sm:text-sm">
            {data?.name || data?.title}
          </h4>
          <p className="text-xs text-gray-600">{data?.category}</p>
        </div>
      </div>

      {/* Quantity and Price Controls */}
      <div className="flex flex-wrap items-center justify-between gap-2 sm:flex-nowrap sm:gap-4">
        {/* <div className="flex items-center gap-2 px-2 py-1 border rounded">
          <button
            onClick={() => onDecrement(data || data._id)}
            className="text-xl font-medium"
          >
            −
          </button>
          <span className="text-sm font-semibold">{data?.quantity}</span>
          <button
            onClick={() => onIncrement(data || data._id)}
            className="text-xl font-medium"
          >
            +
          </button>
        </div> */}
        {/* <p className="text-lg font-bold text-gray-800">₹{data?.price}</p>
        <button
          onClick={() => onRemove(data?._id)}
          className="text-xl text-gray-500 hover:text-red-600"
        >
          ✕
        </button> */}
        <AddToCartButton product={data} />
      </div>
    </div>
  );
};

const AddressCard = ({
  data,
  selected,
  onSelect,
  onEdit,
  onDelete,
  onClick,
}) => {
  return (
    <div
      className={`flex items-start justify-between w-full p-4 rounded-md  border ${
        selected ? "border-black" : "border-transparent"
      }`}
    >
      {/* Left section: Radio + Address details */}
      <div className="flex gap-2">
        <InputField
          name="addressSelect"
          type="radio"
          checked={selected}
          onClick={onClick}
          onChange={() => {
            onSelect(data);
          }}
          className="w-4 h-4 mt-1"
        />
        <div>
          <div className="flex items-center gap-2">
            <p className="font-semibold text-md">{data.city || ""}</p>
            <span className="px-2 py-0.5 text-xs font-bold text-white bg-black rounded">
              {data.label}
            </span>
          </div>
          <p className="text-sm text-gray-600">{data.address || ""}</p>
          <p className="text-sm text-gray-600">{data.contactNumber || ""}</p>
        </div>
      </div>

      {/* Right section: Actions */}
      <div className="flex items-center gap-2">
        <button onClick={() => onEdit(data)} title="Edit">
          <Icon icon={Pencil} size="sm" />
        </button>
        <button onClick={() => onDelete(data._id)} title="Delete">
          <Icon icon={X} size="sm" />
        </button>
      </div>
    </div>
  );
};

const ShippingCard = ({
  data,
  selectedId,
  onSelect,
  onDateChange,
  selectedDate,
}) => (
  <div className="space-y-2">
    {data.map((option) => (
      <div
        key={option.id}
        className={`flex items-start justify-between p-4 rounded-md border cursor-pointer gap-2 ${
          selectedId === option.id ? "border-black" : "border-gray-200"
        }`}
        onClick={() => onSelect(option.id)}
      >
        <div className="flex items-center gap-2">
          <InputField
            type="radio"
            checked={selectedId === option.id}
            onChange={() => onSelect(option.id)}
            className="mt-1"
          />
          <div>
            <p className="text-sm font-medium">{option.label}</p>
            <p className="text-xs text-gray-500">{option.description}</p>
          </div>
        </div>
        <div className="text-sm font-semibold text-right text-gray-700">
          {selectedId || option.id !== selectedId
            ? option.date || option.price
            : ""}
        </div>
        {selectedId === "schedule" && option.id === "schedule" && (
          <DatePicker value={selectedDate} onChange={onDateChange} />
        )}
      </div>
    ))}
  </div>
);

const Card = ({ type, data, imageOnly, ...handlers }) => {
  switch (type) {
    case "product":
      return (
        <ProductCard
          data={data}
          onAddToCart={handlers.onAddToCart}
          imageOnly={imageOnly}
        />
      );
    case "category":
      return <CategoryCard data={data} />;
    case "review":
      return <ReviewCard data={data} />;
    case "shipping":
      return (
        <ShippingCard
          data={data}
          selectedId={handlers.selectedId}
          onSelect={handlers.onSelect}
        />
      );

    case "address":
      return (
        <AddressCard
          data={data}
          selected={handlers.selected}
          onSelect={handlers.onSelect}
          onEdit={handlers.onEdit}
          onDelete={handlers.onDelete}
        />
      );

    case "cartItem":
      return Array.isArray(data) ? (
        <div className="border border-gray-200 divide-y divide-gray-200 rounded-lg">
          {data.map((item) => (
            <CartItemCard
              key={item.id}
              data={item}
              onIncrement={handlers.onIncrement}
              onDecrement={handlers.onDecrement}
              onRemove={handlers.onRemove}
            />
          ))}
        </div>
      ) : (
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
