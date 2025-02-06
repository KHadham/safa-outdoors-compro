import LineDivider from "components/atoms/LineDivider";
import TeamCard from "components/molecules/Card/TeamCard";
import PageSentence from "components/molecules/PageSentence";
import SectionSentence from "components/molecules/SectionSentence";
import LogoList from "components/organisms/LogoList";
import StatisticList from "components/organisms/StatisticList";
import PageTemplate from "components/templates/PageTemplate";
import Image from "next/image";
import React from "react";
import StatisticListItem from "components/molecules/StatisticListItem";
import { FiUser } from "react-icons/fi";
import { GiSchoolBag } from "react-icons/gi";
import { TiMap } from "react-icons/ti";

const About = () => {
  return (
    <PageTemplate title="About - Safa-Outdoor">
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 place-items-center">
        <aside className="w-full" data-aos="fade-down-right">
          <div className="w-full h-[480px] relative">
            <Image
              src={"/images/about-illustration.webp"}
              layout="fill"
              objectFit="contain"
              quality={80}
              alt="Programmers when coding in their laptop"
            />
          </div>
        </aside>
        <aside
          className="text-center sm:w-10/12 md:w-8/12 lg:w-full lg:text-left"
          data-aos="fade-up-left"
        >
          <PageSentence
            badge="ABOUT"
            title="Safa Outdoor apaan sih ?"
            description={`TIGA DEWA ADVENTURE INDONESIA adalah perusahaan yang dimiliki sepenuhnya oleh Muhammad Rifqi Maulana, yang berdiri sejak 17 Agustus 2008 diinisiasi oleh beberapa anak mahasiswa pecinta alam universitas diponegoro. Tiga Dewa Adventure Indonesia mempunyai badan hukum dengan nama PT. TIGA DEWA NUSANTARA yang bergerak dalam industri pariwisata dengan bidang usaha Jasa Pramuwisata Open Trip / Private Trip, Jasa Biro Perjalanan Wisata, Jasa Agen Perjalanan Wisata, Konsultan Pariwisata, Penjualan Merchandise, Penyewaan Alat Outdoor dan Penyewaan Armada Pariwisata..`}
          />
        </aside>
      </section>
      <LineDivider />
      <section className="grid place-items-center gap-16">
        <div
          className="sm:w-10/12 md:w-8/12 lg:w-6/12 2xl:w-5/12 text-center"
          data-aos="zoom-in-up"
        >
          <SectionSentence
            badge="STATISTICS"
            title="Berbagai data statistik seputar barang, pelanggan, client, dan vendor"
          />
        </div>
        <div className="w-full grid gap-14">
          <div data-aos="fade-right">
            <div className="w-full px-8 py-6 bg-light rounded flex flex-col gap-5 lg:flex-row lg:justify-around lg:items-center">
              <StatisticListItem
                icon={<GiSchoolBag />}
                label="Peralatan"
                value="100+"
              />
              <div className="w-full h-[1px] bg-borderLight md:w-[1px] lg:min-h-[65px]"></div>
              <StatisticListItem
                icon={<FiUser />}
                label="Pelanggan"
                value="193"
              />
              <div className="w-full h-[1px] bg-borderLight md:w-[1px] lg:min-h-[65px]"></div>
              <StatisticListItem icon={<TiMap />} label="Trip Bulan ini" value="21" />
             
            </div>
          </div>
          <LogoList />
        </div>
      </section>
      <section className="grid place-items-center gap-16">
        <div
          className="sm:w-10/12 md:w-8/12 lg:w-6/12 2xl:w-5/12 text-center"
          data-aos="zoom-in-up"
        >
          <SectionSentence
            badge="OUR TEAMS"
            title="Meet the team! All creative people are here"
          />
        </div>
        <div className="w-full grid gap-5 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div data-aos="fade-up">
            <TeamCard
              imageSrc="/images/team-1.webp"
              job="Founder"
              name="Albert Flores"
            />
          </div>
          <div data-aos="fade-up">
            <TeamCard
              imageSrc="/images/team-2.webp"
              job="Chief Technology Officer"
              name="Devon Lane"
            />
          </div>
          <div data-aos="fade-up">
            <TeamCard
              imageSrc="/images/team-3.webp"
              job="UI Designer"
              name="Darrell Steward"
            />
          </div>
          <div data-aos="fade-up">
            <TeamCard
              imageSrc="/images/team-4.webp"
              job="Software Engineer"
              name="Marvin McKinney"
            />
          </div>
          <div data-aos="fade-up">
            <TeamCard
              imageSrc="/images/team-5.webp"
              job="System Analyst"
              name="Floyd Miles"
            />
          </div>
          <div data-aos="fade-up">
            <TeamCard
              imageSrc="/images/team-6.webp"
              job="Project Manager"
              name="Annette Black"
            />
          </div>
        </div>
      </section>
    </PageTemplate>
  );
};

export default About;
