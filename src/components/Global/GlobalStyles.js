import { createGlobalStyle } from "styled-components";
import { flexCenter, media, setColor } from "../../styles";

const Globals = createGlobalStyle`
 *, *::before, *::after{
     box-sizing: border-box;
     margin: 0;
     padding: 0;
     outline: none;
 } 

 body{
     background-color: ${setColor.background};
     direction: rtl;
     color: ${setColor.blackMain};
 }
 
 ul{
     list-style: none;
 }
 a{
     text-decoration: none;
 }

 .btn{
     background-color: ${setColor.primaryLight} !important;
     color: ${setColor.whiteMain} !important;
     font-size: 16px !important;
     font-weight: 600 !important;
     &:disabled{
         background-color: #dddddd !important;
     }
 }

 .title{
     color: ${setColor.blackDark};
    font-size: 1.75rem;
      ${media.large`
      font-size: 2rem;
      `}
      font-weight: 500;
      margin: 1.5rem 0;
 }

 .desc{
    line-height: 2;
 }

 .subTitle{
    font-weight: 400;
      font-size: 1.2rem;
      ${media.large`
      font-size: 1.5rem;
      `}
 }

 .loading{
     color: ${setColor.primaryMain};
     width: 100%;
     display: block;
     margin: auto;
 }
`;

export default Globals;
