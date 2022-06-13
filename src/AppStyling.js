import styled from "styled-components";

export const AppStyled = styled.div`
body img{
    border-radius: 10px;
}


.accessibilityDiv{
    margin-top: 1vh;
    /* border: solid black; */
    display: flex;
    justify-content: center;
    gap: 20px;
}

.accessibilityDiv button{
    cursor: pointer;
    background-color: transparent;
    border: solid 1px ;
    padding: 5px;
    border-radius: 6px;

}

.container{
    margin-top: 5vh;
    display: flex;
    flex-direction: column;
    gap: 3vh;
}

.elementStyle{
    border-radius: 12px;

}

.gridContainer{
    margin-left: auto;
    margin-right: auto;

    width: 95%;
    max-width: 1000px;


    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1.2rem;
}

@media only screen and (max-width: 720px) {
    .gridContainer{
        grid-template-columns: repeat(2, 1fr);
    }
}


h1{
    font-size: 24px;
    font-weight: 600;
}

h2{
    font-size: 20px;
    font-weight: bold;
}

h3{
    font-size: 16px;
}

h4{
    font-weight: 500;
    color: #828282;
    font-size: 12px;
}

h5{

}

h6{
    font-size: 11px;
}

a{
}

p{
    font-size: 12px;
    line-height: 17px;
}



`