import React, { useState } from "react";
import logo from "../assets/germes_logo.png";
import star from "../assets/Icons/Star/Main.png";
import cart from "../assets/Icons/Cart/Main.png";
import hamb from "../assets/hamb.png";

export default function Header() {
  const [navToggle, setnavToggle] = useState(true);

  const handleNav = () => {
    setnavToggle((prevState) => !prevState);
  };

  return (
    <div className="">
      <div className="hidden md:flex justify-between items-center h-[111px]">
        <a href="/">
          <img src={logo} alt="" />
        </a>
        <div className="nav text-[15px] flex text-[#494949] justify-between">
          <a href="/services" className="mx-5">
            <div className="">Услуги</div>
          </a>
          <a href="/delivery" className="mx-5">
            <div className="">Доставка</div>
          </a>
          <a href="/payment" className="mx-5">
            <div className="">Оплата</div>
          </a>
          <a href="/projects" className="mx-5">
            <div className="">Проекты</div>
          </a>
        </div>
        <div className="flex items-center">
          <div className="icons flex mx-10">
            <a href="#" className="mx-3">
              <img src={star} alt="" />
            </a>
            <a href="/cart" className="mx-3">
              <img src={cart} alt="" />
            </a>
          </div>
          <div className="num block text-center">
            <div className="xl:text-[20px]">8 (843) 203-93-43</div>
            <a href="#">
              <div className="text-[13px] text-[#5661CB] underline">
                заказать обратный звонок
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="flex md:hidden justify-between items-center h-[80px]">
        <img src={logo} alt="" className="w-[120px]" />
        <div className="flex text-[#5661CB] items-center">
          <a href="#">
            <i class="fa fa-phone" aria-hidden="true"></i>
          </a>
          <div className="mobToggle mx-4" onClick={handleNav}>
            {navToggle ? (
              <img src={hamb} alt="" className="w-[25px]" />
            ) : (
              <i class="fa-solid fa-x text-[25px]"></i>
            )}
          </div>
        </div>
        <div
          className={`${
            navToggle ? "closeRespMenu" : "openRespMenu"
          } fixed resp_menu h-[100vh] top-0 left-0 w-[70%] sm:w-[45%] text-[15px] block bg-[#5662cb] text-white justify-between p-10`}
        >
          <a href="#">
            <img src={logo} className="w-[150px] py-4" alt="" />
          </a>
          <div>
            <a
              href="#"
              className="w-full py-2 inline-block hover:text-[#272727] duration-300"
            >
              Акции
            </a>
            <a
              href="#"
              className="w-full py-2 inline-block hover:text-[#272727] duration-300"
            >
              Услуги
            </a>
            <a
              href="#"
              className="w-full py-2 inline-block hover:text-[#272727] duration-300"
            >
              Доставка
            </a>
            <a
              href="#"
              className="w-full py-2 inline-block hover:text-[#272727] duration-300"
            >
              Оплата
            </a>
            <a
              href="#"
              className="w-full py-2 inline-block hover:text-[#272727] duration-300"
            >
              Проекты
            </a>
            <a
              href="#"
              className="w-full py-2 inline-block hover:text-[#272727] duration-300"
            >
              О компании
            </a>
            <a
              href="#"
              className="w-full py-2 inline-block hover:text-[#272727] duration-300"
            >
              Контакты
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
