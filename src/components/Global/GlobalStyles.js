import { createGlobalStyle } from "styled-components";
import { setColor } from "../../styles";

const Globals = createGlobalStyle`
 *, *::before, *::after{
     box-sizing: border-box;
     margin: 0;
     padding: 0;
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
`;

export default Globals;
