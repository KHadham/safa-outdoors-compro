import ButtonLink from "components/atoms/Button/ButtonLink";
import PageSentence from "components/molecules/PageSentence";
import PageTemplate from "components/templates/PageTemplate";
import React from "react";

const PageNotFound = () => {
  return (
    <>
      <PageTemplate title="Coming Soon">
        <section
          className="grid grid-cols-1 place-items-center gap-6"
          data-aos="zoom-in-up"
        >
          <div className="w-full sm:w-10/12 md:w-8/12 grid grid-cols-1 place-items-center gap-12 lg:w-6/12">
            <div className="text-center">
              <PageSentence
                badge="Mohon bersabar"
                badgeStyle="success"
                title="Coming Soon"
                description="Layanan ini masih dalam pengembangan, kalau mau booking Trip bisa langsung DM ke Instagram @jangan_dirumahaja"
              />
            </div>
            <div className="w-fit gap-4 flex flex-row items-center">
              <ButtonLink
                value="Back to Home"
                href="/"
                color="white"
                style="light"
              />
              <ButtonLink
                value="Open Trip"
                href="https://www.instagram.com/jangan_dirumahaja/"
                color="white"
                style="light"
              />
            </div>
          </div>
        </section>
      </PageTemplate>
    </>
  );
};

export default PageNotFound;
