import styled from 'styled-components';

export const SelectContainer = styled.select`
  width: 100%;
  border-radius: 4px;
  border: none;
  padding: 16px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  outline: none;
  font-size: 16px;
  background: #fff;
  border: 2px solid #fff;
  transition: border-color 200ms;
  appearance: none;

  &::placeholder {
    color: ${props => props.theme.colors.gray[200]};
  }

  &:focus {
    border-color: ${props => props.theme.colors.primary.main};
  }
`;
