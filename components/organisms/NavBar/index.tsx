import React, { useEffect, useState ,} from "react";
import NavBrand from "components/atoms/NavBrand";
import NavLink from "components/atoms/NavLink";
import ButtonLink from "components/atoms/Button/ButtonLink";
import Container from "components/templates/Container";
import { FiMenu, FiX, FiUser } from "react-icons/fi";

import useMobileDeviceDetection from "hooks/useMobileDetection";
import { useAtom } from "jotai";
import { cartAtom } from "states/cart";
import { useAtomValue, useSetAtom } from "jotai";

const NavBar = () => {
  const isMobile = useMobileDeviceDetection();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [notificationCount, setNotificationCount] = useState<number>(0);
  // const [cart, setCart] = useAtom<any>(cartAtom); // Use the cart atom
  const cart = useAtomValue(cartAtom);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
    // const storedCount = localStorage.getItem("cart");

    // if (storedCount) {
    //   const cart = JSON.parse(storedCount);

    //   setNotificationCount(
    //     cart.reduce(
    //       (total: any, item: { quantity: any }) => total + (item.quantity || 0),
    //       0
    //     )
    //   );
    // }
    // console.log(
    //   "cart",
    //   cart.reduce(
    //     (total: any, item: { quantity: any }) => total + (item.quantity || 0),
    //     0
    //   )
    // );
  }, [cart]);

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
                    {isOpen ? (
                      <FiX />
                    ) : (
                      <div className="relative">
                        <FiMenu />
                        {/* {cart.length !== 0 && (
                          <div className="absolute -bottom-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                            {cart.reduce(
                              (total: any, item: { quantity: any }) =>
                                total + (item.quantity || 0),
                              0
                            )}
                          </div>
                        )} */}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div
                className={`${
                  isOpen ? "" : "hidden "
                }space-y-5 mt-4 lg:mt-0 lg:space-y-0 lg:space-x-16 lg:flex lg:place-items-center`}
              >
                <NavLink href="/sewa" value="Sewa" canActive={true} />
                <NavLink href="/comingsoon" value="Trip" canActive={true} />
                <NavLink href="/about" value="About" canActive={true} />
                <div
                  className={`${
                    isOpen ? "" : "hidden "
                  } lg:block lg:mt-0 flex flex-row gap-4 items-center `}
                >
                  <div className="relative">
                    {isLoggedIn ? (
                      <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center">
                        <FiUser className="text-white text-xl" />
                      </div>
                    ) : (
                      <ButtonLink
                        value={"Login"}
                        style="light"
                        color="white"
                        size="small"
                        href="/contact" // You can change this to your login page route
                      />
                    )}
                    {/* {cart.length !== 0 && (
                    <div className="absolute -bottom-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {cart.reduce(
                        (total: any, item: { quantity: any }) =>
                          total + (item.quantity || 0),
                        0
                      )}
                    </div>
                  )} */}
                  </div>
                </div>
              </div>
              {/* avatar start */}
            </div>
          </div>
        </Container>
      </nav>
    </>
  );
};

export default NavBar;



