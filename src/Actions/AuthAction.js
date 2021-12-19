export const loginUser = (details) => {
  return {
    type: "SET_LOGGED",
    payload: details,
  };
};

export const logoutUser = () => {
  localStorage.removeItem("JWTtoken");
  window.location.href = "/ethereum";
  return {
    type: "REMOVE_LOGGED",
  };
};
