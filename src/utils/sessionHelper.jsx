import { Navigate } from "react-router-dom";

const invalidateSession = () => localStorage.clear();

const setUserData = () => {
  let token = "dummytoken";
  localStorage.setItem("chub_l9sj3n", token);
};

const getToken = localStorage.getItem("chub_l9sj3n");

const CheckUser = ({ forLoggedOut = false, red = false, children = null }) => {
  let hasToken = localStorage.getItem("chub_l9sj3n");

  // Only show for logged in user
  if (!forLoggedOut && !hasToken) {
    if (red) {
      invalidateSession();
      return <Navigate to="/?showDialog=y&type=signin" />;
    }
    return null;
  }
  // Only show for logged out user (w/ forLoggedOut=true)
  else if (forLoggedOut && hasToken) {
    if (red) return <Navigate to="/" />;
    return null;
  }
  if (children) return children;
  return null;
};

const getActiveUser = () => {
  let hasToken = localStorage.getItem("chub_l9sj3n");

  return hasToken;
};

export { setUserData, getToken, CheckUser, invalidateSession, getActiveUser };
