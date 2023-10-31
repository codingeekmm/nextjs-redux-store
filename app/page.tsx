"use client";
import React, { useState, useEffect } from "react";
// ui
import { Button } from "@mui/material";
// store
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./store";
import { addProduct } from "./store/slices/product/product-slice";

export default function Home() {
  const iniproducts = useSelector(
    (state: RootState) => state.productslice.products
  );
  const dispactch = useDispatch();

  const addAProduct = () => {
    const a: any = { id: "4", name: "Oragne", qty: 8, price: 1 };
    dispactch(addProduct(a));
  };

  console.log("The product", iniproducts);
  return (
    <>
      <h1>Welcome to Home Page!</h1>
      <Button variant="contained" onClick={addAProduct}>
        Add Data Product
      </Button>
    </>
  );
}
