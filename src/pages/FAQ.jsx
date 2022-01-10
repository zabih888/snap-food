import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Container,
  Typography,
} from "@mui/material";
import React from "react";
import styled from "styled-components";
import HeaderTop from "../components/Global/HeaderTop";
import Footer from "../components/Layout/Footer";
import { setColor } from "../styles";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { faqData } from "../data";

const FAQ = () => {
  return (
    <>
      <HeaderTop />
      <div style={{ backgroundColor: `${setColor.containerDark}` }}>
        <Container>
          <Wrap>
            <h1 className="title">پاسخ به پرسش‌های شما مایه افتخار ماست</h1>
            {faqData.map((item) => (
              <Accordion>
                <AccordionSummary
                  expandIcon={<KeyboardArrowDownIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <p className="question">{item.question}</p>
                </AccordionSummary>
                <AccordionDetails>
                  <p className="answer">{item.answer}</p>
                </AccordionDetails>
              </Accordion>
            ))}
          </Wrap>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default FAQ;

const Wrap = styled.div`
  padding: 6rem 1rem;
  
  .title{
      padding-bottom: 2rem;
  }
  .question{}
  .answer{
      color: ${setColor.blackLight};
      line-height: 1.8;
  }
`;
