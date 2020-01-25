import style from "styled-components";

export const QuestionsContainer = style.div`
    width: 700px;
    margin: auto;
    border: 1px solid #dddddd;
    border-radius: 5px;
`;

export const Tabs = style.div`
    border-bottom: 1px solid #ddd;
`;

export const Tab = style.span`
    display: inline-block;
    width:50%;
    padding: 15px;
    text-align:center;
    font-weight: bold;
    cursor: pointer;
    background: ${({ active }) => (active ? "#ddd" : "#fff")};
`;

export const TabPanels = style.div`
    padding: 0 15px;
`;
