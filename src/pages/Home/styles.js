import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding: 0;

  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  > header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 18px 64px;

    > h2 {
      color: ${({ theme }) => theme.COLORS.WHITE};
      font-size: 32px;
      font-weight: 400;
    }
  }
`

export const Content = styled.div`
  grid-area: content;
  padding: 0 64px;
  overflow-y: auto;

  > h2 {
    text-align: center;
    margin-top: 32px;
  }
`

export const NewMovie = styled(Link)`
  grid-area: menu;
  margin: 28px 0 14px;
  background-color: ${({ theme }) => theme.COLORS.PINK};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  display: flex;
  align-items: center;
  justify-content: center;

  width: 200px;
  height: 48px;

  border-radius: 8px;

  svg {
    margin-right: 8px;
  }
`
