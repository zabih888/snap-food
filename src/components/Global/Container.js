import { useMediaQuery } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { LargeSize } from "../../styles";

const Container = ({ bckColor, children, bottomRadius, spaceSection }) => {
  const matchesLarge = useMediaQuery(LargeSize);
  return (
    <Section
      style={{
        backgroundColor: bckColor,
        borderBottomRightRadius: matchesLarge ? bottomRadius : undefined,
        marginTop: spaceSection,
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
