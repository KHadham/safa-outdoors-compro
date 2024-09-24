import ButtonLink from "components/atoms/Button/ButtonLink";
import LineDivider from "components/atoms/LineDivider";
import PageSentence from "components/molecules/PageSentence";
import PricingCard from "components/molecules/Card/PricingCard";
import ProjectCard from "components/molecules/Card/ProjectCard";
import SectionSentence from "components/molecules/SectionSentence";
import ImageScrollList from "components/molecules/ImageScrollList";
import MarqueList from "components/organisms/MarqueList";
import TestimonialList from "components/organisms/TestimonialList";
import PageTemplate from "components/templates/PageTemplate";
import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import "react-photo-view/dist/react-photo-view.css";
import { brandsList, eventList, partnersList } from "constant";
import CardListIcon from "components/molecules/Card/CardListIcon";
import TextArrowLink from "components/molecules/TextArrowLink";
import { FaBusAlt, FaCamera, FaCampground, FaHiking } from "react-icons/fa";
import { GiKnifeFork } from "react-icons/gi";
import Text from "components/atoms/Text";
import { HiUserGroup } from "react-icons/hi";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Home = () => {
  return (
    <>
      <PageTemplate title="Safa-Outdoor">
        {/* Banner Section */}
        <section
          className="flex flex-col gap-10 items-center"
          data-aos="fade-up"
        >
          <div className="w-10/12 md:w-8/12 text-center">
            <PageSentence
              title="One For All Outdooor Services"
              description="Mau sewa alat, mau beli alat, mau naik gunung, mau camping, mau treking, mau jalan-jalan, mau ke pantai, mau piknik, segala kebutuhan tour & travel anda bisa di sini !"
              badge="Mempersembahkan"
            />
          </div>
          {/* <div className="flex flex-col gap-6 sm:flex-row w-full sm:w-fit">
            <ButtonLink value="Send Quote" href="/quote" />
            <ButtonLink
              value="Learn More"
              color="white"
              style="light"
              href="/about"
            />
          </div> */}
        </section>
        {/* Feature List */}
        {/* <section className="grid grid-cols-1 gap-5 md:grid-cols-3 mb-16">
          <div data-aos="fade-up">
            <FeatureCard
              title="Design"
              description="The project interface will be designed first, our favorite tool is Figma."
              icon={
                <Image
                  src={"/images/testimoni/mtma-2.JPG"}
                  layout="fill"
                  objectFit="contain"
                  alt="borongan"
                />
              }
            />
          </div>
          <div data-aos="fade-up">
            <FeatureCard
              title="Develop"
              description="Transform design and write business logic here. Choose the technology you want."
              icon={<FiCode />}
            />
          </div>
          <div data-aos="fade-up">
            <FeatureCard
              title="Ship"
              description="After the work is complete, we will send the project and all its assets to you."
              icon={<FiBox />}
            />
          </div>
        </section> */}
        {/* Logo List */}
        <MarqueList data={partnersList} background={true} />
        <MarqueList data={brandsList} title={"Brand tersedia"} />
        <LineDivider />

        <section className="grid place-items-center" data-aos="zoom-in-up">
          <div className="text-center sm:w-10/12 md:w-8/12 lg:w-6/12">
            <PageSentence
              badge="SERVICES"
              title="Ada layanan apa aja di Safa Outdoor ?"
            />
          </div>
        </section>
        {/* How We Work */}
        <section className="grid grid-cols-1 gap-6 sm:gap-8 place-items-center lg:grid-cols-2 ">
          <div
            className="text-center sm:w-10/12 lg:text-left lg:w-full "
            data-aos="fade-left"
          >
            <ImageScrollList data={eventList} />
          </div>
          <aside
            className="text-center sm:w-10/12 lg:text-left lg:w-full space-y-12"
            data-aos="fade-left"
          >
            <SectionSentence
              title="PERSAMI, JAMBORE, GATHERING, OUTING, OUTBOUND"
              paragraph="Mulai dari antar, set-up tenda, kebutuhan makan peserta, bongkar tenda, jemput, bahkan transportasi pulang pergi dari dan ke tempat acara, semua bisa di urus "
              badge="BIG EVENT"
            />
            <ButtonLink
              value="Booking Sekarang"
              href="/teams"
              size="small"
              color="white"
              style="light"
            />
          </aside>
        </section>
        <LineDivider />
        <section className="grid grid-cols-1 gap-6 sm:gap-8 place-items-center lg:grid-cols-2">
          <div className="text-center sm:w-10/12 lg:text-left lg:w-full">
            <div className="space-y-12" data-aos="fade-right">
              <SectionSentence
                title="Gak perlu takut camping sendiri"
                paragraph="Solusi buat yang pengen Camping ceria santai tak tertahankan lagi tapi gak punya temen, punya temen tapi gak bisa set-up tenda, bisa set-up tenda tapi gak bisa masak, bisa set-up bisa masak tapi gak punya kendaraan buat ke camping ground"
                badge="OPEN / PRVIVATE CAMPING"
              />
              <div className="space-x-4">
                <ButtonLink
                  value="Cek Jadwal Camping"
                  href="/teams"
                  size="small"
                  color="white"
                  style="light"
                />
                <ButtonLink
                  value="Request Jadwal"
                  href="/teams"
                  size="small"
                  color="white"
                  style="light"
                />
              </div>
            </div>
          </div>

          <ImageScrollList
            data={[
              "/images/testimoni/event-4.jpg",
              "/images/testimoni/event-5.jpg",
              "/images/testimoni/mtma-2.JPG",
            ]}
          />
        </section>
        <LineDivider />
        <section className="grid grid-cols-1 place-items-center gap-8 lg:grid-cols-2 lg:gap-5 ">
          <div
            className="text-center sm:w-10/12 lg:text-left lg:w-full "
            data-aos="fade-left"
          >
            <ImageScrollList data={eventList} />
          </div>
          <aside
            className="grid gap-12 place-items-center"
            data-aos="fade-up-right"
          >
            <div className="sm:w-10/12 md:w-8/12 lg:w-full text-center lg:text-left">
              <SectionSentence
                badge="OPEN / PRVIVATE TRIP"
                title="Jalan bareng orang random gak pernah se asik ini."
                paragraph="paket murah trip gabungan sesama backpacker yang wisatanya digabung dengan peserta lain. Mengapa di gabung? Karena untuk meminimalisir budget untuk memenuhi semua fasilitas. "
              />
            </div>
            <div className="grid gap-6 w-full place-items-end md:w-8/12 lg:w-full">
              <aside className="w-full grid grid-cols-1 gap-5">
                <Text value={"Yang di dapat"} textStyle={"SectionBadge"} />
                <CardListIcon
                  icon={<FaBusAlt />}
                  title="Transportasi, Kecuali mepo BC"
                />
                <CardListIcon icon={<GiKnifeFork />} title="Nasi Box" />
                <CardListIcon icon={<FaCamera />} title="Dokumentasi" />
                <CardListIcon icon={<HiUserGroup />} title="Kawan Baru" />
              </aside>
              <TextArrowLink label="Service Detail" href="/service/detail" />
            </div>
          </aside>
        </section>
        <LineDivider />
        <section className="grid grid-cols-1 place-items-center gap-8 lg:grid-cols-2 lg:gap-5 ">
          <div
            className="text-center sm:w-10/12 lg:text-left lg:w-full "
            data-aos="fade-left"
          >
            <div className="sm:w-10/12 md:w-8/12 lg:w-full text-center lg:text-left">
              <SectionSentence
                badge="OPEN / PRVIVATE HIKING"
                title="Naik-naik kepuncak gunung, tinggi tinggi sekali"
                paragraph="paket murah trip gabungan sesama backpacker yang wisatanya digabung dengan peserta lain. Mengapa di gabung? Karena untuk meminimalisir budget untuk memenuhi semua fasilitas. "
              />
            </div>
            <div className="grid gap-6 w-full place-items-end md:w-8/12 lg:w-full">
              <aside className="w-full grid grid-cols-1 gap-5">
                <Text value={"Sudah Include"} textStyle={"SectionBadge"} />
                <CardListIcon
                  icon={<FaBusAlt />}
                  title="Transportasi, Kecuali mepo BC"
                />
                <CardListIcon
                  icon={<FaCampground />}
                  title="Tenda Bersama, tergantung peserta"
                />
                <CardListIcon icon={<GiKnifeFork />} title="Makan Bersama" />
                <CardListIcon icon={<FaHiking />} title="Porter Bersama" />
                <CardListIcon icon={<FaCamera />} title="Dokumentasi" />
                <CardListIcon icon={<HiUserGroup />} title="Kawan Baru" />
              </aside>
              <TextArrowLink label="Service Detail" href="/service/detail" />
            </div>
          </div>
          <aside
            className="grid gap-12 place-items-center"
            data-aos="fade-up-right"
          >
            <ImageScrollList data={eventList} />
          </aside>
        </section>
        <LineDivider />

        {/* <section className="flex flex-col gap-16 items-center">
          <div
            className="text-center sm:w-10/12 md:w-8/12 lg:w-6/12"
            data-aos="zoom-in-up"
          >
            <SectionSentence
              title="We have completed many amazing projects that you will not believe"
              badge="PROJECTS"
            />
          </div>
          <div className="w-full grid grid-cols-2 gap-10 sm:grid-cols-3 sm:gap-5">
            <div>
              <ProjectCard
                title="The Desktop App Landing Page"
                description="A landing page for desktop app"
              />
            </div>
            <div>
              <ProjectCard
                title="The Mobile App Landing Page"
                description="A landing page for mobile app"
                bottomSquareSize="big"
              />
            </div>
            <div>
              <ProjectCard
                title="The Mobile App Landing Page"
                description="A landing page for mobile app"
                bottomSquareSize="big"
              />
            </div>
          </div>
        </section> */}
        {/* Prices */}
        <section className="flex flex-col gap-16 items-center">
          <div
            className="text-center sm:w-10/12 md:w-8/12 lg:w-6/12"
            data-aos="zoom-in-up"
          >
            <SectionSentence
              title="Ngomongin soal harga emang bukan perkara gampang, tapi di sini pasti gampang"
              badge="HARGA"
            />
          </div>
          <div className="w-full grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
            <div data-aos="fade-up-right">
              <PricingCard
                price="Rp.5000"
                title="Sewa Alat-alat Hiking"
                features={[
                  "Headlamp",
                  "Rain Cover",
                  "Lampu Tenda",
                  "Matras Spons",
                ]}
              />
            </div>
            <div data-aos="fade-up" data-aos-delay="300">
              <PricingCard
                price="Rp.130000"
                title="Open Trip"
                features={[
                  "Trekking Pole",
                  "Air Mineral 600ml",
                  "Nasi Bungkus",
                  "Dokumentasi",
                ]}
              />
            </div>
            <div data-aos="fade-up-left">
              <PricingCard
                price="Rp.350000"
                title="Private Trip"
                features={[
                  "Transportasi",
                  "Air Mineral 600ml",
                  "Nasi Bungkus",
                  "Dokumentasi",
                ]}
              />
            </div>
          </div>
        </section>
        {/* Testimonial */}
        {/* <section className="flex flex-col gap-16 items-center">
          <div
            className="text-center sm:w-10/12 md:w-8/12 lg:w-6/12"
            data-aos="zoom-in-up"
          >
            <SectionSentence
              title="Apa kata mereka yang pernah coba layanan Safa Outdoor?"
              badge="TESTIMONI / REVIEW"
            />
          </div>
          <div className="w-full" data-aos="fade-up flex flex-row border-2">
            <TestimonialList />
          </div>
        </section> */}
      </PageTemplate>
    </>
  );
};

export default Home;
