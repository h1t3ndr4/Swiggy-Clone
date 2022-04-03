import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import styled from "styled-components";
import Button from "@mui/material/Button";
import {useState, useEffect} from "react";
import {addCart, addUser} from "../../../Redux/User/action.js"
import {useSelector, useDispatch} from "react-redux";
const Cards = styled.div`
  width: 550px;
  height: 150px;
`;

const Title = styled.h3`
  font-size: 1rem;
  text-align: left;
  font-weight: 600;
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-content: center;
  border-bottom: 1px solid lightgrey;
  height: 98%;
`;

const Item1 = styled.div`
  width: 70%;
  height: 85%;

  padding: 1%;
  text-align: left;
`;
const Item2 = styled.img`
  width: 100%;
  height: 70%;
  border-radius: 8%;
`;

const FlexMain = styled.div`
  width: 24%;
  height: 95%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Img = styled.img`
src: https://png.pngitem.com/pimgs/s/151-1515150_veg-icon-png-circle-transparent-png.png,
width: 16px;
height: 16px;
text-align: left;`;

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);
  const [dishData, setDishData] = useState([]);
  const dispatch = useDispatch();
  const userLogged = useSelector((store) => (store.login.userLogged));

 console.log(userLogged);

  const getDishData = () => {
    fetch("https://server-swiggy.herokuapp.com/dishes/").then((res) => (res.json()))
    .then((data) => (setDishData(data)));
  }

  const getUserData = () => {
    fetch(`https://server-swiggy.herokuapp.com/users/${userLogged._id}`).then((res) => (res.json()))
    .then((data) => (dispatch(addUser(data))));
  }
 console.log(userLogged)
  useEffect(() => {
  getDishData();
  }, [])


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ flexGrow: 3, bgcolor: "background.paper", display: "flex"}}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: "divider" }}
        style={{
          width: "25%",
          borderTop: "none",
        }}
      >
        <Tab label="Veg Combo" {...a11yProps(0)} />
        <Tab label="Chicken Combo" {...a11yProps(1)} />
        <Tab label="Mutton Combo" {...a11yProps(2)} />
        <Tab label="Biriyani & Rice" {...a11yProps(3)} />
        <Tab label="Main Course" {...a11yProps(4)} />
        <Tab label="Soup" {...a11yProps(5)} />
        <Tab label="Breads" {...a11yProps(6)} />
      </Tabs>
      <TabPanel style = {{overflowY: "scroll", height: "350px"}}  value={value} index={0}>
        {dishData.map((e) => (
        <Cards key = {e.id}>
          <Title>Veg Combo</Title>
          <Flex>
            <Item1>
              <Img src= {`https://png.pngitem.com/pimgs/s/151-1515150_veg-icon-png-circle-transparent-png.png`}></Img>
              <br />
              <h3
                style={{
                  fontWeight: "500",
                  fontSize: "1rem",
                  marginTop: "10px",
                }}
              >
               {e.name}
              </h3>
              <h4
                style={{
                  fontWeight: "500",
                  fontSize: "0.85rem",
                  marginTop: "10px",
                }}
              >
                ₹ {e.price}
              </h4>
              <h4
                style={{
                  fontWeight: "500",
                  fontSize: "0.8rem",
                  marginTop: "10px",
                  color: "grey",
                  lineHeight: "16px",
                }}
              >
             {e.category}
              </h4>
            </Item1>

            <FlexMain>
              <Item2 src={e.image}></Item2>
              <Button onClick = {() => {dispatch(addCart(e._id));
              fetch(`https://server-swiggy.herokuapp.com/users/${e._id}`, {
                method: "PATCH",
                body: JSON.stringify({...userLogged}),
                headers: {
                  "content-type": "application/json"
                }
              })
              .then(() => {getUserData()}).then(() => {alert("Item added to cart successfully")})
            }}
                variant="outlined"
                style={{
                  borderRadius: "0",
                  height: "35px",
                  width: "100px",
                  fontSize: "0.75rem",
                  color: "orange",
                  border: "1px solid lightgrey",
                  fontWeight: "600",
                }}
              >
                ADD
              </Button>
            </FlexMain>

          </Flex>
        </Cards>

        ))}

      </TabPanel>
      <TabPanel style = {{overflowY: "scroll", height: "350px"}} value={value} index={1}>
      {dishData.map((e) => (
        <Cards key = {e.id}>
          <Title>Veg Combo</Title>
          <Flex>
            <Item1>
              <Img src= {`https://png.pngitem.com/pimgs/s/151-1515150_veg-icon-png-circle-transparent-png.png`}></Img>
              <br />
              <h3
                style={{
                  fontWeight: "500",
                  fontSize: "1rem",
                  marginTop: "10px",
                }}
              >
               {e.name}
              </h3>
              <h4
                style={{
                  fontWeight: "500",
                  fontSize: "0.85rem",
                  marginTop: "10px",
                }}
              >
                ₹ {e.price}
              </h4>
              <h4
                style={{
                  fontWeight: "500",
                  fontSize: "0.8rem",
                  marginTop: "10px",
                  color: "grey",
                  lineHeight: "16px",
                }}
              >
             {e.category}
              </h4>
            </Item1>

            <FlexMain>
              <Item2 src={e.image}></Item2>
              <Button
                variant="outlined"
                style={{
                  borderRadius: "0",
                  height: "35px",
                  width: "100px",
                  fontSize: "0.75rem",
                  color: "orange",
                  border: "1px solid lightgrey",
                  fontWeight: "600",
                }}
              >
                ADD
              </Button>
            </FlexMain>

          </Flex>
        </Cards>

        ))}
      </TabPanel>
      <TabPanel style = {{ overflowY: "scroll", height: "350px"}} value={value} index={2}>
      {dishData.map((e) => (
        <Cards key = {e.id}>
          <Title>Veg Combo</Title>
          <Flex>
            <Item1>
              <Img src= {`https://png.pngitem.com/pimgs/s/151-1515150_veg-icon-png-circle-transparent-png.png`}></Img>
              <br />
              <h3
                style={{
                  fontWeight: "500",
                  fontSize: "1rem",
                  marginTop: "10px",
                }}
              >
               {e.name}
              </h3>
              <h4
                style={{
                  fontWeight: "500",
                  fontSize: "0.85rem",
                  marginTop: "10px",
                }}
              >
                ₹ {e.price}
              </h4>
              <h4
                style={{
                  fontWeight: "500",
                  fontSize: "0.8rem",
                  marginTop: "10px",
                  color: "grey",
                  lineHeight: "16px",
                }}
              >
             {e.category}
              </h4>
            </Item1>

            <FlexMain>
              <Item2 src={e.image}></Item2>
              <Button
                variant="outlined"
                style={{
                  borderRadius: "0",
                  height: "35px",
                  width: "100px",
                  fontSize: "0.75rem",
                  color: "orange",
                  border: "1px solid lightgrey",
                  fontWeight: "600",
                }}
              >
                ADD
              </Button>
            </FlexMain>

          </Flex>
        </Cards>

        ))}
      </TabPanel>
      <TabPanel style = {{overflowY: "scroll", height: "350px"}} value={value} index={3}>
      {dishData.map((e) => (
        <Cards key = {e.id}>
          <Title>Veg Combo</Title>
          <Flex>
            <Item1>
              <Img src= {`https://png.pngitem.com/pimgs/s/151-1515150_veg-icon-png-circle-transparent-png.png`}></Img>
              <br />
              <h3
                style={{
                  fontWeight: "500",
                  fontSize: "1rem",
                  marginTop: "10px",
                }}
              >
               {e.name}
              </h3>
              <h4
                style={{
                  fontWeight: "500",
                  fontSize: "0.85rem",
                  marginTop: "10px",
                }}
              >
                ₹ {e.price}
              </h4>
              <h4
                style={{
                  fontWeight: "500",
                  fontSize: "0.8rem",
                  marginTop: "10px",
                  color: "grey",
                  lineHeight: "16px",
                }}
              >
             {e.category}
              </h4>
            </Item1>

            <FlexMain>
              <Item2 src={e.image}></Item2>
              <Button
                variant="outlined"
                style={{
                  borderRadius: "0",
                  height: "35px",
                  width: "100px",
                  fontSize: "0.75rem",
                  color: "orange",
                  border: "1px solid lightgrey",
                  fontWeight: "600",
                }}
              >
                ADD
              </Button>
            </FlexMain>

          </Flex>
        </Cards>

        ))}
      </TabPanel>
      <TabPanel style = {{overflowY: "scroll", height: "350px"}} value={value} index={4}>
      {dishData.map((e) => (
        <Cards key = {e.id}>
          <Title>Veg Combo</Title>
          <Flex>
            <Item1>
              <Img src= {`https://png.pngitem.com/pimgs/s/151-1515150_veg-icon-png-circle-transparent-png.png`}></Img>
              <br />
              <h3
                style={{
                  fontWeight: "500",
                  fontSize: "1rem",
                  marginTop: "10px",
                }}
              >
               {e.name}
              </h3>
              <h4
                style={{
                  fontWeight: "500",
                  fontSize: "0.85rem",
                  marginTop: "10px",
                }}
              >
                ₹ {e.price}
              </h4>
              <h4
                style={{
                  fontWeight: "500",
                  fontSize: "0.8rem",
                  marginTop: "10px",
                  color: "grey",
                  lineHeight: "16px",
                }}
              >
             {e.category}
              </h4>
            </Item1>

            <FlexMain>
              <Item2 src={e.image}></Item2>
              <Button
                variant="outlined"
                style={{
                  borderRadius: "0",
                  height: "35px",
                  width: "100px",
                  fontSize: "0.75rem",
                  color: "orange",
                  border: "1px solid lightgrey",
                  fontWeight: "600",
                }}
              >
                ADD
              </Button>
            </FlexMain>

          </Flex>
        </Cards>

        ))}
      </TabPanel>
      <TabPanel style = {{overflowY: "scroll", height: "350px"}} value={value} index={5}>
      {dishData.map((e) => (
        <Cards key = {e.id}>
          <Title>Veg Combo</Title>
          <Flex>
            <Item1>
              <Img src= {`https://png.pngitem.com/pimgs/s/151-1515150_veg-icon-png-circle-transparent-png.png`}></Img>
              <br />
              <h3
                style={{
                  fontWeight: "500",
                  fontSize: "1rem",
                  marginTop: "10px",
                }}
              >
               {e.name}
              </h3>
              <h4
                style={{
                  fontWeight: "500",
                  fontSize: "0.85rem",
                  marginTop: "10px",
                }}
              >
                ₹ {e.price}
              </h4>
              <h4
                style={{
                  fontWeight: "500",
                  fontSize: "0.8rem",
                  marginTop: "10px",
                  color: "grey",
                  lineHeight: "16px",
                }}
              >
             {e.category}
              </h4>
            </Item1>

            <FlexMain>
              <Item2 src={e.image}></Item2>
              <Button
                variant="outlined"
                style={{
                  borderRadius: "0",
                  height: "35px",
                  width: "100px",
                  fontSize: "0.75rem",
                  color: "orange",
                  border: "1px solid lightgrey",
                  fontWeight: "600",
                }}
              >
                ADD
              </Button>
            </FlexMain>

          </Flex>
        </Cards>

        ))}
      </TabPanel>
      <TabPanel style = {{overflowY: "scroll", height: "350px"}} value={value} index={6}>
      {dishData.map((e) => (
        <Cards key = {e.id}>
          <Title>Veg Combo</Title>
          <Flex>
            <Item1>
              <Img src= {`https://png.pngitem.com/pimgs/s/151-1515150_veg-icon-png-circle-transparent-png.png`}></Img>
              <br />
              <h3
                style={{
                  fontWeight: "500",
                  fontSize: "1rem",
                  marginTop: "10px",
                }}
              >
               {e.name}
              </h3>
              <h4
                style={{
                  fontWeight: "500",
                  fontSize: "0.85rem",
                  marginTop: "10px",
                }}
              >
                ₹ {e.price}
              </h4>
              <h4
                style={{
                  fontWeight: "500",
                  fontSize: "0.8rem",
                  marginTop: "10px",
                  color: "grey",
                  lineHeight: "16px",
                }}
              >
             {e.category}
              </h4>
            </Item1>

            <FlexMain>
              <Item2 src={e.image}></Item2>
              <Button
                variant="outlined"
                style={{
                  borderRadius: "0",
                  height: "35px",
                  width: "100px",
                  fontSize: "0.75rem",
                  color: "orange",
                  border: "1px solid lightgrey",
                  fontWeight: "600",
                }}
              >
                ADD
              </Button>
            </FlexMain>

          </Flex>
        </Cards>

        ))}
      </TabPanel>
    </Box>
  );
}
