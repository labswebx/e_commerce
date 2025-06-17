import React from "react";
import { useProducts } from "../../../features/products/productHooks";
import ProductGrid from "./ProductGrid";

const ProductList = () => {
  const { products } = useProducts();
  return (
    <div>
      <ProductGrid products={products} />
    </div>
  );
};

export default ProductList;
