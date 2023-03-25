import React from "react";
import './pricing.css';
const Pricing = () => {
  return (
    <>
      <div className="price-wrapper">
        <div className="pricing-section">

          <div className="left">
            <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
              <h2 className="header">
                Invest in skills, <br/> <span className="highlighter">earn 10X</span> <br className="afterbr" /> of what you paid.
              </h2>
              <p className="para">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>

            <div className="subsections-p">
              <div className="left">
                <div className='item'>
                  <div className="emty"></div>
                  <div className="content">
                    <h4>1.2 Cr/Year</h4>
                    <p>highest fresher package</p>
                  </div>
                </div>
                <div className='item'>
                  <div className="emty"></div>
                  <div className="content">
                    <h4>1000+ Offers</h4>
                    <p>from top companies</p>
                  </div>
                </div>
              </div>
              <div className="right">
                <div className='item'>
                  <div className="emty"></div>
                  <div className="content">
                    <h4>Multiple &lt;100 Ranks </h4>
                    <p>in kickstart last year</p>
                  </div>
                </div>
                <div className='item'>
                  <div className="emty"></div>
                  <div className="content">
                    <h4>Trusted by IITians</h4>
                    <p>for their career prep</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="price-right">
            <div className="price-section">
              <span className="banner-title">Premium Victory Batch</span>
              <h5 className="original-price">₹19,999</h5>
              <h3 className="offer-price">₹13,999</h3>
              <div className="backlogo"></div>
            </div>
            <div className="included-content">
              <div className="content">
                <div className="emty-b"></div>
                <div className="desc">100+ Hrs Live Content</div>
              </div>
              <div className="content">
                <div className="emty-b"></div>
                <div className="desc">50+ Hrs Contest</div>
              </div>
              <div className="content">
                <div className="emty-b"></div>
                <div className="desc">500+ Problems</div>
              </div>
              <div className="content">
                <div className="emty-b"></div>
                <div className="desc">Includes an interview bootcamp and access to a mentor network</div>
              </div>
              <div className="content">
                <div className="emty-b"></div>
                <div className="desc">Enjoy access to our content for one year (paid extensions available)</div>
              </div>
              <div className="content">
                <div className="emty-b"></div>
                <div className="desc">Flexible payment options, including no-cost EMI, are available.</div>
              </div>

              <div className="">
                <a href="#" className="btn2 light">
                  Join now &#10132;
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Pricing;
