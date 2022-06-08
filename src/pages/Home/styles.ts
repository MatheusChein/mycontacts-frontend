import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
`;

export const InputSearchContainer = styled.div`
  width: 100%;

  input {
    width: 100%;
    border-radius: 25px;
    height: 50px;
    background: #fff;
    border: none;
    padding: 0 16px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
    outline: 0;

    &::placeholder {
      color: ${props => props.theme.colors.gray[200]};
    }
  }
`;

interface HeaderProps {
  justifyContent: string;
}

export const Header = styled.header<HeaderProps>`
  margin-top: 32px;
  display: flex;
  justify-content: ${props => props.justifyContent};
  align-items: center;
  border-bottom: 2px solid ${props => props.theme.colors.gray[100]};
  padding-bottom: 24px;

  strong {
    font-size: 24px;
  }

  a {
    color: ${props => props.theme.colors.primary.main};
    font-weight: bold;
    text-decoration: none;
    border: 2px solid ${({ theme }) => theme.colors.primary.main};
    border-radius: 4px;
    padding: 8px 16px;
    transition: all 0.2s ease-in;

    &:hover {
      background: ${props => props.theme.colors.primary.main};
      color: #fff;
    }
  }
`;

interface ListContainerProps {
  contactsOrderBy: 'asc' | 'desc';
}

export const ListContainer = styled.div<ListContainerProps>`
  margin-top: 24px;

  header {
    margin-bottom: 12px;

    button {
      display: flex;
      align-items: center;
      gap: 8px;
      border: none;
      background: none;
      transition: 0.2s;

      &:hover {
        filter: brightness(0.8);
      }

      span {
        color: ${props => props.theme.colors.primary.main};
        font-weight: bold;
      }

      img {
        transition: transform 200ms ease-in-out;
        transform: ${props =>
          props.contactsOrderBy === 'desc'
            ? ' rotate(180deg)'
            : ' rotate(0deg)'};
      }
    }
  }
`;

export const ErrorContainer = styled.div`
  margin-top: 24px;

  display: flex;
  gap: 24px;
  align-items: center;

  > div {
    display: flex;
    flex-direction: column;
    gap: 8px;

    strong {
      font-weight: 700;
      font-size: 22px;
      color: ${props => props.theme.colors.danger.main};
    }
  }
`;

export const EmptyListContainer = styled.div`
  margin-top: 24px;

  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;

  p {
    color: ${props => props.theme.colors.gray[200]};
    text-align: center;

    strong {
      color: ${props => props.theme.colors.primary.main};
    }
  }
`;

export const SearchNotFoundContainer = styled.div`
  margin-top: 24px;

  display: flex;
  gap: 16px;
  align-items: flex-start;

  span {
    color: ${props => props.theme.colors.gray[200]};
    text-align: center;
    word-break: break-all;
  }
`;
