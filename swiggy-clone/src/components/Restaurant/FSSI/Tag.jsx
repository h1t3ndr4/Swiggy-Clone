import styled from "styled-components";

const Main = styled.div`
  width: 100%;
  height: 500px;
  background-color: #e9e9eb;
`;

const Flex = styled.div`
  width: 85%;
  height: 55%;
  margin: 0 auto;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const DivLeftright = styled.div`
  width: 28%;
  hieght: 100%;
  text-align: center;
`;

const Bars = styled.div`
  width: 35px;
  height: 5px;
  background-color: teal;
  margin: 15px auto;
`;
const Bottom = styled.div`
  width: 45%;
  height: 40%;
  text-align: center;
  margin: 20px auto;
`;

const Logo = styled.img`
  height: 40px;
  -webkit-filter: blur(0px);
  -moz-filter: blur(0px);
  -ms-filter: blur(0px);
  filter: progid:DXImageTransform.Microsoft.Blur(PixelRadius='0');

`;
export const Tag = () => {
  return (
    <>
      <Main>
        <Flex>
          <DivLeftright>
            <h6 style={{ fontWeight: "600", color: "black", margin: "5px 0" }}>
              ADDRESS
            </h6>
            <Bars></Bars>
            <p style={{ color: "teal", fontSize: "0.95rem" }}>
              Niyaaz, Tilakwadi, Ground floor, Swaroop Plaza, Shukrawar Peth Rd,
              Tilakwadi, Shivaji Colony, Tilakwadi, Belgaum, Karnataka 590006,
              India
            </p>
          </DivLeftright>

          <DivLeftright style={{ verticalAlign: "top" }}>
            <h6 style={{ fontWeight: "600", color: "black", margin: "5px 0" }}>
              CUISINES
            </h6>
            <Bars></Bars>
            <p style={{ color: "teal", fontSize: "0.95rem" }}>
              Biryani,North Indian
            </p>
          </DivLeftright>
        </Flex>

        <Bottom>
          <Logo
            src={
              "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_162,h_80/fssai_final_edss9i"
            }
          ></Logo>
          <h5 style ={{color : "teal", margin: "25px", fontWeight: "600"}}>License No. 11220304000152</h5>
        </Bottom>
      </Main>
    </>
  );
};
