import React from "react";
import MainLayout from "../layouts/MainLayout";

const PrivateRoute = ({ children }) => {
  //
  return <MainLayout>{children}</MainLayout>;
};

export default PrivateRoute;
