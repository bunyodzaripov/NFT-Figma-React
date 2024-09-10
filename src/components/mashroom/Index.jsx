import React from "react";
import avatar from "../../images/magicAvatar.png";
import eye from "../../images/eye.svg";

const Index = () => {
   return (
      <section id="magic">
         <div className="magic-gradient">
            <div className="container m-auto  px-[30px]">
               <div className="magic-wrapper">
                  <div className="magic-content">
                     <div className="shromie-wrapper">
                        <img src={avatar} alt="" />
                        <h4 class="shromie-title">Shroomie</h4>
                     </div>
                     <h2 className="magic-content-title">Magic Mashrooms</h2>
                     <button className="magic-btn second">
                        <img src={eye} alt="photo" /> <span>See NFT</span>
                     </button>
                  </div>
                  <div className="magic-time">
                     <p>Auction ends in:</p>
                     <div className="times">
                        <ul>
                           <li className="hour time-style">59 </li>
                           <li>Hours</li>
                        </ul>
                        <span className="time-style">:</span>
                        <ul>
                           <li className="minut time-style">59</li>
                           <li>Minutes</li>
                        </ul>
                        <span className="time-style">:</span>
                        <ul>
                           <li className="second time-style">59</li>
                           <li>Seconds</li>
                        </ul>
                     </div>
                  </div>
                  <button className="magic-btn">
                     <img src={eye} alt="" /> <span>See NFT</span>
                  </button>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Index;
