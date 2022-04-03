import "./SyleSheetHelp.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React from "react";

export const Help3 = () => {
  return (
    <>
      <div className="faq-top-second-second">
        <h2>FAQs</h2>

        <Accordion sx={{ color: "#6a6c75" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={{ "&:hover": { color: "#f77103" } }}
          >
            <Typography>What is Swiggy Customer Care Number?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ color: "#f77103", fontSize: "2vh" }}>
              We value our customer’s time and hence moved away from a single
              customer care number to a comprehensive chat-based support system
              for quick and easy resolution. You no longer have to go through
              the maze of an IVRS call support. Just search for your issue in
              the help section on this page and initiate a chat with us. A
              customer care executive will be assigned to you shortly. You can
              also email us your issue on support@swiggy.in Note: We value your
              privacy and your information is safe with us. Please do not reveal
              any personal information, bank account number, OTP etc. to another
              person. A Swiggy representative will never ask you for these
              details. Please do not reveal these details to fraudsters and
              imposters claiming to be calling on our behalf. Be vigilant and do
              not entertain phishing calls or emails.
            </Typography>
            <button className="butcol">SEND AN EMAIL</button>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{ color: "#6a6c75" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
            sx={{ "&:hover": { color: "#f77103" } }}
          >
            <Typography>
              I want to explore career opportunities with Swiggy
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Join our Team</Typography>
            <button className="butcol">SEND AN EMAIL</button>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{ color: "#6a6c75" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={{ "&:hover": { color: "#f77103" } }}
          >
            <Typography>I want to provide feedback</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <button className="butcol">SEND AN EMAIL</button>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{ color: "#6a6c75" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={{ "&:hover": { color: "#f77103" } }}
          >
            <Typography>Can I edit my order?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Your order can be edited before it reaches the restaurant. You
              could contact customer support team via chat or call to do so.
              Once order is placed and restaurant starts preparing your food,
              you may not edit its contents
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{ color: "#6a6c75" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={{ "&:hover": { color: "#f77103" } }}
          >
            <Typography>I want to cancel my order</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              We will do our best to accommodate your request if the order is
              not placed to the restaurant (Customer service number:
              080-67466729). Please note that we will have a right to charge a
              cancellation fee up to full order value to compensate our
              restaurant and delivery partners if your order has been confirmed.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{ color: "#6a6c75" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={{ "&:hover": { color: "#f77103" } }}
          >
            <Typography>
              Will Swiggy be accountable for quality/quantity?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Quantity and quality of the food is the restaurants'
              responsibility. However in case of issues with the quality or
              quantity, kindly submit your feedback and we will pass it on to
              the restaurant.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{ color: "#6a6c75" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={{ "&:hover": { color: "#f77103" } }}
          >
            <Typography>Is there a minimum order value?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              We have no minimum order value and you can order for any amount.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{ color: "#6a6c75" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={{ "&:hover": { color: "#f77103" } }}
          >
            <Typography>Do you charge for delivery?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Delivery fee varies from city to city and is applicable if order
              value is below a certain amount. Additionally, certain restaurants
              might have fixed delivery fees. Delivery fee (if any) is specified
              on the 'Review Order' page.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{ color: "#6a6c75" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={{ "&:hover": { color: "#f77103" } }}
          >
            <Typography>How long do you take to deliver?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Standard delivery times vary by the location selected and
              prevailing conditions. Once you select your location, an estimated
              delivery time is mentioned for each restaurant.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{ color: "#6a6c75" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={{ "&:hover": { color: "#f77103" } }}
          >
            <Typography>What are your delivery hours?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Our delivery hours vary for different locations and depends on
              availability of supply from restaurant partners.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </>
  );
};
