import { createGlobalStyle } from "styled-components"

export const lightTheme = {
    body: "#f2f2f2",
    mainColor: "#4F4F4F",
    secondColor: "#828282",

    elementsBackGround: "#FFFFFF",
    elementsShadow: " 2px 2px 15px -12px rgba(66, 68, 90, 1);"
}
export const darkTheme = {
    body: "#2C2C2E",
    mainColor: "#f2f2f2",
    secondColor: "#bdbaba",

    elementsBackGround: "#3A3A3C",
    elementsShadow: " 2px 2px 15px -12px #828282;"
}

export const GlobalStyles = createGlobalStyle`
    body{
        background-color: ${props => props.theme.body};
        transition-duration: 0.55s;
        h1,h2,h3,h5,footer, a{
            color: ${props => props.theme.mainColor}
        }
        p,h4,h6{
            color: ${props => props.theme.secondColor}
        }
        .elementStyle{
            background-color: ${props => props.theme.elementsBackGround};
            box-shadow: ${props => props.theme.elementsShadow};
        }
    }

    
`