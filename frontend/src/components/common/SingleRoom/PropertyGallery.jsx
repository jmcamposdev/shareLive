import React from "react";
import { Gallery, Item } from "react-photoswipe-gallery";
import Image from "next/image";

const PropertyGallery = ({ images }) => {
  return (
    <>
      <Gallery>
        {images.map((image, index) => (
          <Item
            key={index}
            original={image}
            thumbnail={image}
            width={image.width}
            height={image.height}
          >
            {({ ref, open }) => (
              <div
                onClick={open}
                role="button"
                className="w-100 h-100 cover"
                ref={ref}
              >
                <Image
                  src={image}
                  width={image.width}
                  height={image.height}
                  alt={`Image ${index + 1}`}
                />
              </div>
            )}
          </Item>
        ))}
      </Gallery>
    </>
  );
};

export default PropertyGallery;
