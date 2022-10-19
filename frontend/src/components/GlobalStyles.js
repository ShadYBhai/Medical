import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html{
        @media (max-width: 1600px) {
            font-size: 75%;
        }
        @media (max-width: 1300px) {

        }
    }

    body{
        background: #363636; 
        font-family: 'Inter',sans-serif;
        overflow-x: hidden;
    }

    button{
        font-weight: bold;
        font-size: 1.1rem;
        cursor: pointer;
        padding:1rem 2rem ;
        border: 2px solid #ff5500;
        background: transparent;
        color: #010101;
        transition: all 0.5s ease;
        font-family: 'Inter',sans-serif;


        &:hover{
            background-color: #ff0000;
        }
        
    }
    ${
      "" /* h2{
            font-weight: lighter;
            font-size: 3rem;
        }
        h3{
            color : white
        }
        h4{
            font-weight: bold;
            font-size:1.5rem;
          
        } */
    }
        span{
            font-weight: bold;
            color: #ff0000;
        }
        a{
            font-size: 0.8rem;
        }
        p{
            padding: 2rem 0rem;
            color: #ccc;
            font-size: 1rem;
            line-height: 120%;
        }

`;

export default GlobalStyle;
