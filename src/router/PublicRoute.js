import React from "react";
import FullLayout from "../layouts/FullLayout";

const PublicRoute = ({ children }) => {
  return <FullLayout>{children}</FullLayout>;
};

export default PublicRoute;
