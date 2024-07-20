import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const TestUserProfile = () => {
  console.log("TestUserProfile is rendering");
  const { user, isAuthenticated, isLoading, getAccessTokenSilently } =
    useAuth0();
  const [userMetadata, setUserMetadata] = useState(null);

  useEffect(() => {
    const getUserMetadata = async () => {
      const domain = "dev-6v3hej13fgh5kohn.us.auth0.com";

      console.log("Attempting to get access token silently...");

      try {
        const accessToken = await getAccessTokenSilently({
          authorizationParams: {
            audience: `${import.meta.env.VITE_AUTH_AUDIENCE}`,
            // audience: `https://${domain}/api/v2/`,
            scope: "read:current_user",
          },
        });
        console.log("Access token obtained: ", accessToken);

        const userDetailsByIdUrl = `${
          import.meta.env.VITE_AUTH_AUDIENCE
        }/users/${user.sub}`;
        // const userDetailsByIdUrl = `https://${domain}/api/v2/users/${user.sub}`;

        const metadataResponse = await fetch(userDetailsByIdUrl, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        const { user_metadata } = await metadataResponse.json();

        setUserMetadata(user_metadata);
      } catch (e) {
        console.error("Error getting user metadata: ", e.message);
      }
    };

    if (user) {
      getUserMetadata();
    }
  }, [getAccessTokenSilently, user?.sub]);

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  if (!isAuthenticated) {
    return <div>User is not authenticated</div>;
  }

  return (
    <div>
      <h1>User Details</h1>
      <img src={user.picture} alt={user.name} />
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <h2>User Metadata</h2>
      {userMetadata ? (
        <pre>{JSON.stringify(userMetadata, null, 2)}</pre>
      ) : (
        "No user metadata defined"
      )}
    </div>
  );
};

export default TestUserProfile;
