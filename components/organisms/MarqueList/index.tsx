import Image from "next/image";
import React, { useState } from "react";
import Text from "components/atoms/Text";

const LogoList = ({
  data,
  background = false,
  width = 80,
  height = 80,
  title = "Berkerjasama dengan",
}: {
  data: string[];
  background?: boolean;
  width?: number;
  height?: number;
  title?: string;
}) => {
  return (
    <>
      <Text value={title} textStyle={"SectionBadge"} />
      <section
        className=" mt-6 overflow-hidden  whitespace-nowrap flex-nowrap place-items-center justify-around gap-4 md:gap-0 border-y border-borderLight bg-light px-6 py-8 w-full rounded-md  "
        data-aos="fade-up"
      >
        <div className="animate-marquee space-x-10">
          {data.concat(data).map((item, index) => {
            return (
              <div
                key={index}
                className={`rounded-full inline-block ${
                  background ? "border-white p-1 bg-slate-100 border-2" : ""
                }`}
              >
                <Image src={item} width={width} height={height} alt={item} />
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default LogoList;
