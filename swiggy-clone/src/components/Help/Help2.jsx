import "./SyleSheetHelp.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React from "react";

export const Help2 = () => {
  return (
    <>
      <div className="faq-top-second-second">
        <h2>Legal</h2>

        <Accordion sx={{ color: "#6a6c75" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
            sx={{ "&:hover": { color: "#f77103" } }}
          >
            <Typography>Terms of Use</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              These terms of use (the "Terms of Use") govern your use of our
              website www.swiggy.in (the "Website") and our "Swiggy" application
              for mobile and handheld devices (the "App"). The Website and the
              App are jointly referred to as the "Services"). Please read these
              Terms of Use carefully before you download, install or use the
              Services. If you do not agree to these Terms of Use, you may not
              install, download or use the Services. By installing, downloading
              or using the Services, you signify your acceptance to the Terms of
              Use and Privacy Policy (being hereby incorporated by reference
              herein) which takes effect on the date on which you download,
              install or use the Services, and create a legally binding
              arrangement to abide by the same. Read More
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
            <Typography>Privacy Policy</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              We ( Bundl Technologies Private Limited, alias "Swiggy" ) are
              fully committed to respecting your privacy and shall ensure that
              your personal information is safe with us. This privacy policy
              sets out the information practices of www.swiggy.com ("Website")
              including the type of information is collected, how the
              information is collected, how the information is used and with
              whom it is shared. Reference to "you" in this Privacy Policy
              refers to the users of this Website whether or not you access the
              services available on the Website or consummate a transaction on
              the Website. By using or accessing this Website, you agree to the
              terms and conditions of this Privacy Policy. You also expressly
              consent to our use and disclosure of your Personal Information (as
              defined below) in any manner as described in this Privacy Policy
              and further signify your agreement to this Privacy Policy and the
              Terms of Use (being incorporated by reference herein). If you do
              not agree with the terms and conditions of this Privacy Policy,
              please do not proceed further or use or access this Website. Read
              More
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
            <Typography>Cancellations and Refunds</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              a) As a general rule you shall not be entitled to cancel your
              order once placed. You may choose to cancel your order only within
              one-minute of the order being placed by you. However, subject to
              your previous cancellation history, Swiggy reserves the right to
              deny any refund to you pursuant to a cancellation initiated by you
              even if the same is within one-minute. b)If you cancel your order
              after one minute of placing it, Swiggy shall have a right to
              charge you 100% of the order amount as the cancellation fee , with
              a right to either not to refund the order value in case your order
              is prepaid or recover from your subsequent order in case your
              order is postpaid, to compensate our restaurant/merchants and
              delivery partners. c)Swiggy reserves the right to charge you
              cancellation fee for the orders constrained to be cancelled by
              Swiggy for reasons not attributable to Swiggy, including but not
              limited to: i)in the event if the address provided by you is
              either wrong or falls outside the delivery zone; ii) failure to
              contact you by phone or email at the time of delivering the order
              booking; iii) failure to deliver your order due to lack of
              information, direction or authorization from you at the time of
              delivery; or iv) unavailability of all the items ordered by you at
              the time of booking the order. However, in the unlikely event of
              an item on your order being unavailable, Swiggy will contact you
              on the phone number provided to us at the time of placing the
              order and inform you of such unavailability. In such an event you
              will be entitled to cancel the entire order and shall be entitled
              to a refund to an amount upto 100% of the order value. d)In case
              of cancellations for the reasons attributable to Swiggy or the
              restaurant partner or delivery partners, Swiggy shall not charge
              you any cancellation fee. Read More
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
            <Typography>Terms of Use for Swiggy ON-TIME / Assured</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              These terms of use (the "Terms of Use") that govern your use of
              our service Swiggy ON-TIME / Assured ("ON-TIME" / "Assured") on
              our website www.swiggy.in (the "Website") and our Swiggy
              application for mobile and handheld devices (the "App"). The
              services on ON-TIME / Assured available on our Website and the App
              are jointly referred to as the "On-Time Delivery". Please read
              these Terms of Use carefully before you use the Services. If you
              do not agree to these Terms of Use, you may not use the Services.
              By using the Services, you signify your acceptance to the Terms of
              Use and Privacy Policy (incorporated by reference herein) and
              creates a legally binding arrangement to abide by the same. Read
              More
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </>
  );
};
