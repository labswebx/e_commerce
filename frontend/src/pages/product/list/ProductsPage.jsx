// main entry point

import React from "react";
import Card from "../../../components/ui/Card";
// import Card from "@/components/ui/Card";

// Dummy products data
const products = [
  {
    id: 1,
    title: "iPhone 14 Pro Max",
    description: "Apple’s latest and greatest smartphone.",
    price: 1199,
    image: "https://dummyimage.com/300x300/000/fff&text=iPhone+14",
  },
  {
    id: 2,
    title: "Samsung Galaxy S23",
    description: "Flagship Android phone with top specs.",
    price: 999,
    image: "https://dummyimage.com/300x300/111/fff&text=Galaxy+S23",
  },
  {
    id: 3,
    title: "Google Pixel 7",
    description: "Clean Android experience with great camera.",
    price: 799,
    image: "https://dummyimage.com/300x300/222/fff&text=Pixel+7",
  },
  {
    id: 3,
    title: "Google Pixel 7",
    description: "Clean Android experience with great camera.",
    price: 799,
    image: "https://dummyimage.com/300x300/222/fff&text=Pixel+7",
  },
  {
    id: 3,
    title: "Google Pixel 7",
    description: "Clean Android experience with great camera.",
    price: 799,
    image: "https://dummyimage.com/300x300/222/fff&text=Pixel+7",
  },
  {
    id: 3,
    title: "Google Pixel 7",
    description: "Clean Android experience with great camera.",
    price: 799,
    image: "https://dummyimage.com/300x300/222/fff&text=Pixel+7",
  },
  {
    id: 3,
    title: "Google Pixel 7",
    description: "Clean Android experience with great camera.",
    price: 799,
    image: "https://dummyimage.com/300x300/222/fff&text=Pixel+7",
  },
  {
    id: 3,
    title: "Google Pixel 7",
    description: "Clean Android experience with great camera.",
    price: 799,
    image: "https://dummyimage.com/300x300/222/fff&text=Pixel+7",
  },
  {
    id: 3,
    title: "Google Pixel 7",
    description: "Clean Android experience with great camera.",
    price: 799,
    image: "https://dummyimage.com/300x300/222/fff&text=Pixel+7",
  },
  {
    id: 3,
    title: "Google Pixel 7",
    description: "Clean Android experience with great camera.",
    price: 799,
    image: "https://dummyimage.com/300x300/222/fff&text=Pixel+7",
  },
  {
    id: 3,
    title: "Google Pixel 7",
    description: "Clean Android experience with great camera.",
    price: 799,
    image: "https://dummyimage.com/300x300/222/fff&text=Pixel+7",
  },
  {
    id: 3,
    title: "Google Pixel 7",
    description: "Clean Android experience with great camera.",
    price: 799,
    image: "https://dummyimage.com/300x300/222/fff&text=Pixel+7",
  },
  {
    id: 3,
    title: "Google Pixel 7",
    description: "Clean Android experience with great camera.",
    price: 799,
    image: "https://dummyimage.com/300x300/222/fff&text=Pixel+7",
  },
  {
    id: 3,
    title: "Google Pixel 7",
    description: "Clean Android experience with great camera.",
    price: 799,
    image: "https://dummyimage.com/300x300/222/fff&text=Pixel+7",
  },
  {
    id: 3,
    title: "Google Pixel 7",
    description: "Clean Android experience with great camera.",
    price: 799,
    image: "https://dummyimage.com/300x300/222/fff&text=Pixel+7",
  },
  {
    id: 3,
    title: "Google Pixel 7",
    description: "Clean Android experience with great camera.",
    price: 799,
    image: "https://dummyimage.com/300x300/222/fff&text=Pixel+7",
  },
  {
    id: 3,
    title: "Google Pixel 7",
    description: "Clean Android experience with great camera.",
    price: 799,
    image: "https://dummyimage.com/300x300/222/fff&text=Pixel+7",
  },
  {
    id: 3,
    title: "Google Pixel 7",
    description: "Clean Android experience with great camera.",
    price: 799,
    image: "https://dummyimage.com/300x300/222/fff&text=Pixel+7",
  },
  {
    id: 3,
    title: "Google Pixel 7",
    description: "Clean Android experience with great camera.",
    price: 799,
    image: "https://dummyimage.com/300x300/222/fff&text=Pixel+7",
  },
  {
    id: 3,
    title: "Google Pixel 7",
    description: "Clean Android experience with great camera.",
    price: 799,
    image: "https://dummyimage.com/300x300/222/fff&text=Pixel+7",
  },
  {
    id: 3,
    title: "Google Pixel 7",
    description: "Clean Android experience with great camera.",
    price: 799,
    image: "https://dummyimage.com/300x300/222/fff&text=Pixel+7",
  },
  {
    id: 3,
    title: "Google Pixel 7",
    description: "Clean Android experience with great camera.",
    price: 799,
    image: "https://dummyimage.com/300x300/222/fff&text=Pixel+7",
  },
  {
    id: 3,
    title: "Google Pixel 7",
    description: "Clean Android experience with great camera.",
    price: 799,
    image: "https://dummyimage.com/300x300/222/fff&text=Pixel+7",
  },
  {
    id: 3,
    title: "Google Pixel 7",
    description: "Clean Android experience with great camera.",
    price: 799,
    image: "https://dummyimage.com/300x300/222/fff&text=Pixel+7",
  },
  {
    id: 3,
    title: "Google Pixel 7",
    description: "Clean Android experience with great camera.",
    price: 799,
    image: "https://dummyimage.com/300x300/222/fff&text=Pixel+7",
  },
  {
    id: 3,
    title: "Google Pixel 7",
    description: "Clean Android experience with great camera.",
    price: 799,
    image: "https://dummyimage.com/300x300/222/fff&text=Pixel+7",
  },
  {
    id: 3,
    title: "Google Pixel 7",
    description: "Clean Android experience with great camera.",
    price: 799,
    image: "https://dummyimage.com/300x300/222/fff&text=Pixel+7",
  },
  {
    id: 3,
    title: "Google Pixel 7",
    description: "Clean Android experience with great camera.",
    price: 799,
    image: "https://dummyimage.com/300x300/222/fff&text=Pixel+7",
  },
  {
    id: 3,
    title: "Google Pixel 7",
    description: "Clean Android experience with great camera.",
    price: 799,
    image: "https://dummyimage.com/300x300/222/fff&text=Pixel+7",
  },
  {
    id: 3,
    title: "Google Pixel 7",
    description: "Clean Android experience with great camera.",
    price: 799,
    image: "https://dummyimage.com/300x300/222/fff&text=Pixel+7",
  },
  {
    id: 3,
    title: "Google Pixel 7",
    description: "Clean Android experience with great camera.",
    price: 799,
    image: "https://dummyimage.com/300x300/222/fff&text=Pixel+7",
  },
  {
    id: 3,
    title: "Google Pixel 7",
    description: "Clean Android experience with great camera.",
    price: 799,
    image: "https://dummyimage.com/300x300/222/fff&text=Pixel+7",
  },
  {
    id: 3,
    title: "Google Pixel 7",
    description: "Clean Android experience with great camera.",
    price: 799,
    image: "https://dummyimage.com/300x300/222/fff&text=Pixel+7",
  },
  {
    id: 3,
    title: "Google Pixel 7",
    description: "Clean Android experience with great camera.",
    price: 799,
    image: "https://dummyimage.com/300x300/222/fff&text=Pixel+7",
  },
  // Add more products as needed
];

const ProductsPage = () => {
  const handleAddToCart = (product) => {
    console.log("Added to cart:", product);
  };

  return (
    <div className="p-6">
      <h1 className="mb-6 text-2xl font-bold">All Products</h1>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <Card
              key={product.id}
              type="product"
              data={product}
              onAddToCart={() => handleAddToCart(product)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
