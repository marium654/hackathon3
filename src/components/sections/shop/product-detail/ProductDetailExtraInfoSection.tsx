"use client";

import React, { useEffect } from "react";

export default function ProductDetailExtraInfoSection({ product_id }: { product_id: string }) {
  useEffect(() => {
    // Example logic inside useEffect
    console.log("ProductDetailExtraInfoSection mounted with product_id:", product_id);
  }, [product_id]);

  return (
    <div>
      <h2>Extra Info Section</h2>
      <p>Product ID: {product_id}</p>
    </div>
    );
  }