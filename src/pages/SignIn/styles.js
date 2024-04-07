import styled from 'styled-components'
import backgroundImg from '../../assets/backgroundImg.png'

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`

export const Form = styled.form`
  padding: 0 136px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  > h1 {
    font-size: 48px;
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  > h2 {
    font-size: 24px;
    margin: 48px 0;
  }

  > p {
    font-size: 14px;
    text-align: left;
    color: ${({ theme }) => theme.COLORS_GRAY_300};
  }

  > a {
    margin-top: 24px;
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
`
