import React, { use } from "react";
import services, { servicesData } from "../servicesData/services.js";

const ContentCard = ({ title, description, image, price }) => {
  return (
    <div className="block rounded-lg  bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
      <div
        className="relative overflow-hidden p-4 bg-cover bg-no-repeat"
        data-te-ripple-init
        data-te-ripple-color="light"
      >
        <img className="rounded-t-lg block" src={image} alt="" />
      </div>
      <div className="p-4">
        <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
          {title}
        </h5>
        <p className="mt-3 mb-2 text-base text-neutral-600 dark:text-neutral-200">
          {description}
        </p>
        <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
          {price}
        </p>
      </div>
    </div>
  );
};

export default ContentCard;
