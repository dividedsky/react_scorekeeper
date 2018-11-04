import styled from 'styled-components';

export const StyledABBox = styled.div`
  width: 800px;
  height: 400px;
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  margin: 10px auto;
`;


export const StyledCount = styled.div`
  width: 90%;
  height: 40%;
  display: flex;
  justify-content: space-between;
  border: 1px solid blue;
  margin: 10px auto;
`;

export const Count = styled.div`
  width: 45%;
  border: ${props => props.strikeCount ? 
  '1px solid yellow' : '1px solid red'}
  display: flex;
  justify-content: center;
  align-items: center;
`;
  
export const Circle = styled.div`
  width: 20px;
  height: 20px;
  border: 1px solid black;
  border-radius: 50%;
  background-color: ${props => props.filled ? 'orange': 'white'}
  `;

export const ControlsBox = styled.div`
  width: 90%;
  height: 40%;
  display: flex;
  justify-content: space-around;
  border: 1px solid green;
  margin: 10px auto;
  align-items: center;
`;

export const Button = styled.button`
  padding: 10px;
  border: 1px solid red;

  &:hover {
    filter: invert(100%);
  }
`;
