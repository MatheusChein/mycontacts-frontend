import styled from 'styled-components';

export const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(3px);
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface ContainerProps {
  danger: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #fff;
  border-radius: 4px;
  padding: 24px;
  max-width: 500px;
  width: 100%;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);

  h1 {
    font-size: 22px;
    color: ${props => props.danger && props.theme.colors.danger.main};
  }

  p {
    margin-top: 8px;
  }
`;

export const Footer = styled.footer`
  margin-top: 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
`;
