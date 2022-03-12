import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    height: 100%;
    align-items: center;
`;

export const Card = styled.div`
    background: #f1f1f1;
    box-shadow: 0px 0px 30px -4px rgba(0,0,0,0.75);
    padding: 3rem;
    border-radius: 1rem;
    text-align: center;
`;

export const CalculatorCont = styled.div`
    display: flex;
    justify-content: space-around;
    margin-bottom: 2rem;
`;

export const ResultCont = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;
`;

export const ResultSpan = styled.span`
    margin-left: 2rem;
    font-weight: bold;
    font-size: x-large;
`;

export const Input = styled.input`
    padding: 5px;
    border-radius: 5px;
    width: 45%;
`;

export const Button = styled.button`
    padding: 5px 17px;
    border-radius: 5px;
    border: 1px solid darkgrey;
    background: darkgray;
    cursor: pointer;
    transition: 0.5s ease all;
    :hover {
        background: #979797;
        border-color: #979797;
    }
`;
