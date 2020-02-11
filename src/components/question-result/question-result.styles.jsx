import styled from "styled-components";

export const OptionResult = styled.div`
   border: 1px solid #ddd;
   padding: 10px;
   margin-bottom: 7px;
   ${(props) => props.current ? `border: 2px solid #000` : ''}
`;

export const ProgressContainer = styled.div`
   background: #ddd;
   margin: 10px 0;
   width: 100%;
   height: 10px;
`;

export const ProgressBar = styled.span`
   width: 50%;
   background: #000;
   display: block;
   height: 100%;
`;
