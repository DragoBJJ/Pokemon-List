import
styled
from "styled-components"

import pokemon from "../../assets/images/pokemon.jpg"


export const WrapperHomePage = styled.div `
position: relative;
   height: 100vh;
   width: 100vw;
   background-image: url(${pokemon});
   background-size:  cover;
   background-position: center;
   background-repeat: no-repeat;
`