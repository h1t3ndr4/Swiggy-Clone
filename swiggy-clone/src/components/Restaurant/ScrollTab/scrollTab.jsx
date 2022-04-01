
import styled from "styled-components";
import  VerticalTabs  from "./leftAlignment";
import { RightAlignment } from "./RightAlignment";

const Main = styled.div`
width: 100%;
height: 375px;
display: flex;
justify-content: space-between;
align-items: center;
margin-top: 0;
`

export const ScrollTab = () => {

    return (
       <>
       <Main>
       <VerticalTabs></VerticalTabs>
       <RightAlignment></RightAlignment>
       </Main>
       </>
    )
}
