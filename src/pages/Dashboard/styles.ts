import styled from 'styled-components';
import media from 'styled-media-query';
import {lighten} from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;

export const ListUsers = styled.div`
  max-width: 980px;

  h1{
    font-size: 48px;
    color: #777;
    margin-top: 60px;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #053f5e;
    width: 100%;
    padding: 40px 60px;
    text-decoration: none;
    border-radius: 4px;
    transition-duration: 0.5s;

    &:hover {
      transform: translateX(10px);
      background: ${lighten(0.1, '#053f5e')};
    }

    & + a {
      margin-top: 12px;
    }

    span {
      padding: 2px 14px;
      background: #f0f0f5;
      border-radius: 22%;
      font-size: 32px;
      color: #053f5e;
      font-weight: bold;
    }

    div {
      margin-left: 16px;
      display: flex;
      flex-direction: column;

      strong {
        font-size: 20px;
        color: #ffd700;
      }

      p {
        font-size: 16px;
        font-weight: 300;
        color: #f0f0f5;
      }
    }

    svg {
      color: #cbcbd6;
    }
  }

  ${media.lessThan('large')`
    a {
      div {
        strong {
          font-size: 17px;
        }
        p {
          font-size: 13px;
        }
      }
    }
  `}
`;
