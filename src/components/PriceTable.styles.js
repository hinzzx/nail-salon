import styled from "styled-components"

export const Table = styled.table`
    width: 60%;
    font-size: 2rem;
    padding: 0 2rem;
    /* concatenates all rows and cells */
    border-collapse: collapse;

    @media (max-width: 1024px) {
        font-size: 1.5rem;
    }

    @media (max-width: 768px) {
        width: 80%;
        font-size: 1.2rem;
    }

    @media (max-width: 480px) {
        width: 90%;
        font-size: 1rem;
    }
`

export const TableRow = styled.tr`
    /* baby pink color */
    background-color: #eeb0b0;
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
    color: black;
`

export const TableColumn = styled.td`
    padding: 0.5rem;
    width: 10%;
    color: white;
    /* surround it by border */
    border: 1px solid #eebfbf;
`
