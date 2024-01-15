import React from "react";

const Sponsor = () => {
  return (
    <section className="md:my-24 px-20 md:px-60">
      <h2 className=" md:my-24 text-primary text-center text-3xl md:text-6xl font-semibold  py-2 border-primary ">
        S kým spolupracujeme
      </h2>
      <div className=" grid md:grid-cols-3 max-md:space-y-8 md:space-x-4 place-content-center">
        <img
          src="/images/Sušická.webp"
          alt="susicka logo"
        />
        <img
          src="/images/ongo-1.webp"
          alt="ongo logo"
        />
        <img
          src="/images/BIESSE.webp"
          alt="biesse logo"
        />
      </div>
    </section>
  );
};

export default Sponsor;