import React from "react";
import { creators } from "../../db";
import rankings from "../../images/rankings.svg";

const Index = () => {
   return (
      <section id="creators">
         <div className="container min-h-[100px] m-auto   px-[30px]">
            <div className="flex justify-between">
               <div>
                  <h2 className="text-[28px] mb-[10px] leading-[39.2px] text-white font-[600] xl:text-[38px] leading-[45.6px]">
                     Top creators
                  </h2>
                  <p className="mb-[40px] text-[16px] leading-[22.4px]  text-[#d0d0d0] xl:mb-[60px] text-[22px] leading-[30.2px]">
                     Checkout Top Rated Creators on the NFT Marketplace
                  </p>
               </div>

               <div className="hidden mt-[30px] xl:flex">
                  <button className="btn-border flex items-center gap-[12px] max-w[247px] h-[60px]">
                     <span>
                        <img src={rankings} alt="" />
                     </span>{" "}
                     View Rankings
                  </button>
               </div>
            </div>

            <div className="craetor-card flex flex-col gap-[16px] items-center justify-center flex-wrap sm:grid grid-cols-2">
               {creators.map((item) => {
                  return (
                     <div
                        key={item.id}
                        className=" w-full min-w-[305px] text-[#fff] flex items-center gap-[20px] p-[20px] min-h-[100px] relative bg-[#3B3B3B] rounded-[20px]"
                     >
                        <div>
                           <img
                              className="w-[80px] h-[80px]"
                              src={item.url}
                              alt={item.name}
                           />
                        </div>
                        <div>
                           <h4 className="text-[22px] leading-[30.8px] font-[600] mb-[6px] capitalize">
                              {item.name}
                           </h4>
                           <ul>
                              <li>
                                 <span className="text-[#858584] mr-[8px] text-[16px] leading-[22.4px]">
                                    Total Sales:
                                 </span>
                                 <span className="font2">{item.price}</span>
                              </li>
                           </ul>
                        </div>
                     </div>
                  );
               })}
            </div>

            <div className=" mt-[30px] xl:hidden">
               <button className="btn-border flex items-center gap-[12px] min-w-[250px] min-h-[60px]">
                  <span>
                     <img src={rankings} alt="" />
                  </span>{" "}
                  View Rankings
               </button>
            </div>
         </div>
      </section>
   );
};

export default Index;
