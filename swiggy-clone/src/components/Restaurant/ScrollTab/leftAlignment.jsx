import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import styled from "styled-components";
import Button from "@mui/material/Button";

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

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ flexGrow: 3, bgcolor: "background.paper", display: "flex" }}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: "divider" }}
        style={{
          width: "25%",
          border: "1px solid lightgrey",
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
      <TabPanel value={value} index={0}>
        <Cards>
          <Title>Veg Combo</Title>
          <Flex>
            <Item1>
              <Img src="https://png.pngitem.com/pimgs/s/151-1515150_veg-icon-png-circle-transparent-png.png"></Img>
              <br />
              <h3
                style={{
                  fontWeight: "500",
                  fontSize: "1rem",
                  marginTop: "10px",
                }}
              >
                Veg Value Meal with Gravy
              </h3>
              <h4
                style={{
                  fontWeight: "500",
                  fontSize: "0.85rem",
                  marginTop: "10px",
                }}
              >
                ₹ 854
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
                Khuskha quarter + Paneer butter masala (4 pcs) (200 ml) gravy +
                Reshmi paratha (1 pc) + Gajar halwa (1 portion).
              </h4>
            </Item1>

            <FlexMain>
              <Item2 src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/s11qlenbjoub4ae3h8u7"></Item2>
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
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Cards>
          <Title>Veg Combo</Title>
          <Flex>
            <Item1>
              <Img src="https://png.pngitem.com/pimgs/s/151-1515150_veg-icon-png-circle-transparent-png.png"></Img>
              <br />
              <h3
                style={{
                  fontWeight: "500",
                  fontSize: "1rem",
                  marginTop: "10px",
                }}
              >
                Veg Value Meal with Gravy
              </h3>
              <h4
                style={{
                  fontWeight: "500",
                  fontSize: "0.85rem",
                  marginTop: "10px",
                }}
              >
                ₹ 854
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
                Khuskha quarter + Paneer butter masala (4 pcs) (200 ml) gravy +
                Reshmi paratha (1 pc) + Gajar halwa (1 portion).
              </h4>
            </Item1>
            <FlexMain>
              <Item2 src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/vk9idscokr3eiwgwgsbv"></Item2>
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
        <Cards>
          <Title>Veg Combo</Title>
          <Flex>
            <Item1>
              <Img src="https://png.pngitem.com/pimgs/s/151-1515150_veg-icon-png-circle-transparent-png.png"></Img>
              <br />
              <h3
                style={{
                  fontWeight: "500",
                  fontSize: "1rem",
                  marginTop: "10px",
                }}
              >
                Veg Value Meal with Gravy
              </h3>
              <h4
                style={{
                  fontWeight: "500",
                  fontSize: "0.85rem",
                  marginTop: "10px",
                }}
              >
                ₹ 854
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
                Khuskha quarter + Paneer butter masala (4 pcs) (200 ml) gravy +
                Reshmi paratha (1 pc) + Gajar halwa (1 portion).
              </h4>
            </Item1>
            <FlexMain>
              <Item2 src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/s11qlenbjoub4ae3h8u7"></Item2>
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
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Cards>
          <Title>Veg Combo</Title>
          <Flex>
            <Item1>
              <Img src="https://png.pngitem.com/pimgs/s/151-1515150_veg-icon-png-circle-transparent-png.png"></Img>
              <br />
              <h3
                style={{
                  fontWeight: "500",
                  fontSize: "1rem",
                  marginTop: "10px",
                }}
              >
                Veg Value Meal with Gravy
              </h3>
              <h4
                style={{
                  fontWeight: "500",
                  fontSize: "0.85rem",
                  marginTop: "10px",
                }}
              >
                ₹ 854
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
                Khuskha quarter + Paneer butter masala (4 pcs) (200 ml) gravy +
                Reshmi paratha (1 pc) + Gajar halwa (1 portion).
              </h4>
            </Item1>
            <FlexMain>
              <Item2 src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/vk9idscokr3eiwgwgsbv"></Item2>
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
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Cards>
          <Title>Veg Combo</Title>
          <Flex>
            <Item1>
              <Img src="https://png.pngitem.com/pimgs/s/151-1515150_veg-icon-png-circle-transparent-png.png"></Img>
              <br />
              <h3
                style={{
                  fontWeight: "500",
                  fontSize: "1rem",
                  marginTop: "10px",
                }}
              >
                Veg Value Meal with Gravy
              </h3>
              <h4
                style={{
                  fontWeight: "500",
                  fontSize: "0.85rem",
                  marginTop: "10px",
                }}
              >
                ₹ 854
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
                Khuskha quarter + Paneer butter masala (4 pcs) (200 ml) gravy +
                Reshmi paratha (1 pc) + Gajar halwa (1 portion).
              </h4>
            </Item1>
            <FlexMain>
              <Item2 src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/vk9idscokr3eiwgwgsbv"></Item2>
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
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Cards>
          <Title>Veg Combo</Title>
          <Flex>
            <Item1>
              <Img src="https://png.pngitem.com/pimgs/s/151-1515150_veg-icon-png-circle-transparent-png.png"></Img>
              <br />
              <h3
                style={{
                  fontWeight: "500",
                  fontSize: "1rem",
                  marginTop: "10px",
                }}
              >
                Veg Value Meal with Gravy
              </h3>
              <h4
                style={{
                  fontWeight: "500",
                  fontSize: "0.85rem",
                  marginTop: "10px",
                }}
              >
                ₹ 854
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
                Khuskha quarter + Paneer butter masala (4 pcs) (200 ml) gravy +
                Reshmi paratha (1 pc) + Gajar halwa (1 portion).
              </h4>
            </Item1>
            <FlexMain>
              <Item2 src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/vk9idscokr3eiwgwgsbv"></Item2>
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
      </TabPanel>
      <TabPanel value={value} index={5}>
        <Cards>
          <Title>Veg Combo</Title>
          <Flex>
            <Item1>
              <Img src="https://png.pngitem.com/pimgs/s/151-1515150_veg-icon-png-circle-transparent-png.png"></Img>
              <br />
              <h3
                style={{
                  fontWeight: "500",
                  fontSize: "1rem",
                  marginTop: "10px",
                }}
              >
                Veg Value Meal with Gravy
              </h3>
              <h4
                style={{
                  fontWeight: "500",
                  fontSize: "0.85rem",
                  marginTop: "10px",
                }}
              >
                ₹ 854
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
                Khuskha quarter + Paneer butter masala (4 pcs) (200 ml) gravy +
                Reshmi paratha (1 pc) + Gajar halwa (1 portion).
              </h4>
            </Item1>
            <FlexMain>
              <Item2 src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/vk9idscokr3eiwgwgsbv"></Item2>
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
      </TabPanel>
      <TabPanel value={value} index={6}>
        <Cards>
          <Title>Veg Combo</Title>
          <Flex>
            <Item1>
              <Img src="https://png.pngitem.com/pimgs/s/151-1515150_veg-icon-png-circle-transparent-png.png"></Img>
              <br />
              <h3
                style={{
                  fontWeight: "500",
                  fontSize: "1rem",
                  marginTop: "10px",
                }}
              >
                Veg Value Meal with Gravy
              </h3>
              <h4
                style={{
                  fontWeight: "500",
                  fontSize: "0.85rem",
                  marginTop: "10px",
                }}
              >
                ₹ 854
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
                Khuskha quarter + Paneer butter masala (4 pcs) (200 ml) gravy +
                Reshmi paratha (1 pc) + Gajar halwa (1 portion).
              </h4>
            </Item1>
            <FlexMain>
              <Item2 src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/vk9idscokr3eiwgwgsbv"></Item2>
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
      </TabPanel>
    </Box>
  );
}
