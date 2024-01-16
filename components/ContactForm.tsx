import React from "react";
import Input from "./Input/Input";
import Button from "./Button";

const ContactForm = () => {
  return (
    <div className=" px-10 xl:px-20 py-20 gap-3 h-full flex flex-col text-xl min-h-[600px] ">
      <div className=" flex justify-between gap-3">
        <Input placeholder="Jméno" />
        <Input placeholder="Jméno" />
      </div>
      <div className=" flex justify-between gap-3">
        <Input placeholder="Jméno" />
        <Input placeholder="Jméno" />
      </div>
      <div className=" flex-1">
        <Input
          className="w-full h-full"
          placeholder="Jméno"
          variant="textarea"
        />
      </div>
      <div className=" pt-4 mx-auto">
        <Button className="">Odasea</Button>
      </div>
    </div>
  );
};

export default ContactForm;
