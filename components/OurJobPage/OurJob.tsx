import React from "react";

const OurJob = () => {
  return (
    <section className=" px-6 py-20 container mx-auto space-y-4">
      <h2 className=" text-4xl lg:text-7xl mb-5 font-semibold text-center">
        Naše práce
      </h2>
      <div className=" grid grid-cols-1 md:grid-cols-2  gap-4">
        <div className=" bg-primary hover:scale-105 transition-transform duration-200  ">
          <img
            src="/images/Rectangle 64.webp"
            alt=""
            className=" w-full "
            width={637}
            height={300}
          />
        </div>
        <div className=" bg-primary hover:scale-105 transition-transform duration-200  ">
          <img
            src="/images/Rectangle 65-1.webp"
            alt=""
            className=" w-full "
            width={637}
            height={300}
          />
        </div>
        <div className=" bg-primary hover:scale-105 transition-transform duration-200  ">
          <img
            src="/images/Rectangle 67-1.webp"
            alt=""
            className=" w-full "
            width={637}
            height={300}
          />
        </div>
        <div className=" bg-primary hover:scale-105 transition-transform duration-200  ">
          <img
            src="/images/Rectangle 68-1.webp"
            alt=""
            className=" w-full "
            width={637}
            height={300}
          />
        </div>
      </div>
    </section>
  );
};

export default OurJob;
