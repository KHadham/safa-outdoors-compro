import Image from "next/image";
import React from "react";
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
        className="mt-6 overflow-x-auto flex items-center gap-4 md:gap-6 border-y border-borderLight bg-light px-6 py-8 w-full rounded-md scrollbar-hide"
        data-aos="fade-up"
      >
        <div className="animate-marquee flex gap-x-10 min-w-max">
          {data.concat(data).map((item, index) => (
            <div
              key={index}
              className={`rounded-full ${
                background ? "border-white p-1 bg-slate-100 border-2" : ""
              }`}
            >
              <Image src={item} width={width} height={height} alt="logo" />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default LogoList;
