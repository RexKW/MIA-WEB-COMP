import ZStackCategories from "@/components/ui/categoriescard";
import CategoriesCard from "@/components/ui/categoriescard";

export default function HomePage() {


  return (
    <div className="flex flex-col items-start justify-center font-sans dark:bg-black">
      {/* Hero Section */}
      <div className="w-full h-screen bg-linear-to-r from-[#02559D] to-[#0099EB] relative overflow-hidden">

        {/* Background */}
        <div className="absolute inset-0  w-full">
          <img src="/home/TopWaveBG.svg" className="absolute top-0 left-0 w-1/2 z-0 pointer-events-none" draggable='false' alt="" />
          <img src="/home/ShopsBG.svg" className="absolute bottom-0 left-0 lg:w-3/5 z-0 pointer-events-none" draggable='false' alt="" />
          <img src="/home/BottomWave.png" className="absolute bottom-0 z-20 lg:z-0 left-0 pointer-events-none" draggable='false' alt="" />
          
        </div>

        {/* Content */}
        <div className="relative flex flex-col lg:flex-row w-full h-screen basis  bottom-0 z-10">
          <div className="flex flex-col p-5 ml-2 lg:ml-10 mt-20 mb-5 lg:mt-40 md:basis-2/3 pointer-events-none">
            <h1 className="font-montserrat text-3xl md:text-6xl  font-black text-white">EMPOWERING LOCAL</h1>
            <h1 className="text-3xl md:text-6xl font-montserrat  font-black text-white">EXPANDING REACH</h1>
            <p className="text-xl font-montserrat font-semibold md:text-2xl text-white">Menghubungkan bisnis lokal dengan <br /> orang-orang di sekitarnya</p>
          </div>
          <img src="/home/SalesPerson.svg" className="absolute bottom-0 right-0 w-[300px] lg:w-[400px] z-0 lg:z-10" alt="" />
        </div>

      </div>


      {/* Middle Section */}
      <div className="relative w-full flex flex-col justify-center items-center">
        {/* Background */}
        <div className="relative z-0 h-full">
            <img className="absolute z-0 opacity-[50%]" src="/home/MiddleBG.png" alt="" />
        </div>
        <div className="flex flex-col items-center w-full h-full">
          {/* About Section */}
          <div className="flex  w-full justify-center relative h-full">
            {/* Circle & Phone */}
            <div className="relative z-0 hidden lg:flex basis-1/2">
              <div className="w-0 h-0  md:w-128 md:h-128 mt-5 rounded-full bg-[#1BE399] absolute z-0 left-[-5vw]">

              </div>
              <img src="/home/Phone.svg" alt="" className="absolute top-[-5vw] w-[75%]" />
            </div>

            {/* About */}
            <div className="lg:basis-3/4 relative z-10 flex justify-center lg:justify-end">
              <div className="bg-[#032D51] p-10 flex flex-col font-montserrat basis-3/4 lg:rounded-tr-none lg:rounded-br-none  rounded-tr-xl rounded-br-xl  rounded-tl-xl rounded-bl-xl w-full">
                <h3 className="text-4xl text-center lg:text-start text-white font-black">Apa itu <span className="text-[#1EED8C]">Loca</span></h3>
                <p className="text-white font-semibold font-nunitoSans text-center lg:text-start text-xl lg:text-justify pt-4 lg:mr-20"><span className="text-[#1EED8C]">Loca</span> merupakan sebuah platform yang membawa bisnis-bisnis lokal ke dalam dunia digital, membantu mereka untuk berkembang dan tetap terhubung dengan pelanggan mereka</p>
              </div>
            </div>

          </div>

        </div>
        <div className="w-full mt-40 justify-center">
          <ZStackCategories/>


        </div>


      </div>


      {/* Final Section */}
      <div className="bg-[#0099EB] relative z-10 h-screen w-full">
        <p></p>

      </div>


    </div>
  );
}
