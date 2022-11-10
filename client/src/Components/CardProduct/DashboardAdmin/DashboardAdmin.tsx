import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllAdmins } from "../../../Redux/actions";

export default function DashboardAdmin() {
  const dispatch = useDispatch();
  const allUsers = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(getAllAdmins);
  });

  return (
    <>
      <div>
        <h1>{allUsers}</h1>
      </div>
    </>
  );
}
