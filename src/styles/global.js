import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    
  ::-webkit-scrollbar {
    width: 0.5rem;
    background-color: rgba(53, 53, 55, 0.9);
  }

  ::-webkit-scrollbar-thumb {
    background-color: #a9a9a9;
  }

  scroll-behavior: smooth;

  }
/*   
@media (max-width: 1440px) { /* 768px */
    /* html { */
        /* font-size: 10.5px; 1rem = 14px */
    /* } */
/* }  */



  body{
    min-height: 100vh;

   //cor que estava antes 
   /* background-color: #242426; */

   //cor um pouco mias clara
   /* background-color: #28282A; */

   background-color:  rgba(45, 45, 47, 1);/* Um pouco mais clara */
  }
`;
