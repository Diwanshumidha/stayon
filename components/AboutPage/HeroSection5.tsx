import { aboutUsDetails } from "@/lib/constants";
import React from "react";

const HeroSection5 = () => {
    return (
        <section className="marketing-icons-grid-container--gradient w-full grid px-20 md:px-60">
            <div className="space-y-6">
                <h2 className=" md:mt-24 md:pt-6 text-primary text-left text-3xl md:text-6xl font-semibold  py-2 border-primary ">
                    Kdo jsme?
                </h2>
                <p className="text-white font-bold text-2xl md:text-4xl">
                    Jsme tým mladých kluků, kteří mají <br /> velké ambice a baví je co dělají.
                </p>
            </div>

            <div className=" grid md:grid-cols-3 my-12 md:my-24 space-x-5">
                {aboutUsDetails.map((point) => {
                    return (
                        <AboutUsDetail
                            heading={point.heading}
                            para={point.para}
                            icon={point.icon}
                            key={point.heading}
                        />
                    );
                })}
            </div>
        </section>
    );
};

export default HeroSection5;

const AboutUsDetail = ({
    heading,
    para,
    icon
}: {
    heading: string;
    para: string;
    icon: string;
}) => {
    return (
        <div className=" grid place-content-start">
            <div className="aspect-auto shadow-md">
                <img className="w-96 h-96 object-cover shadow-md rounded-md" src={icon} alt={heading} />
            </div>
            <div className="w-full h-1/2  py-3 text-white">
                <h2 className="text-2xl md:text-5xl font-bold ">{heading}</h2>
                <p className="text-gray-600 text-lg my-1">{para}</p>
            </div>
        </div>
    );
};