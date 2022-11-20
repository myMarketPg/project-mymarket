import React from "react";
import { useAuth } from "../../Context/authContext";
import { Link } from "react-router-dom";

export function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();
  console.log(user);
  if (loading) return <h1>loading</h1>;
  if (!user) return <Link to="/login" />;
  return { children };
}
