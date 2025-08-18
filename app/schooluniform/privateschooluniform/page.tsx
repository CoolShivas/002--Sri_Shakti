import React from "react";

const PrivateSchoolUniforms = () => {
  return (
    <>
      <section className="py-10">
        <div className="container">
          <h1 className="text-2xl md:text-3xl font-bold mb-6">
            Welcome to Private School Uniforms Page.
          </h1>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="md:col-span-1">SideBar</div>
            <div className="md:col-span-3">ProductGrid</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivateSchoolUniforms;
