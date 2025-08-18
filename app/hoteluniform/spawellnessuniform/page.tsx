import React from "react";
import SidebarLinks from "@/components/SidebarLinks";
import ProductGrid from "@/components/ProductGrid";

const SpaWellnessUniforms = () => {
  return (
    <>
      <section className="py-10">
        <div className="container">
          <h1 className="text-2xl md:text-3xl font-bold mb-6">
            Welcome to Spa & Wellness Uniforms Page.
          </h1>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="md:col-span-1">
              <SidebarLinks></SidebarLinks>
            </div>
            <div className="md:col-span-3">
              <ProductGrid></ProductGrid>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SpaWellnessUniforms;
