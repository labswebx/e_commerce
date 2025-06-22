import { Pencil, X } from "lucide-react";
import InputField from "./InputField";
import Icon from "./Icon";
import DatePicker from "./DatePicker";
import Button from "./Button";
import AddToCartButton from "./AddToCartButton";
import { Link } from "react-router-dom";
import { formatPrice } from "../../utils/formatter";
import WishlistButton from "./WishlistButton";

// Product card
export const ProductCard = ({
  data,
  onAddToCart,
  variant = "default",
  className,
}) => {
  const imageUrl = data.images?.[0]?.url || "/logo-icon.jpg";

  const getImageClasses = () => {
    switch (variant) {
      case "compact":
      case "default":
        return "w-full sm:h-48 h-32";
      case "minimal":
        return "w-full sm:h-32 h-28";
      case "highlight":
        return "w-full sm:h-60 sm:52";
      case "feature":
        return "w-full sm:h-64 h-56 object-contain";
      default:
        return "w-48 h-40 sm:h-48 sm:w-full";
    }
  };

  const truncate = (str, n = 20) =>
    str?.length > n ? str.substr(0, n - 1) + "..." : str;

  // product card with variant
  const renderContent = () => {
    switch (variant) {
      case "compact":
        return (
          <>
            <Link to={`/product/${data._id}`}>
              <h3 className="mt-2 text-base font-semibold hover:underline">
                {truncate(data.name)}
              </h3>
            </Link>
            <Button
              variant="outline"
              onClick={() => onAddToCart(data)}
              label="Shop Now"
            />
          </>
        );
      case "feature":
        return (
          <>
            <Link to={`/product/${data._id}`}>
              <h3 className="mt-4 text-xl font-semibold">
                {" "}
                {truncate(data.name)}
              </h3>
            </Link>

            <p className="mt-2 text-sm text-gray-600">
              {data.description ||
                "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use."}
            </p>

            <div className="flex items-start">
              <Button
                variant="outline"
                onClick={() => onAddToCart(data)}
                label="Shop Now"
                className="mt-4 px-14"
              />
            </div>
          </>
        );

      case "minimal":
        return (
          <>
            <Link to={`/product/${data._id}`}>
              <h3 className="mt-2 text-sm font-medium hover:underline">
                {truncate(data.name)}
              </h3>
            </Link>
          </>
        );

      case "highlight":
        return (
          <>
            <Link to={`/product/${data._id}`}>
              <h3 className="mt-4 text-xl font-bold hover:underline">
                {truncate(data.name)}
              </h3>
              <p className="mt-1 text-lg font-semibold">${data.price}</p>
            </Link>

            <Button
              variant="outline"
              onClick={() => onAddToCart(data)}
              label="Buy Now"
              className="mt-2"
            />
          </>
        );

      default: // "default"
        return (
          <>
            <Link to={`/product/${data._id}`}>
              <h3 className="mt-2 text-lg font-medium hover:underline">
                {truncate(data.name)}
              </h3>
            </Link>
            <p className="mt-2 mb-2 text-xl font-semibold">
              {formatPrice(data.price)}
            </p>

            <div className="flex justify-center w-full px-4 mt-auto">
              <div className="w-full ">
                <AddToCartButton product={data} className="w-full" />
              </div>
            </div>
          </>
        );
    }
  };

  return (
    <div
      className={`relative card-base shadow-none border-none h-full bg-[#F6F6F6] flex flex-col justify-between text-center ${className} ${
        variant === "highlight"
          ? "w-full p-4"
          : variant === "feature"
          ? "w-full md:max-w-[400px] bg-white p-6 border-none  "
          : "w-48 sm:w-72 p-3"
      }`}
    >
      <Link to={`/product/${data._id}`}>
        <div
          className={`relative overflow-hidden bg-transparent p-2 rounded-md ${getImageClasses()}`}
        >
          <img
            src={imageUrl}
            alt={data.name}
            loading="lazy"
            className="absolute inset-0 object-contain w-full h-full"
          />
        </div>
      </Link>

      {variant === "feature" ? "" : <WishlistButton product={data} />}

      <div className="flex flex-col justify-between flex-1 mt-4">
        {/* stock availability */}
        {/* <div className="mt-2 text-sm font-medium">
          {data.stock > 0 ? (
            <span className="text-green-600">In Stock</span>
          ) : (
            <span className="text-red-600">Out of Stock</span>
          )}
        </div> */}

        {renderContent()}
      </div>
    </div>
  );
};

// categoryCard
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

const CartItemCard = ({ data, onIncrement, onDecrement, onRemove }) => {
  return (
    <div className="flex flex-col gap-4 p-4 border-b border-gray-200 sm:flex-row sm:items-center sm:justify-between">
      {/* Image and Info */}
      <div className="flex items-start gap-4">
        <img
          src={data?.images?.[0]?.url || "/logo-icon.jpg"}
          alt={data?.name || data?.title}
          className="object-cover w-20 h-20 rounded-lg"
        />
        <div>
          <h4 className="text-base font-semibold sm:text-sm">
            {data?.name || data?.title}
          </h4>
          <p className="text-xs text-gray-600">{data?.category?.name || ""}</p>
        </div>
      </div>

      {/* Quantity and Price Controls */}
      <div className="flex flex-wrap items-center justify-between gap-2 sm:flex-nowrap sm:gap-4">
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

// shipping card
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

// Dynamically renders different card components (product, category, review, etc.) based on the 'type' prop

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
