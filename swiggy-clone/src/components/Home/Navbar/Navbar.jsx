import styled from "styled-components";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

document.title = `Order food online from India's best food delivery service. Order from restaurants near you`;

const Main = styled.div`
  width: 100%;
  height: 80px;
  border: 1px solid black;
  padding: 0.5% 6%;
  box-shadow: 0 15px 40px -20px rgb(40 44 63 / 15%);
  postion: fixed;
  top: 0;
  left: 0;
  right: 0;
`;

const FlexContainer = styled.div`
  display: flex;
  border: 1px solid blue;
  justify-content: space-between;
  alignitems: center;
  height: 100%;
`;

const Div1 = styled.div`
  width: 25%;
  display: flex;
  border: 1px solid red;
  justify-content: space-between;
  align-Items: center;
  font-size: 1rem;
  
  h4 {font-size: calc(0.25em + 1vw);}
  h4:hover{
    color: orange;
  }
`;

const Div2 = styled.div`
  width: 53%;
  display: flex;
  border: 1px solid red;
  justify-content: space-between;
  align-items: center;
`;

const Icon = styled.img`
  width: 65px;
  height: 65px;
`;

const Items = styled.div`
  width: 17%;
  height: 100%;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  span {
    color: #3d4152;
    font-size: calc(0.2em + 1vw);
    font-weight: 600;
  }
  span:hover {
      color: orange;
  }
`;

export const NavBar = () => {
  return (
    <Main>
      <FlexContainer>
        <Div1>
          <Icon src="https://cdn.iconscout.com/icon/free/png-64/swiggy-1613371-1369418.png" />
          <h4>other</h4>
        </Div1>

        <Div2>
          <Items>
            <FontAwesomeIcon className="icons" icon={faSearch} size="lg" />
            <span>Search</span>
          </Items>
          <Items>
            <FontAwesomeIcon className="icons" icon={faSearch} size="lg" />
            <span>Search</span>
          </Items>
          <Items>
            <FontAwesomeIcon className="icons" icon={faSearch} size="lg" />
            <span>Search</span>
          </Items>
          <Items>
            <FontAwesomeIcon className="icons" icon={faSearch} size="lg" />
            <span>Search</span>
          </Items>
          <Items>
            <FontAwesomeIcon className="icons" icon={faSearch} size="lg" />
            <span>Search</span>
          </Items>
        </Div2>
      </FlexContainer>
    </Main>
  );
};