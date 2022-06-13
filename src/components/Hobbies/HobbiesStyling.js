import styled from "styled-components";

export const styledHobbies = styled.div`
.hobbiesDiv{
    padding: 15px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    grid-column-start: 1;
    grid-row-start: 3;
}
@media only screen and (max-width: 720px) {
    .hobbiesDiv{
        grid-column: span 2;
        grid-row-start: 7;
    }
}
`