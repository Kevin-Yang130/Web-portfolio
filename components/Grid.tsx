import React from "react";
import { BentoGrid } from "./ui/BentoGrid";
import { BentoGridItem } from "./ui/BentoGrid";
import { gridItems } from "@/data";
import { isMobile as isMobileDevice } from "react-device-detect";

const Grid = () => {
  const isMobile = isMobileDevice;
  const filteredItems = !isMobile
    ? gridItems
    : gridItems.filter((item) => item.id !== 5);

  return (
    <section id="about">
      <BentoGrid className="w-full py-20">
        {filteredItems.map(
          ({
            id,
            title,
            description,
            className,
            img,
            imgClassName,
            titleClassName,
            spareImg,
          }) => (
            <BentoGridItem
              id={id}
              key={id}
              title={title}
              description={description}
              className={className}
              img={img}
              imgClassName={imgClassName}
              titleClassName={titleClassName}
              spareImg={spareImg}
            />
          )
        )}
      </BentoGrid>
    </section>
  );
};

export default Grid;
