import { createGlobalStyle } from "styled-components";
import { setColor } from "../../styles";

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
`;

export default Globals;
