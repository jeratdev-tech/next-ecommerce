import React from "react";
import ProductImages from "../components/ProductImages";
import CustomizeProducts from "../components/CustomizeProducts";
import Add from "../components/Add";

const SinglePage = () => {
  return (
    <div className=" px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 relative flex flex-col lg:flex-row gap-16">
      {/* IMG */}
      <div className="w-full lg:w-1/2 lg:sticky top-20 h-max ">
        <ProductImages />
      </div>
      {/* TEXT */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <h1 className="text-4xl font-medium">Product Name</h1>
        <p className="text-gray-500">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere quas
          placeat accusantium mollitia molestiae accusamus atque saepe tenetur
          rerum architecto sunt, a libero suscipit porro, provident nam, aperiam
          nihil ratione.
        </p>
        <div className="h-[2px] bg-gray-100" />
        <div className="flex items-center gap-5">
          <h3 className="text-xl text-gray-500 line-through">$59</h3>
          <h2 className="font-medium text-2xl">$49</h2>
        </div>
        <div className="h-[2px] bg-gray-100" />
        <CustomizeProducts />
        <Add />
        <div className="h-[2px] bg-gray-100" />
        <div className="text-sm">
          <h4 className="font-medium mb-4">Title</h4>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatibus, quod, voluptates, quisquam voluptatibus, quod
            voluptates, quisquam voluptatibus, quod voluptates, quisquam
            voluptatibus, quod voluptates.{" "}
          </p>
        </div>
        <div className="text-sm">
          <h4 className="font-medium mb-4">Title</h4>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatibus, quod, voluptates, quisquam voluptatibus, quod
            voluptates, quisquam voluptatibus, quod voluptates, quisquam
            voluptatibus, quod voluptates.{" "}
          </p>
        </div>
        <div className="text-sm">
          <h4 className="font-medium mb-4">Title</h4>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatibus, quod, voluptates, quisquam voluptatibus, quod
            voluptates, quisquam voluptatibus, quod voluptates, quisquam
            voluptatibus, quod voluptates.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
