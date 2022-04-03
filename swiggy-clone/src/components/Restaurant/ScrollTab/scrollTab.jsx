
import styled from "styled-components";
import  VerticalTabs  from "./leftAlignment";
import { RightAlignment } from "./RightAlignment";
import {useSelector} from "react-redux"

const Main = styled.div`
width: 100%;
height: 375px;
display: flex;
justify-content: space-between;
align-items: center;
margin-top: 0;
`

export const ScrollTab = () => {
  const cart = useSelector((store) => (store.login.userLogged.cart));

    return (
       <>
       <Main>
       <VerticalTabs></VerticalTabs>
       {cart.length ? "" : <RightAlignment></RightAlignment>}
       </Main>
       </>
    )
}
