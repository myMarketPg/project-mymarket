import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Loading } from "../Loading/Loading";

export default function DetailProduct() {
  const detailProduct = useSelector((state) => state.detail);
  const { id } = useParams();

  return (
    <>
      {!detailProduct.id ? (
        <div>
          <Loading />
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
