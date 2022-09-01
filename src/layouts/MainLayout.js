import React from "react";
import Header from "../component/common/header";
import Footer from "../component/common/footer";

const AdminLayout = ({ children }) => {
  return (
    <>
      <div className={`theme-section light`}>
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default AdminLayout;
