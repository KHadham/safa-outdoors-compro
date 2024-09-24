import LineDivider from "components/atoms/LineDivider";
import Image from "next/image";
import React from "react";
import Text from "components/atoms/Text";

const LogoList = () => {
  return (
    <>
      <Text value={"Produk tersedia"} textStyle={"SectionBadge"} />
      <section
        className="mt-6 flex flex-row flex-wrap place-items-center justify-around gap-4 md:gap-0 border-y border-borderLight bg-light px-6 py-8 w-full rounded-md "
        data-aos="fade-up"
      >
        <div className="">
          <Image
            src={"/images/brand/eiger.svg"}
            width={120}
            height="36"
            alt="github logo"
          />
        </div>
        <div className="">
          <Image
            src={"/images/brand/arei.svg"}
            width={120}
            height="36"
            alt="forbes logo"
          />
        </div>
        <div className="">
          <Image
            src={"/images/brand/avtech.svg"}
            width={120}
            height="36"
            alt="google logo"
          />
        </div>
        <div className="">
          <Image
            src={"/images/brand/consina.svg"}
            width={120}
            height="36"
            alt="microsoft logo"
          />
        </div>
        <div className="">
          <Image
            src={"/images/brand/deuter.svg"}
            width={120}
            height="36"
            alt="facebook logo"
          />
        </div>
        <div className="">
          <Image
            src={"/images/brand/lafuma.svg"}
            width={120}
            height="36"
            alt="facebook logo"
          />
        </div>
        <div className="">
          <Image
            src={"/images/brand/millet.svg"}
            width={120}
            height="36"
            alt="facebook logo"
          />
        </div>
        <div className="">
          <Image
            src={"/images/brand/fjallraven.svg"}
            width={120}
            height="36"
            alt="facebook logo"
          />
        </div>
      </section>
    </>
  );
};

export default LogoList;
