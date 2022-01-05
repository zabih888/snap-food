import { useMediaQuery } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { MediumSize } from "../../styles";

const Container = ({ bckColor, children, bottomRadius, spaceSection }) => {
  const matchesMedium = useMediaQuery(MediumSize);
  return (
    <Section
      style={{
        backgroundColor: bckColor,
        borderBottomRightRadius: matchesMedium ? bottomRadius : undefined,
        marginTop: spaceSection
      }}
    >
      {children}
    </Section>
  );
};

export default Container;

const Section = styled.section`
  max-width: 1300px;
  margin: 0 auto;
`;
