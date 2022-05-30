import styled from 'styled-components';

export const Container = styled.header`
  margin-bottom: 24px;

  a {
    width: 72px;
    margin-bottom: 8px;
    display: flex;
    align-items: center;
    gap: 8px;
    text-decoration: none;
    transition: 0.2s;

    &:hover {
      filter: brightness(0.8);
    }

    img {
      transform: rotate(-90deg);
    }

    span {
      color: ${props => props.theme.colors.primary.main};
      font-weight: bold;
    }
  }

  h1 {
    font-size: 24px;
  }
`;
