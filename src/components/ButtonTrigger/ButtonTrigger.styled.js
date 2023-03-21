import styled from 'styled-components';

export const Button = styled.button`
    width: 196px;
    height: 50px;

    margin-top: 26px;

    justify-content: center;
    align-items: center;
    padding: 14px 28px;

    font: inherit;
    font-size: 18px;
    font-weight: 600;

    cursor: pointer;
    outline: none;

    border: none;
    border-radius: 10.3108px;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);

    color: #000000;
    background-color: ${p => {
        return p.triggerColor ? "#5CD3A8" : "#EBD8FF";
    }};

    scale: 1;
    transition: scale 250ms cubic-bezier(0.4, 0, 0.2, 1);
    
    :hover {
        scale: 1.03;
        background-color: ${p => {
        return p.triggerColor ? "#20b37d" : "#e0c3ff";
    }};
    }
`;
