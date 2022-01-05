import React from "react";
import Container from "../../components/Global/Container";
import { flexAlign, media, setColor } from "../../styles";
import { categoryData } from "../../data.js";
import styled from "styled-components";
const CateqoryHome = () => {
  return (
    <Container spaceSection="5rem">
      <Wrap>
        <h2 className="title">دسته بندی ها</h2>
        <div className="itemWrap">
          {categoryData.map((item) => (
            <Item style={{ backgroundImage: `url(${item.imgae})` }}>
              <p className="name">
                {item.text}
                <span className="arrow">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 9 16"
                    fill="currentColor"
                    width={8}
                  >
                    <path d="M8.70539 15.2946C9.09466 14.9053 9.095 14.2743 8.70615 13.8846L2.83 8L8.70615 2.11539C9.095 1.72569 9.09466 1.09466 8.70539 0.705388C8.31581 0.315815 7.68419 0.315815 7.29462 0.705388L0.707108 7.2929C0.316584 7.68342 0.316584 8.31659 0.707108 8.70711L7.29462 15.2946C7.68419 15.6842 8.31581 15.6842 8.70539 15.2946Z"></path>
                  </svg>
                </span>
              </p>
            </Item>
          ))}
        </div>
      </Wrap>
    </Container>
  );
};

export default CateqoryHome;
// =======================================================================
//                              STYLE
// =======================================================================
const Wrap = styled.div`
  padding: 0 1rem;

  .title {
    color: ${setColor.blackDark};
    margin-bottom: 1rem;
  }
  ${media.large`
    padding: 0 ;
  `}
  .itemWrap {
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(2, 1fr);
    ${media.medium`
      grid-template-columns: repeat(3, 1fr);
    `}
    ${media.large`
      grid-template-columns: repeat(4, 1fr);
    `}
    ${media.xLarge`
      grid-template-columns: repeat(6, 1fr);
    `}
  }
`;
const Item = styled.div`
  position: relative;
  box-shadow: rgb(58 61 66 / 6%) 0px 1px 0px,
    rgb(0 0 0 / 30%) 0px 8px 32px -16px;
  height: 100px;
  background-position: center;
  border-radius: 0.75rem;
  border: 5px solid rgb(255, 255, 255);
  cursor: pointer;

  .name {
    position: absolute;
    z-index: 10;
    bottom: 0;
    width: 100px;
    padding: 0.2rem 0;
    color: ${setColor.blackMain};
    background-color: ${setColor.whiteMain};
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    border-top-left-radius: 1rem;
    .arrow {
      color: ${setColor.primaryLight};
      ${flexAlign}
      transition: .3s ease;
    }
    &:hover {
      .arrow {
        transform: translateX(-40%);
        transition: 0.3s ease;
        color: ${setColor.primaryDark};
      }
    }
  }
`;
