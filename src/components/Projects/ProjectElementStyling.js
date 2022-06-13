import styled from "styled-components";

export const ProjectsElementStyled = styled.div`

.projectElementsDiv{

display: flex;
flex-direction: row;
align-items: center;
gap: 20px;
padding: 15px;

}


.projectElementsDiv--img{
height: 150px;
}
.projectElementsDiv--img img{
max-width: 100%;
max-height: 100%;
}


.projectElementsDiv--info{

height: 95%;

width: 55%;

display: flex;
justify-content:space-between;
flex-direction: column;
gap: 10px;
}
.projectElementsDiv__info--hastag{
display: flex;
gap: 5px;

}

.projectElementsDiv__info--mainDescription{
display: flex;
flex-direction: column;
gap: 12px;
}

.projectElementsDiv__info--buttonsDiv{
display: flex;
gap:10px
}

.projectElementsDiv__info--buttonsDiv a{
transition: 0.35s ease-in-out;

padding: 5px 20px;
background-color: transparent;
border: solid 1px #2F80ED;
border-radius: 6px;
font-size: 15px;
color:#2F80ED;
}
.projectElementsDiv__info--buttonsDiv a:hover{
background-color:#2F80ED;
color:#FFFFFF;
}




`