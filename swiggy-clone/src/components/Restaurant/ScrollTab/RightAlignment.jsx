import styled from "styled-components";

const Div = styled.div`
  width: 25%;
  height: 375px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
`;

const Heading = styled.h1`
  color: teal;
  font-weight: 600;
  font-size: 2rem;
  margin: 5px;
  text-align: left;
`;

const Img = styled.img`
  width: 278px;
  height: 212px;
  object-fit: cover;
`;

const Txt = styled.h6`
  color: grey;
  margin
`;

export const RightAlignment = () => {
  return (
    <>
      <Div>
        <Heading>Cart Empty</Heading>
        <Img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_480/Cart_empty_-_menu_2x_ejjkf2"></Img>
        <Txt>
          Good food is always cooking! Go ahead, order some yummy items from the
          menu.
        </Txt>
      </Div>
    </>
  );
};
