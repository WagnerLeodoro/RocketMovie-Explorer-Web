import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.div`
  grid-area: header;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  color: ${({ theme }) => theme.COLORS.WHITE};

  padding: 10px 64px;
  margin-bottom: 8px;
  gap: 40px;
`
export const Brand = styled(Link)`
  display: flex;
  align-items: center;

  > h1 {
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`

export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  > div {
    display: flex;
    flex-direction: column;
    text-align: right;
    min-width: 150px;
    margin-left: 16px;
    line-height: 24px;

    a {
      font-size: 14px;
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }

    strong {
      font-size: 18px;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
`

export const Avatar = styled(Link)`
  > img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
  }
`
