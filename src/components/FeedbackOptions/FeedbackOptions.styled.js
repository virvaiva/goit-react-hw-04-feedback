import styled from '@emotion/styled';
export const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
`;

export const Button = styled.button`
  font-weight: 600;
  height: 50px;
  width: 100px;
  border: #186d3d;
  border-radius: 50px;
  box-shadow: 2px 3px 7px 5px rgba(0, 0, 0, 0.41);
  overflow: hidden;
  font-size: 20px;
  margin-bottom: 10px;
  cursor: pointer;
  &:hover,
  &:focus {
    background: #186d3d;
    color: #fff;
  }
`;
