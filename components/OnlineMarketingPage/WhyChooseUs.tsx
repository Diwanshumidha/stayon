import React from "react";

const WhyChooseUs = () => {
  return (
    <section className=" grid md:grid-cols-2 md:mt-24 px-20 md:px-60">
      <div className=" grid place-content-center">
        <img
          src="/images/jet_white.webp"
          alt=" Person sitting on jet"
        />
      </div>
      <div className=" grid place-content-center text-right">
        <h2 className=" text-primary  text-3xl md:text-6xl font-semibold  py-2 border-primary ">
          Proč zvolit nás?
        </h2>
        <div className=" space-y-3 mt-6">
          <p className="text-black">Zvolení nás pro marketingové potřeby přináší zákazníkům nejen kreativní a inovativní přístup, ale také hluboké porozumění jejich specifickým cílům a potřebám.</p>
          <p className="text-black">S důrazem na měřitelné výsledky a efektivní strategie jsme partnerem, který pomůže zákazníkům vytvořit silnou a atraktivní přítomnost na trhu, vedoucí k dlouhodobému úspěchu jejich značky</p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;