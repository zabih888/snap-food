import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Container,
} from "@mui/material";
import React from "react";
import styled from "styled-components";
import HeaderTop from "../components/Global/HeaderTop";
import Footer from "../components/Layout/Footer";
import { paddingContainerWithTop, setColor } from "../styles";
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
  ${paddingContainerWithTop}
  .question{}
  .answer{
    color: ${setColor.gray};
    line-height: 2s;
  }
`;
