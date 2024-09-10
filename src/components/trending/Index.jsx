import React from "react";
import { trendingArr } from "../../db";

const Index = () => {
   return (
      <section id="trending" className="w-full py-[80px]  mt-[80px] text-white">
         <div className="container  min-h-[90px] m-auto m-b-[60px]">
            <div className="flex flex-col gap-[10px]">
               <h2 className="text-[28px]  font-semibold leading-[39.2px] xl:text-[38px]  leading-[45.6px]">
                  Trending Collection
               </h2>
               <p className="text-[16px]  leadng-[22.4px] font-[400] xl:text-[22px] leading-[35.2px]">
                  Checkout our weekly updated trending collection.
               </p>
            </div>
         </div>

         <div className="container m-auto">
            <div className="flex  items-center justify-center gap-x-[60px] gap-y-[50px] flex-wrap mt-[60px] xl:justify-between ">
               {trendingArr.map((item) => {
                  return (
                     <div key={item.id}>
                        <div className="trend-card w-[330px] h-[330px]">
                           <img src={item.Url} alt="photo" />
                        </div>
                        <ul className="flex items-center justify-between mt-[16px]">
                           <li className="trend-card">
                              <img src={item.thumbUrl} alt="photo" />
                           </li>
                           <li className="trend-card">
                              <img src={item.thumbUrl2} alt="photo" />
                           </li>
                           <li className="counts w-[100px] h-[100px] bg-[#A259FF] rounded-[20px] flex items-center justify-center font-[700] leading-[22.4px] md:text-[22px] leading-[35.2px] xl:">
                              {item.count}
                           </li>
                        </ul>
                     </div>
                  );
               })}
            </div>
         </div>
      </section>
   );
};

export default Index;
