import style from "styled-components";

export const QuestionBox = style.div`
    border: 1px solid rgba(34,36,38,.15);
    margin: 15px 0
`;

export const QuestionHeader = style.h3`
    background: #dddddd45;
    margin: 0;
    padding: 15px 20px;
`;

export const QuestionFlex = style.div`
    display: flex;
    align-items: center;
    padding: 20px 0;
`;

export const QuestionContent = style.div`
    padding: 0 20px;
    width: 100%;
`;

export const ImageContainer = style.div`
    width: 200px;
    text-align: center;
    padding: 0 20px;
    border-right: 1px solid #ddd;
`;

export const QuestionImage = style.img`
    width:200px;
    width: 150px;
    border-radius: 50%;
`;
