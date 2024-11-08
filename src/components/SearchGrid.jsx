import React from "react";
import GridItem from "./GridItem";

const gridItem = [
  {
    img: "https://via.placeholder.com/150",
    companyName: "Aficiones y ocio",
    location: "SPS",
    companyDescription: "description",
    companyCategory: "Aficiones y ocio",
  },
  {
    img: "https://via.placeholder.com/150",
    companyName: "Animales",
    location: "SPS",
    companyDescription: "description",
    companyCategory: "Animales",
  },
  {
    img: "https://via.placeholder.com/150",
    companyName: "Casa y jardín",
    location: "SPS",
    companyDescription: "description",
    companyCategory: "Casa y jardin",
  },
];

const IconGrid = () => {
  return (
    <div className="flex flex-wrap justify-center container gap-6 p-8 mx-auto">
      {gridItem.map((item, index) => (
        <GridItem
          key={index}
          icon={item.img}
          companyName={item.companyName}
          location={item.location}
          companyDescription={item.companyDescription}
          companyCategory={item.companyCategory}
        />
      ))}
    </div>
  );
};

export default IconGrid;
