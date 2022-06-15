import styled from 'styled-components';

interface ContainerProps {
  type: 'danger' | 'success' | 'default';
}

export const Container = styled.div<ContainerProps>`
  padding: 1rem 2rem;
  background: ${props => {
    switch (props.type) {
      case 'danger':
        return props.theme.colors.danger.main;
      case 'success':
        return props.theme.colors.success;
      default:
        return props.theme.colors.primary.main;
    }
  }};
  color: #fff;
  border-radius: 4px;
  box-shadow: 0 20px 20px -16px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  & + & {
    margin-top: 12px;
  }
`;
