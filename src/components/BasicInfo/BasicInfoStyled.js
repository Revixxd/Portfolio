import styled from "styled-components"

export const BasicInfiStyled = styled.div`
.BasicInfoDiv{

/* for app js grid */
grid-row: span 2;

padding: 20px;
width: 100%;
/* max-width: 300px; */

display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;

gap: 20px;
}

@media only screen and (max-width: 720px) {
.BasicInfoDiv{
    grid-column: span 2;
}
.BasicInfoDiv--ImageDiv{
    max-width:50% !important;
}
}


.BasicInfoDiv--ImageDiv{
max-width:90%;
max-height: 100%;
}
.BasicInfoDiv--ImageDiv img{
max-width:100%;
max-height: 100%;
}

.BasicInfoDiv--bottomInfo{
display: flex;
flex-direction: column;
gap: 10px;
}

.BasicInfoDiv__bottomInfo--name{
display: flex;
flex-direction: column;
gap: 5px;
}

.BasicInfoDiv__bottomInfo--contact{
display: flex;
flex-direction: column;
gap: 8px;
}

.BasicInfoDiv__bottomInfo__contact--element{
display: flex;
gap: 10px;

}

`