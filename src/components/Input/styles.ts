import styled, { css } from 'styled-components';

interface InputContainerProps {
  error?: boolean;
}

export const InputContainer = styled.input<InputContainerProps>`
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

  &::placeholder {
    color: ${props => props.theme.colors.gray[200]};
  }

  &:focus {
    border-color: ${props => !props.error && props.theme.colors.primary.main};
  }

  ${props =>
    props.error &&
    css`
      border: 2px solid ${props.theme.colors.danger.main};
    `}
`;
