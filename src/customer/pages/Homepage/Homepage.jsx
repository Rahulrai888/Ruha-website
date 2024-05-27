import React from "react";
import MainCarosel from "../../components/HomeCarosel/MainCarosel";
import HomesectionCarosel from "../../components/HomesectionCarosel/HomesectionCarosel";
import { mens_kurta } from "../../../data/mens_kurta";

const Homepage = () => {
  return (
    <div>
      <MainCarosel />

      <div className="space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10">
        <HomesectionCarosel Data={mens_kurta} sectionName={"Men's Kurta"} />
        <HomesectionCarosel Data={mens_kurta} sectionName={"Men's Shoes"} />
        <HomesectionCarosel Data={mens_kurta} sectionName={"Men's shirt"} />
        <HomesectionCarosel Data={mens_kurta} sectionName={"Women's Saree"} />
        <HomesectionCarosel Data={mens_kurta} sectionName={"Women's Dress"} />
      </div>
    </div>
  );
};

export default Homepage;
