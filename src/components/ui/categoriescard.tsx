'use client'

import { useState } from "react";

export default function ZStackCategories() {
    const [active, setActive] = useState(1);

    const categories = [
        {
            id: 1,
            color: "#0099EB",
            label: "Category 1",
            content: (
                <div>
                    <h3 className="text-xl font-bold mb-2">Form Example</h3>
                    <input
                        className="p-2 rounded text-black w-full"
                        placeholder="Type something..."
                    />
                    <button className="mt-3 px-4 py-2 bg-white text-[#0099EB] rounded font-bold">
                        Submit
                    </button>
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
        <div className="bg-[#FFFDFA] mx-5 md:m-16 rounded-xl shadow-md relative z-10 p-20">
            <p className="font-montserrat font-black text-[#032D51] text-3xl lg:text-6xl">Category</p>

            <div
                onClick={() => setActive(1)}
                className="hidden relative w-full lg:flex h-[200px] lg:h-[500px] rounded-xl mt-5 bg-[#0099EB]
                           overflow-hidden md:overflow-visible"
            >
                <div className="p-3 lg:p-5 flex">
                    <div className="flex flex-col text-sm lg:text-base gap-1 sm:gap-2">
                        <p className="text-center font-black font-montserrat text-white">M</p>
                        <p className="text-center font-black font-montserrat text-white">A</p>
                        <p className="text-center font-black font-montserrat text-white">K</p>
                        <p className="text-center font-black font-montserrat text-white">A</p>
                        <p className="text-center font-black font-montserrat text-white">N</p>
                        <p className="text-center font-black font-montserrat text-white">A</p>
                        <p className="text-center font-black font-montserrat text-white">N</p>
                    </div>

                    <div
                        className={`transition-opacity ml-5 sm:ml-10 duration-500 
                           ${active === 1 ? "opacity-100" : "opacity-0"}`}
                    >
                        {categories[0].content}
                    </div>
                </div>

                {/* SECOND PANEL */}
                <div
                    onClick={(e) => { e.stopPropagation(); setActive(2); }}
                    className={`h-full bg-[#02559D] flex p-3 sm:p-5 rounded-xl absolute z-20 right-0 
                               overflow-hidden transition-all duration-500 ${active > 1 ? "w-[90%] lg:w-[95%]" : "w-[40%] lg:w-[10%]"}`}
                >
                    <div className="flex flex-col text-sm lg:text-base gap-1 sm:gap-2">
                        <p className="text-center font-black font-montserrat text-white">P</p>
                        <p className="text-center font-black font-montserrat text-white">A</p>
                        <p className="text-center font-black font-montserrat text-white">K</p>
                        <p className="text-center font-black font-montserrat text-white">A</p>
                        <p className="text-center font-black font-montserrat text-white">I</p>
                        <p className="text-center font-black font-montserrat text-white">A</p>
                        <p className="text-center font-black font-montserrat text-white">N</p>
                    </div>

                    <div
                        className={`transition-opacity ml-5 sm:ml-10 duration-500 
                           ${active === 2 ? "opacity-100" : "opacity-0"}`}
                    >
                        {categories[1].content}
                    </div>
                </div>

                {/* THIRD PANEL */}
                <div
                    onClick={(e) => { e.stopPropagation(); setActive(3); }}
                    className={`h-full bg-[#032D51] p-3 sm:p-5 flex rounded-xl absolute z-30 right-0 
                               overflow-hidden transition-all duration-500 ${active > 2 ? "w-[80%] lg:w-[90%]" : "w-[20%] lg:w-[5%]"} `}

                >
                    <div className="flex flex-col text-sm lg:text-base gap-1 sm:gap-2">
                        <p className="text-center font-black font-montserrat text-white">J</p>
                        <p className="text-center font-black font-montserrat text-white">A</p>
                        <p className="text-center font-black font-montserrat text-white">S</p>
                        <p className="text-center font-black font-montserrat text-white">A</p>
                    </div>

                    <div
                        className={`transition-opacity ml-5 sm:ml-10 duration-500 
                           ${active === 3 ? "opacity-100" : "opacity-0"}`}
                    >
                        {categories[2].content}
                    </div>
                </div>
            </div>

            

        </div>
    );
}
