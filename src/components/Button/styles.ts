import styled, { css } from 'styled-components';

interface ButtonContainerProps {
  danger: boolean;
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  height: 52px;
  padding: 0 16px;
  border: none;
  font-size: 16px;
  color: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  border-radius: 4px;
  font-weight: bold;
  background: ${props => props.theme.colors.primary.main};
  transition: background 200ms ease-in;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: ${props => props.theme.colors.primary.light};
  }

  &:active {
    background: ${props => props.theme.colors.primary.dark};
  }

  &[disabled] {
    background: ${props => props.theme.colors.gray[200]};
    cursor: default;
  }

  ${props =>
    props.danger &&
    css`
      background: ${props.theme.colors.danger.main};

      &:hover {
        background: ${props.theme.colors.danger.light};
      }

      &:active {
        background: ${props.theme.colors.danger.dark};
      }
    `}
`;
