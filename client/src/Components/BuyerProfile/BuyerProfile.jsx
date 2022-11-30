import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useAuth } from "../../Context/authContext";

export default function BuyerProfile() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { user, logOut, loading } = useAuth();
  console.log(user);

  const handleLogOut = async () => {
    await logOut();
    history.push("/login");
  };

  if (loading) {
    return <p>loading</p>;
  }
  return (
    <div>
      <h1>BuyerProfile</h1>
    </div>
  );
}
