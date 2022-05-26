import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  border-radius: 4px;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & + & {
    margin-top: 16px;
  }

  .info {
    display: flex;
    flex-direction: column;
    gap: 4px;

    .contact-name {
      display: flex;
      align-items: center;
      gap: 8px;

      small {
        text-transform: uppercase;
        color: ${props => props.theme.colors.primary.main};
        background: ${props => props.theme.colors.primary.lighter};
        padding: 4px 8px;
        border-radius: 4px;
        font-weight: bold;
      }
    }

    span {
      font-size: 14px;
      color: ${props => props.theme.colors.gray[200]};
    }
  }

  .actions {
    display: flex;
    align-items: center;
    gap: 8px;

    button {
      border: none;
      background: none;
    }

    button,
    a {
      transition: 0.2s;
    }

    button:hover,
    a:hover {
      filter: brightness(0.8);
    }
  }
`;
