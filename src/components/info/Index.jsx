import React from "react";
import { galaxys } from "../../db";
import eye from "../../images/eye.svg";

const Index = () => {
   return (
      <section id="info" className="text-white">
         <div className="container m-auto  px-[30px]">
            <div className="flex justify-between mt-[60px]">
               <div>
                  <h2 className="text-[28px] mb-[10px] leading-[39.2px] text-white font-[600] xl:text-[38px] leading-[45.6px]">
                     Discover More NFTs
                  </h2>
                  <p className="mb-[40px] text-[16px] leading-[22.4px]  text-[#d0d0d0] xl:mb-[60px] text-[22px] leading-[30.2px]">
                     Explore new trending NFTs
                  </p>
               </div>
               <div className="hidden mt-[30px] xl:flex">
                  <button className="btn-border flex items-center gap-[12px] max-w[247px] h-[60px]">
                     <span>
                        <img src={eye} alt="" />
                     </span>{" "}
                     See All
                  </button>
               </div>
            </div>

            <div className="info-cards-wrapper flex flex-wrap gap-[40px]  items-center justify-center ">
               {galaxys.map((item) => {
                  return (
                     <div
                        key={item.id}
                        className="w-full max-w-[315px] min-h-[402px] rounded-[20px] bg-[#3d3d3d] md:max-w-[360px] min-h-[430px]"
                     >
                        <div className="w-full min-h-[238px] rounded-t-[20px] overflow-hidden bg-slate-600">
                           <img
                              className="object-cover md:w-full"
                              src={item.url}
                              alt="photo"
                           />
                        </div>
                        <div className="p-[20px]">
                           <h2 className="text-[22px] font-[600] leading-[30.8px] mb-[6px]">
                              {item.title}
                           </h2>
                           <ul className="flex gap-[12px] items-center">
                              <li>
                                 <img src={item.avatar} alt="avatar" />
                              </li>
                              <li className="font2">{item.name}</li>
                           </ul>

                           <div className="flex items-center justify-between mt-[26px]">
                              <ul className="text-[12px] leading-[13.2px] flex flex-col gap-[8px]">
                                 <li className="font2 text-[#858584] ">
                                    Price
                                 </li>
                                 <li>{item.price}</li>
                              </ul>
                              <ul className="text-[12px] leading-[13.2px] flex flex-col gap-[8px]">
                                 <li className="font2 text-[#858584] ">
                                    Highest Bid
                                 </li>
                                 <li>{item.highest}</li>
                              </ul>
                           </div>
                        </div>
                     </div>
                  );
               })}
            </div>

            <div className=" mt-[30px] xl:hidden">
               <button className="btn-border flex items-center gap-[12px] min-w-[250px] min-h-[60px]">
                  <span>
                     <img src={eye} alt="" />
                  </span>{" "}
                  See All
               </button>
            </div>
         </div>
      </section>
   );
};

export default Index;
