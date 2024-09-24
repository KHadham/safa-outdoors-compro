import React, { useEffect, useState } from "react";
import NavBrand from "components/atoms/NavBrand";
import NavLink from "components/atoms/NavLink";
import ButtonLink from "components/atoms/Button/ButtonLink";
import Container from "components/templates/Container";
import { FiMenu, FiX, FiShoppingCart } from "react-icons/fi";

import useMobileDeviceDetection from "hooks/useMobileDetection";
const NavBar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const isMobile = useMobileDeviceDetection();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("h-screen");
      document.body.classList.add("overflow-y-hidden");
    } else {
      document.body.classList.remove("h-screen");
      document.body.classList.remove("overflow-y-hidden");
    }
  }, [isOpen]);
  
  
  return (
    <>
      <nav className={`pt-8 w-full top-0 left-0 z-30 fixed`}>
        <Container>
          <div
            className={`bg-light px-6 py-4 w-full rounded-md backdrop-blur-3xl `}
          >
            <div className="flex flex-col lg:flex-row w-full place-content-between lg:place-items-center">
              <div className="w-full flex flex-row place-content-between place-items-center lg:w-fit">
                <NavBrand />
                <div className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
                  <div
                    className={`text-white text-2xl ${
                      isMobile ? "cursor-default" : "cursor-pointer"
                    }`}
                  >
                    {isOpen ? <FiX /> : <FiMenu />}
                  </div>
                </div>
              </div>
              <div
                className={`${
                  isOpen ? "" : "hidden "
                }space-y-5 mt-4 lg:mt-0 lg:space-y-0 lg:space-x-16 lg:flex lg:place-items-center`}
              >
                <NavLink href="/comingsoon" value="Services" canActive={true} />
                <NavLink href="/comingsoon" value="Sewa" canActive={true} />
                <NavLink href="/comingsoon" value="Trip" canActive={true} />
                <NavLink href="/comingsoon" value="About" canActive={true} />
              </div>
              {/* <div className="flex flex-row gap-4">
                <div
                  className={`${isOpen ? "" : "hidden "}lg:block mt-5 lg:mt-0`}
                >
                  <ButtonLink
                    value={isLoggedIn ? "Logout" : "Login"}
                    style="light"
                    color="white"
                    size="small"
                    href="/contact"
                  />
                </div>
                <div
                  className={`${isOpen ? "" : "hidden "}lg:block mt-5 lg:mt-0`}
                >
                  <ButtonLink
                    value={
                      <div className="flex flex-row gap-4">
                        <FiShoppingCart
                          color="white"
                          size={20}
                          onClick={() =>
                            alert("fitur masih dalam pengembangan")
                          }
                        />
                        0
                      </div>
                    }
                    style="light"
                    color="white"
                    size="small"
                    href="/contact"
                  />
                </div>
              </div> */}
            </div>
          </div>
        </Container>
      </nav>
    </>
  );
};

export default NavBar;
