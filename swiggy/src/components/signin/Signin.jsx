// headings files

import React from "react";
import styled from "styled-components";
const Logo = styled.img`
  width: auto;
  height: 80px;
`;

export const Header = () => {
  return (
    < div className="container-fluid">
      <div className="row">
        <div className="col-6 ml-auto">
          <div className="container">
            <div className="row">
              <div className="col-1 mr-auto">
                <Logo
                  src="https://d2sj89osparb2a.cloudfront.net/images/media/swiggy-cashback-coupons.png"
                  alt="logo"
                />
              </div>
              <div
                className="col-lg-2 btn btn-lg align-self-center font-weight-bold "
                style={{ textAlign: "right" }}
              >
                {/* login */}
              </div>
              <div
                className="col-lg-2 btn btn-lg align-self-center font-weight-bold "
                style={{ textAlign: "right" }}
              >
                {/* Register */}
              </div>
              </div>
            </div>

            {/* label */   }

            <div className="container">
                <div className="row align-self-start rows-cols-1 "> 
                    <div className="col text-left text-wrap mb-1">
                        <p className="h2 font-weight-bold">
                            cooking gone wrong ?
                        </p>
                    </div>
                    <div className="col text-right text-wrap">
                        <p className="h4 text-muted">
                            Order food from favorite restaurants near you. 
                        </p>
                    </div>
                </div>
            </div>
              <div className="container">
                  

              </div>
              <div className="container"></div>
              <div className="container"></div>
        </div>
        </div>
    </div>

  );
};
