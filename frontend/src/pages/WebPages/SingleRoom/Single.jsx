import React, { useState, useEffect } from "react";

import WebLayout from "../../../layout/WebLayout";
import PropertyGallery from "../../../components/common/SingleRoom/PropertyGallery";
import OverView from "../../../components/common/SingleRoom/Overview";
import Description from "../../../components/common/SingleRoom/Description";
import FeaturesAminites from "../../../components/common/SingleRoom/FeaturesAminites";
import Address from "../../../components/common/SingleRoom/Address";
import WalkScore from "../../../components/common/SingleRoom/WalkScore";
import NearbySimilarProperty from "../../../components/common/SingleRoom/NearbySimilarProperty";
import ScheduleTour from "../../../components/common/SingleRoom/ScheduleTour";
import ContactWithAgent from "../../../components/common/SingleRoom/ContactWithAgent";
import PropertyHeader from "../../../components/common/SingleRoom/PropertyHeader";
// import ContactFormSingle from '../../../components/common/contactFormSingle/ContactFormSingle'

const Single = ({ room, users }) => {
  const owner = users.find((user) => user.userId === room.ownerId);

  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <WebLayout>
        {/* Property All Single V1 */}
        <section className="pt-[60px] pb-[90px] bg-[#F7F7F7]">
          <div
            className={`hidden lg:block absolute h-[87px] w-full top-0 ${
              !isScrolled ? "bg-midnight" : "bg-transparent"
            }`}
          />
          <div className="container">
            <div className="flex flex-wrap mb-[30px] mt-[30px]">
              <PropertyGallery images={room.images} />
            </div>
            {/* End .row */}

            <div className="flex flex-wrap">
              <PropertyHeader
                title={room.title}
                address={room.address}
                price={room.price}
              />{" "}
              {/* params.id */}
            </div>
            {/* End .row */}

            <div className="flex flex-wrap">
              <div className="lg:w-2/3 pr-[12px] pl-[12px]">
                <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden relative">
                  <h4 className="title fz17 mb30">Overview</h4>
                  <div className="flex flex-wrap ">
                    <OverView
                      bedroom={room.bedrooms}
                      bath={room.bathrooms}
                      yearbuilt={room.yearBuilt}
                      garage={room.garage}
                      size={room.size}
                      propertytype={room.structureType}
                    />
                  </div>
                </div>
                {/* End .ps-widget */}

                <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden relative">
                  <h4 className="title fz17 mb30">Property Description</h4>
                  <Description
                    description={room.description}
                    excerpt={room.excerpt}
                  />
                  {/* End property description */}
                </div>
                {/* End .ps-widget */}

                <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden relative">
                  <h4 className="title fz17 mb30">Features &amp; Amenities</h4>
                  <div className="flex flex-wrap ">
                    <FeaturesAminites amenities={room.amenities} />
                  </div>
                </div>
                {/* End .ps-widget */}

                <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden relative">
                  <h4 className="title fz17 mb30 mt30">Address</h4>
                  <div className="flex flex-wrap ">
                    <Address
                      address={room.address}
                      city={room.city}
                      state={room.state}
                      postalCode={room.postalCode}
                      countryCode={room.countryCode}
                      country={room.country}
                      latitude={room.latitude}
                      longitude={room.longitude}
                    />
                  </div>
                </div>
                {/* End .ps-widget */}

                <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden relative">
                  <h4 className="title fz17 mb30">Walkscore</h4>
                  <div className="flex flex-wrap ">
                    <WalkScore
                      address={room.address}
                      city={room.city}
                      state={room.state}
                      postalCode={room.postalCode}
                      score={room.score}
                    />
                  </div>
                </div>
                {/* End .ps-widget */}
              </div>
              {/* End .col-8 */}

              <div className="lg:w-1/3 pr-[12px] pl-[12px]">
                <div className="column">
                  <div className="default-box-shadow1 bdrs12 bdr1 p30 mb30-md bgc-white relative">
                    <h4 className="form-title mb5">Schedule a tour</h4>
                    <ScheduleTour id={1} />
                    {/* <ContactFormSingle title={'Schedule a tour'} /> */}
                  </div>
                  {/* End .Schedule a tour */}

                  <div className="agen-personal-info relative bgc-white default-box-shadow1 bdrs12 p30 mt30">
                    <div className="widget-wrapper mb-0">
                      <h6 className="title fz17 mb30">Get More Information</h6>
                      {owner && <ContactWithAgent user={owner} />}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End .row */}

            {/* End .row */}

            <div className="flex flex-wrap ">
              <div className="lg:w-full pr-[12px] pl-[12px]">
                <div className="property-city-slider">
                  <NearbySimilarProperty />
                </div>
              </div>
            </div>
            {/* End .row */}
          </div>
          {/* End .container */}
        </section>
        {/* End Property All Single V1  */}
      </WebLayout>
    </>
  );
};
export default Single;
