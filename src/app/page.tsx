"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import ZStackCategories from "@/components/ui/categoriescard";

export default function HomePage() {
  gsap.registerPlugin(ScrollTrigger);
  const heroRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLDivElement | null>(null);
  const subtitleRef = useRef<HTMLParagraphElement | null>(null);
  const imagesRef = useRef<(HTMLImageElement | null)[]>([]);
  const phoneRef = useRef<HTMLImageElement | null>(null);
  const circleRef = useRef<HTMLDivElement | null>(null);
  const aboutCardRef = useRef<HTMLDivElement | null>(null);
  const finalTitleRef = useRef<HTMLParagraphElement | null>(null);
  const finalBtnRef = useRef<HTMLAnchorElement | null>(null);

  const setImageRef = (index: number) => (el: HTMLImageElement | null) => {
    imagesRef.current[index] = el;
  };

  useEffect(() => {
    // Hero Titles
    if (titleRef.current) {
      gsap.from(titleRef.current.children, {
        y: 50,
        opacity: 0,
        stagger: 0.2,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
        },
      });
    }

    // Hero Subtitle
    if (subtitleRef.current) {
      gsap.from(subtitleRef.current, {
        y: 30,
        opacity: 0,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: subtitleRef.current,
          start: "top 85%",
        },
      });
    }

    // Hero Images
    imagesRef.current
      .filter((el): el is HTMLImageElement => el !== null)
      .forEach((img) => {
        gsap.from(img, {
          opacity: 0,
          scale: 1.2,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: img,
            start: "top 90%",
          },
        });
      });

    // Middle Section: Phone & Circle
    if (phoneRef.current) {
      gsap.from(phoneRef.current, {
        x: -200,
        opacity: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: phoneRef.current,
          start: "top 85%",
        },
      });
    }

    if (circleRef.current) {
      gsap.from(circleRef.current, {
        x: -300,
        opacity: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: circleRef.current,
          start: "top 85%",
        },
      });
    }

    // About Card
    if (aboutCardRef.current) {
      gsap.from(aboutCardRef.current, {
        x: 100,
        opacity: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: aboutCardRef.current,
          start: "top 85%",
        },
      });
    }

    // Final Section
    if (finalTitleRef.current && finalBtnRef.current) {
      gsap.from([finalTitleRef.current, finalBtnRef.current], {
        y: 40,
        opacity: 0,
        duration: 1.2,
        ease: "power2.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: finalTitleRef.current,
          start: "top 85%",
        },
      });
    }
  }, []);

  return (
    <div className="flex flex-col items-start justify-center overflow-x-hidden antialiased font-sans dark:bg-black">
      {/* Hero Section */}
      <div
        ref={heroRef}
        className="w-full h-screen bg-linear-to-r from-[#02559D] to-[#0099EB] relative overflow-hidden"
      >
        <div className="absolute inset-0 w-full">
          <img
            ref={setImageRef(0)}
            src="/home/TopWaveBG.svg"
            className="absolute top-0 left-0 w-1/2 z-0 pointer-events-none"
            draggable="false"
            alt=""
          />
          <img
            ref={setImageRef(1)}
            src="/home/ShopsBG.svg"
            className="absolute bottom-0 left-0 lg:w-3/5 z-0 pointer-events-none"
            draggable="false"
            alt=""
          />
          <img
            ref={setImageRef(2)}
            src="/home/BottomWave.png"
            className="absolute bottom-0 z-20 lg:z-0 left-0 pointer-events-none"
            draggable="false"
            alt=""
          />
        </div>

        <div className="relative flex flex-col lg:flex-row w-full h-screen z-10">
          <div className="flex flex-col p-5 ml-2 lg:ml-10 mt-20 mb-5 lg:mt-40 md:basis-2/3 pointer-events-none">
            <div ref={titleRef}>
              <h1 className="font-montserrat text-3xl md:text-6xl font-black text-white">
                EMPOWERING LOCAL
              </h1>
              <h1 className="text-3xl md:text-6xl font-montserrat font-black text-white">
                EXPANDING REACH
              </h1>
            </div>
            <p
              ref={subtitleRef}
              className="text-xl font-montserrat font-semibold md:text-2xl text-white"
            >
              Menghubungkan bisnis lokal dengan{" "}
              <span className="hidden md:inline">
                <br />
              </span>
              orang-orang di sekitarnya
            </p>
          </div>
          <img
            ref={setImageRef(3)}
            src="/home/SalesPerson.svg"
            className="absolute bottom-0 right-0 w-[250px] lg:w-[400px] z-0 lg:z-10"
            alt=""
          />
        </div>
      </div>

      {/* Middle Section */}
      <div className="relative w-full flex flex-col justify-center items-center">
        <img
          src="/home/MiddleBG.png"
          className="absolute inset-0 w-full h-full object-cover"
          alt=""
        />
        <div className="flex flex-col items-center w-full h-full">
          <div className="flex w-full justify-center relative h-full">
            {/* Circle & Phone */}
            <div className="relative z-0 hidden lg:flex basis-1/2">
              <div
                ref={circleRef}
                className="w-0 h-0 md:w-128 md:h-128 mt-5 rounded-full bg-[#1BE399] absolute z-0 left-[-5vw]"
              ></div>
              <img
                ref={phoneRef}
                src="/home/Phone.svg"
                alt=""
                className="absolute top-[-5vw] w-[75%]"
              />
            </div>

            {/* About Card */}
            <div className="lg:basis-3/4 relative z-10 flex justify-center lg:justify-end">
              <div
                ref={aboutCardRef}
                className="bg-[#032D51] p-10 flex flex-col font-montserrat basis-3/4 lg:rounded-tr-none lg:rounded-br-none rounded-xl w-full"
              >
                <h3 className="text-4xl text-center lg:text-start text-white font-black">
                  Apa itu <span className="text-[#1EED8C]">Loca</span>
                </h3>
                <p className="text-white font-semibold font-nunitoSans text-center lg:text-start text-xl lg:text-justify pt-4 lg:mr-20">
                  <span className="text-[#1EED8C]">Loca</span> merupakan
                  platform yang membawa bisnis lokal ke dunia digital, membantu
                  mereka berkembang dan tetap terhubung dengan pelanggan
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full mt-40 justify-center">
          <ZStackCategories />
        </div>
      </div>

      {/* Final Section */}
      <div className="bg-[#0099EB] relative z-10 h-full w-full">
        <div className="flex flex-col items-center mt-30 relative">
          <div className="absolute z-30 flex flex-col mt-[-20%] md:mt-0 w-full h-full items-center">
            <p
              ref={finalTitleRef}
              className="text-white font-montserrat font-black text-3xl lg:text-4xl text-center"
            >
              CARILAH BISNIS <br /> LOKAL SEKARANG
            </p>
            <a
              ref={finalBtnRef}
              href="/map"
              className="bg-white mt-5 text-center text-black font-bold px-10 py-2 rounded-xl"
            >
              Search now
            </a>
          </div>
        </div>

        <div className="relative bg-[#0099EB] w-full">
          <img src="/home/Shops-full.svg" className="w-full z-10" alt="" />
          <div className="flex flex-col items-center mt-[-10%]">
            <div className="flex justify-between">
              <img src="/home/PakaianStall.svg" className="w-[25%]" alt="" />
              <img src="/home/FoodStall.svg" className="w-[25%]" alt="" />
            </div>
            <img
              src="/home/ServiceStall.svg"
              className="w-[25%] relative mt-[-5%]"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
