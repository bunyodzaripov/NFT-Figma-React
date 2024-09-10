import React from "react";
import heroImg from "../../images/hero.png";
import avatar from "../../images/avatar1.png";
import racey from "../../images/racet.svg";

const Index = () => {
   return (
      <section
         id="discover"
         className="text-[#fff]  md:flex gap-[40px] mt-[80px] xl:gap-[250px] mt-[200px]"
      >
         <div className="container   px-[30px] flex items-center justify-center m-auto md:flex gap-[40px] xl:gap-[250px] ">
            <div className=" md:flex flex-col  max-w-[510px]  ">
               <div className="md:max-w-[540px]">
                  <h1 className="text-[28px] font-semibold leading-[39.2px] mb-[10px] md:text-[38px] leading-[45.6px] xl:text-[67px] leading-[73.7px] ">
                     Discover digital art & Collect NFTs
                  </h1>
                  <p className="text-[16px] leading-[22.4px] font-[400] text-[#ffffffd5] xl:text-[22px] leading-[35.2px]">
                     NFT marketplace UI created with Anima for Figma. Collect,
                     buy and sell art from more than 20k NFT artists.
                  </p>
               </div>

               <div className="sm:min-w-[315px]min-h-[300px] rounded-[20px] overflow-hidden mt-[40px] md:hidden">
                  <div className="min-w-[315px] min-h-[206px]">
                     <img className="w-full" src={heroImg} alt="heroImg" />
                  </div>
                  <div className="w-full bg-[#3B3B3B] p-[22px] flex flex-col gap-[10px]">
                     <h3 className="text-[22px] leading-[30.8px] font-semibold">
                        Space Walking
                     </h3>
                     <ul className="flex items-center gap-[12px] text-[16px] leading-[22.4px] ">
                        <li>
                           <img src={avatar} alt="" />
                        </li>
                        <li>
                           <p className="text-[16px] leading-[22.4px]">
                              Animakid
                           </p>
                        </li>
                     </ul>
                  </div>
               </div>

               <div className="mt-[60px] flex flex-col items-center justify-center md:items-start">
                  <button className="flex items-center justify-center gap-[12px] px-[95px] py-[20px] bg-[#A259FF] rounded-[20px] min-w-[315px] min-h-[60px]">
                     <img src={racey} alt="racet" />
                     Get Started
                  </button>
                  <div className="mt-[40px]">
                     <ul className="flex items-center justify-center gap-[30px]">
                        <li>
                           <h3 className="text-[22px] font-[700] leading-[35.2px] lg:text-[28px] leading-[39.2px]">
                              240k+{" "}
                           </h3>
                           <p className="text-[16px] font-[400] leading-[22.4px]  lg:text-[24px] leading-[38px]">
                              Total Sale
                           </p>
                        </li>
                        <li>
                           <h3 className="text-[22px] font-[700] leading-[35.2px] lg:text-[28px] leading-[39.2px]">
                              100k+{" "}
                           </h3>
                           <p className="text-[16px] font-[400] leading-[22.4px]  lg:text-[24px] leading-[38px]">
                              Auctions
                           </p>
                        </li>
                        <li>
                           <h3 className="text-[22px] font-[700] leading-[35.2px] lg:text-[28px] leading-[39.2px]">
                              240k+{" "}
                           </h3>
                           <p className="text-[16px] font-[400] leading-[22.4px]  lg:text-[24px] leading-[38px]">
                              Artists
                           </p>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>

            <div className="hidden md:flex flex-col  min-w-[315px]min-h-[300px] rounded-[20px] overflow-hidden mt-[40px] ">
               <div className="min-w-[510px] min-h-[206px]">
                  <img className=" w-full" src={heroImg} alt="heroImg" />
               </div>
               <div className="w-full bg-[#3B3B3B] p-[22px] flex flex-col gap-[10px] rounded-b-[20px]">
                  <h3 className="text-[22px] leading-[30.8px] font-semibold">
                     Space Walking
                  </h3>
                  <ul className="flex items-center gap-[12px] text-[16px] leading-[22.4px] ">
                     <li>
                        <img src={avatar} alt="" />
                     </li>
                     <li>
                        <p className="text-[16px] leading-[22.4px]">Animakid</p>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Index;
