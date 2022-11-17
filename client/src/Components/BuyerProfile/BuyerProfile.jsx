import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "../Auth/LogoutButton";

export default function BuyerProfile() {
  const { user, isLoading, isAuthenticated } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    isAuthenticated && (
      <div>
        <img
          src={user.picture}
          alt={user.name}
          className="rounded-circle img-sm"
        />
        <LogoutButton />
      </div>
    )
  );
}
