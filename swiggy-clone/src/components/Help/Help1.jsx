import "./SyleSheetHelp.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React from "react";

export const Help1 = () => {
  return (
    <>
      <div className="faq-top-second-second">
        <h2>Partner Onboarding </h2>

        <Accordion sx={{ color: "#6a6c75" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={{ "&:hover": { color: "#f77103" } }}
          >
            <Typography>I want to partner my restaurant with Swiggy</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ color: "#f77103", fontSize: "2vh" }}>
              Partner with us
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
              What are the mandatory documents needed to list my restaurant on
              Swiggy?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              - Copies of the below documents are mandatory
              <br />
              - FSSAI Licence OR FSSAI Acknowledgement
              <br />
              - Pan Card
              <br />
              - GSTIN Certificate
              <br />
              - Cancelled Cheque OR bank Passbook
              <br />- Menu
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
              After I submit all documents, how long will it take for my
              restaurant to go live on Swiggy?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              After all mandatory documents have been received and verified it
              takes upto 7-10 working days for the onboarding to be completed
              and make your restaurant live on the platform.
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
              What is this one time Onboarding fees? Do I have to pay for it
              while registering?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              This is a one-time fee charged towards the system & admin costs
              incurred during the onboarding process. It is deducted from the
              weekly payouts after you start receiving orders from Swiggy.
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
              Who should I contact if I need help & support in getting
              onboarded?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              You can connect with Partner Support on 080-67466777/68179777 or
              write to partnersuport@swiggy.in
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
              How much commission will I be charged by Swiggy?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              The commission charges vary for different cities. You will be able
              to see the commission applicable for you once the preliminary
              onboarding details have been filled.
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
              I don’t have an FSSAI licence for my restaurant. Can it still be
              onboarded?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              FSSAI licence is a mandatory requirement according to the
              government’s policies. However, if you are yet to receive the
              licence at the time of onboarding, you can proceed with the
              acknowledgement number which you will have received from FSSAI for
              your registration.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </>
  );
};
