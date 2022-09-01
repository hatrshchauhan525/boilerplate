import React from "react";
import { Helmet } from "react-helmet";

function Dashboard() {
  return (
    <>
      <Helmet>
        <title>BoilerPlate - Home</title>
      </Helmet>
      <section className="mid-section">
        <h4 className="mb-0 text-center">Content</h4>
      </section>
    </>
  );
}

export default Dashboard;
