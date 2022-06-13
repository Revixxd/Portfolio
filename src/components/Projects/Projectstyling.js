import styled from "styled-components";

export const StyledProjects = styled.div`
    .projectsDiv{
    grid-column: span 2;
    grid-row: span 2;

    display: flex;
    flex-direction: column;
    gap: 12px;
}

.projectsDiv--elements{
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.projectsDiv--titileDiv{
    padding: 15px;
}
`