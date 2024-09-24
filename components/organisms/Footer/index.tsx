import LineDivider from "components/atoms/LineDivider";
import NavBrand from "components/atoms/NavBrand";
import NavLink from "components/atoms/NavLink";
import Text from "components/atoms/Text";
import Link from "next/link";
import React from "react";
import { FaGithub,FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <LineDivider />

      <footer className="mt-32 pb-16">
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-16 xl:gap-20">
          <div className="space-y-5">
            <NavBrand />
            <Link href={"https://maps.app.goo.gl/qc8F2raW9gj1n6UR9"} passHref>
              <div className="cursor-pointer">
                <Text
                  value={`Jl. Raya Bogor No.KM.28 No.34, RT.3/RW.2, Pekayon, Jakarta, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13710`}
                  textStyle="BlogContent"
                />
              </div>
            </Link>
            <Link
              href={"https://github.com/iceboy1406"}
              passHref
              className="flex-row"
            >
              <div className="cursor-pointer flex flex-row items-center gap-2">
                <Text
                  value={`Design By Collosal LLC Copyright © ${new Date().getFullYear()}`}
                  textStyle="AuthorJob"
                />
                <FaGithub color="white" size={20} />
              </div>
            </Link>
            <Link
              href={"https://www.linkedin.com/in/kh-adham/"}
              passHref
              className="flex-row"
            >
              <div className="cursor-pointer flex flex-row items-center gap-2">
                <Text
                  value={`Deployed by Khadam Ikhwanus Shofa`}
                  textStyle="AuthorJob"
                />
                <FaLinkedin color="white" size={20} />
              </div>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:gap-16 xl:gap-20">
            <div className="space-y-5">
              <Text value="SERVICES" textStyle="BlogContent" />
              <div className="space-y-[10px]">
                <NavLink value="Sewa" href="/comingsoon" />
                <NavLink value="Sewa Big Event" href="/comingsoon" />
                <NavLink value="Open/Private Camping" href="/comingsoon" />
                <NavLink value="Open/Private Trip" href="/comingsoon" />
                <NavLink value="Open/Private Hiking" href="/comingsoon" />
                <NavLink value="Store" href="/comingsoon" />
                <NavLink value="Prewedding Gunung" href="/comingsoon" />
              </div>
            </div>
            <div className="space-y-5">
              <Text value="COMPANY" textStyle="BlogContent" />
              <div className="space-y-[10px]">
                <NavLink value="About" href="/comingsoon" />
                <NavLink value="Contact" href="/comingsoon" />
                <NavLink value="Send Quote" href="/comingsoon" />
                <NavLink value="Privacy Policy" href="/comingsoon" />
                <NavLink value="Term of Service" href="/comingsoon" />
                <NavLink value="Jobs" href="/comingsoon" />
                <NavLink value="Blogs" href="/comingsoon" />
              </div>
            </div>
            <div className="space-y-5">
              <Text value="RESOURCES" textStyle="BlogContent" />
              <div className="space-y-[10px]">
                <NavLink value="Support" href="/comingsoon" />
                <NavLink value="Documentation" href="/comingsoon" />
                <NavLink value="License" href="/comingsoon" />
                <NavLink value="Sitemap" href="/comingsoon" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
