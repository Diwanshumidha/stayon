import React from "react";
import "./Footer.css";
import ContactForm from "./ContactForm";
const Footer = () => {
  return (
    <section className=" mt-10 " id="contact-form">
      <div className="footer_wrapper">
        <div className="heading text-primary lg:py-4 max-lg:text-center text-end flex gap-4 max-sm:py-6">
          <h2 className="text-5xl  flex-1 xl:text-7xl  font-semibold">
            Kontaktní <br /> formulář
          </h2>
          <div className=" flex items-end max-lg:hidden">
            <img
              src="/images/Casual_Illustration.webp"
              className=" h-[120px] scale-x-[-1]  "
            />
          </div>
        </div>
        <div className="contact bg-primary max-w-[600px] mx-auto">
          <ContactForm />
        </div>
        <div className="details border-t-8 border-primary py-5">
          <Details />
        </div>

        <div className="margin-top" />
        <div className="margin-bottom border-t-8 border-primary" />
      </div>
      <div className=" grid place-content-center max-sm:px-3 bg-black py-6 pt-16 gap-3 border-b-8 border-primary   ">
        <img
          src="/images/Logo_Light.webp"
          className=" w-full max-w-72 mx-auto"
          width={760}
          height={206}
        />
        <p className=" text-white text-center">
          design & conent by <span className=" text-primary">STAYON MEDIA</span>{" "}
          agency 2024
        </p>
      </div>
    </section>
  );
};

export default Footer;

const Details = () => {
  return (
    <div className=" flex justify-center items-center flex-col h-full pl-3">
      <div></div>
      <div className="">
        <h3 className="text-xl xl:text-3xl text-white font-bold mb-2 ">
          Kontaktní údaje:
        </h3>
        <ul className=" text-lg  xl:text-xl">
          <li className=" flex gap-2 max-lg:flex-col">
            <p className="  font-bold">Jan Adamec</p>
            <span className="text-white">+420 775 487 300</span>
          </li>
          <li className=" flex gap-2 max-lg:flex-col">
            <p className="  font-bold">Ondřej Kocziszký</p>
            <span className="text-white">+420 888 888 888</span>
          </li>
          <li className=" flex gap-2 mt-2 max-lg:flex-col">
            <p className="  font-bold">email</p>
            <a
              className=" text-white hover:text-primary hover:underline"
              target="_blank"
              href="mailto:stayon.info@gmail.com"
            >
              stayon.info@gmail.com
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
