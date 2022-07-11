import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    outline: 0;
    border: 0;
    list-style: none;
}
:root{
    --gray-900: #171923;
    --gray-800: #1A202C;
    --gray-600: #4A5568;
    --gray-400: #A0AEC0;
    --gray-200: #E2E8F0;
    --gray-50: #F7FAFC;
    --purple:#D6BCFA;
    --blue: #2B6CB0; 
}
html{
    overflow: unset;
}
body{
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    
}
h1, h2, h3, h4, h5, h6{
    font-weight: 700;

}
button{
    cursor: pointer;
}
`;
