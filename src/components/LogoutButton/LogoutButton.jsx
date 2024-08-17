import React from "react";
import "./LogoutButton.scss";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button
      className="button--logout"
      onClick={() =>
        logout({
          logoutParams: {
            returnTo: `${import.meta.env.VITE_APP_BASE_URL}/login`,
          },
        })
      }
    >
      Log Out
    </button>
  );
};

export default LogoutButton;
