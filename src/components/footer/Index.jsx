import React from "react";
import footer1 from "../../images/footer1.svg";
import footer2 from "../../images/footer2.svg";
import footer3 from "../../images/footer3.svg";
import footer4 from "../../images/footer4.svg";

const Index = () => {
   return (
      <footer>
         <div className="container m-auto  px-[30px]">
            <div className="footer-wrapper">
               <div className="footer-elements">
                  <p className="footer-text">
                     NFT marketplace UI created with Anima for Figma.
                  </p>
                  <p className="footer-text">Join our community</p>
                  <ul className="footer-list">
                     <li className="footer-list-item">
                        <img src={footer1} alt="photo" />
                     </li>
                     <li className="footer-list-item">
                        <img src={footer2} alt="photo" />
                     </li>
                     <li className="footer-list-item">
                        <img src={footer3} alt="photo" />
                     </li>
                     <li className="footer-list-item">
                        <img src={footer4} alt="photo" />
                     </li>
                  </ul>
               </div>
               <div className="footer-elements">
                  <h3 className="footer-title">Explore</h3>
                  <a href="#" className="footer-text">
                     Marketplace
                  </a>
                  <a href="#" className="footer-text">
                     Rankings
                  </a>
                  <a href="#" className="footer-text">
                     Connect a wallet
                  </a>
               </div>
               <div className="footer-elements">
                  <h3 className="footer-title">Join our weekly digest</h3>
                  <p className="footer-text">
                     Get exclusive promotions & updates straight to your inbox.
                  </p>
                  <form className="footer-form">
                     <input type="email" placeholder="Enter your email here" />
                     <button className="footer-btn" type="submit">
                        <span>Subscribe</span>
                     </button>
                  </form>
               </div>
            </div>
         </div>
      </footer>
   );
};

export default Index;
