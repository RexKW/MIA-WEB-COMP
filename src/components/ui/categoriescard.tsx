'use client'

import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ZStackCategories() {
    const [active, setActive] = useState(1);

    const containerRef = useRef<HTMLDivElement | null>(null);
    const itemsRef = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
        if (!containerRef.current) return;

        const elements = itemsRef.current.filter(el => el !== null);

        gsap.from(elements, {
            y: 50,
            opacity: 0,
            stagger: 0.2,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 90%",
            },
        });
    }, []);

    const setItemRef = (index: number) => (el: HTMLDivElement | null) => {
        itemsRef.current[index] = el!;
    };

    const categories = [
        {
            id: 1,
            color: "#0099EB",
            label: "Category 1",
            content: (
                <div>
                    <img
                        src="/home/cookingCategory.svg"
                        className="w-full h-full object-contain"
                        alt=""
                    />
                </div>


            ),
        },
        {
            id: 2,
            color: "#02559D",
            label: "Category 2",
            content: (
                <div>
                    <h3 className="text-xl font-bold mb-2">Image Preview</h3>
                    <img
                        src="https://picsum.photos/200"
                        className="rounded-lg"
                        alt="demo"
                    />
                </div>
            ),
        },
        {
            id: 3,
            color: "#032D51",
            label: "Category 3",
            content: (
                <div>
                    <h3 className="text-xl font-bold mb-2">List Example</h3>
                    <ul className="list-disc pl-5">
                        <li>Item one</li>
                        <li>Item two</li>
                        <li>Item three</li>
                    </ul>
                </div>
            ),
        },
    ];

    return (
        <div className="bg-[#FFFDFA] mx-5 md:m-16 rounded-xl shadow-md relative z-10 p-5 lg:p-20">
            <p className="font-montserrat font-black text-[#032D51] text-3xl lg:text-6xl">Category</p>

            <div
                onClick={() => setActive(1)}
                className={`hidden relative w-full md:flex h-[350px] lg:h-[500px] rounded-xl mt-5 bg-[#0099EB]
                           overflow-hidden md:overflow-visible`}
            >
                <div className="p-3 pb-0 w-full h-full flex">
                    <div className="flex flex-col text-sm lg:text-base gap-1 sm:gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-utensils w-4 h-4" aria-hidden="true"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"></path><path d="M7 2v20"></path><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"></path></svg>
                        <p className="text-center font-black font-montserrat text-white">M</p>
                        <p className="text-center font-black font-montserrat text-white">A</p>
                        <p className="text-center font-black font-montserrat text-white">K</p>
                        <p className="text-center font-black font-montserrat text-white">A</p>
                        <p className="text-center font-black font-montserrat text-white">N</p>
                        <p className="text-center font-black font-montserrat text-white">A</p>
                        <p className="text-center font-black font-montserrat text-white">N</p>
                    </div>

                    <div
                        className={`transition-opacity ml-5 relative w-full h-full sm:ml-10 duration-500 
                           ${active === 1 ? "opacity-100" : "opacity-0"}`}
                    >
                        <div className="absolute bottom-0 left-0 w-full h-[90%] pointer-events-none">
                            <img
                                src="/home/cookingCategory.svg"
                                className="w-auto h-full"
                                alt=""
                            />
                        </div>
                        <div className="right-32 lg:right-40 lg:top-20 absolute">
                            <div className="flex  flex-col">
                                <p className="text-2xl w-[50%] lg:w-[100%] lg:text-3xl font-montserrat font-black">Puluhan Makanan Lokal</p>
                                <a href="/map" className="bg-white mt-5 text-center text-black font-bold px-4 py-2 rounded-xl w-[40%]">Search now</a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* SECOND PANEL */}
                <div
                    onClick={(e) => { e.stopPropagation(); setActive(2); }}
                    className={`h-full bg-[#02559D] flex p-3 pb-0 rounded-xl absolute z-20 right-0 
                               overflow-hidden transition-all duration-500 ${active > 1 ? "w-[90%] lg:w-[95%]" : "w-[40%] lg:w-[10%]"}`}
                >
                    <div className="flex flex-col text-sm lg:text-base gap-1 sm:gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shirt w-4 h-4" aria-hidden="true"><path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"></path></svg>
                        <p className="text-center font-black font-montserrat text-white">P</p>
                        <p className="text-center font-black font-montserrat text-white">A</p>
                        <p className="text-center font-black font-montserrat text-white">K</p>
                        <p className="text-center font-black font-montserrat text-white">A</p>
                        <p className="text-center font-black font-montserrat text-white">I</p>
                        <p className="text-center font-black font-montserrat text-white">A</p>
                        <p className="text-center font-black font-montserrat text-white">N</p>
                    </div>

                    <div
                        className={`transition-opacity ml-5 relative w-full h-full sm:ml-10 duration-500 
                           ${active === 2 ? "opacity-100" : "opacity-0"}`}
                    >
                        <div className="absolute bottom-0 left-0 w-full h-[90%] pointer-events-none">
                            <img
                                src="/home/PakaianCategory.svg"
                                className="w-auto h-full"
                                alt=""
                            />
                        </div>
                        <div className="right-16 lg:right-40 lg:top-20 absolute">
                            <div className="flex flex-col">
                                <p className="text-2xl w-[50%] lg:w-[100%] lg:text-3xl  font-montserrat font-black">Berbagai Pakaian Unik</p>
                                <a href="/map" className="bg-white mt-5 text-center text-black font-bold px-4 py-2 rounded-xl w-[40%]">Search now</a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* THIRD PANEL */}
                <div
                    onClick={(e) => { e.stopPropagation(); setActive(3); }}
                    className={`h-full bg-[#032D51] p-3  pb-0 flex rounded-xl absolute z-30 right-0 
                               overflow-hidden transition-all duration-500 ${active > 2 ? "w-[80%] lg:w-[90%]" : "w-[20%] lg:w-[5%]"} `}

                >
                    <div className="flex flex-col text-sm lg:text-base gap-1 sm:gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user-round w-4 h-4" aria-hidden="true"><circle cx="12" cy="8" r="5"></circle><path d="M20 21a8 8 0 0 0-16 0"></path></svg>
                        <p className="text-center font-black font-montserrat text-white">J</p>
                        <p className="text-center font-black font-montserrat text-white">A</p>
                        <p className="text-center font-black font-montserrat text-white">S</p>
                        <p className="text-center font-black font-montserrat text-white">A</p>
                    </div>

                    <div
                        className={`transition-opacity ml-5 relative w-full h-full sm:ml-10 duration-500 
                           ${active === 3 ? "opacity-100" : "opacity-0"}`}
                    >
                        <div className="absolute bottom-0 left-0 w-full h-[90%] pointer-events-none">
                            <img
                                src="/home/JasaCategory.svg"
                                className="w-auto h-full"
                                alt=""
                            />
                        </div>
                        <div className="right-[-25%] lg:right-20 top-0 lg:top-20 absolute">
                            <div className="flex flex-col">
                                <p className="text-2xl w-[50%] lg:w-[100%] lg:text-3xl  font-montserrat font-black">Ratusan jasa praktis</p>
                                <a href="/map" className="bg-white mt-5 text-center text-black font-bold px-4 py-2 rounded-xl w-[40%]">Search now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div ref={containerRef} className="flex flex-col w-full h-full mt-5 gap-5 md:hidden">
                <div ref={setItemRef(0)} className="w-full flex flex-col bg-[#0099EB] p-5 pb-0 rounded-xl">
                    <p className="font-black text-white text-center font-montserrat text-xl">Makanan</p>
                    <img src="/home/cookingCategory.svg" className="w-full h-auto mt-5" alt="" />
                </div>

                <div ref={setItemRef(1)} className="w-full flex flex-col bg-[#02559D] p-5 pb-0 rounded-xl">
                    <p className="font-black text-white text-center font-montserrat text-xl">Pakaian</p>
                    <img src="/home/PakaianCategory.svg" className="w-auto h-full mt-5" alt="" />
                </div>

                <div ref={setItemRef(2)} className="w-full flex flex-col bg-[#032D51] p-5 pb-0 rounded-xl">
                    <p className="font-black text-white text-center font-montserrat text-xl">Jasa</p>
                    <img src="/home/JasaCategory.svg" className="w-auto h-full mt-5" alt="" />
                </div>
            </div>




        </div>
    );
}
