import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  margin-bottom: 32px;

  display: flex;
  flex-direction: column;

  > a {
    display: flex;
    align-items: center;
    padding: 28px 64px 0;

    gap: 8px;
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  > main {
    padding: 28px 64px 0;
    grid-area: content;
    overflow-y: auto;

    h2 {
      font-size: 36px;
    }

    header {
      display: flex;
      align-items: center;
      gap: 24px;
      margin-bottom: 16px;
    }

    .description {
      text-align: justify;
    }
  }
`

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  margin-bottom: 32px;

  > img {
    width: 16px;
    height: 16px;
    border-radius: 50%;
  }

  .timer {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  svg {
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`

export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 16px;
  gap: 24px;
  margin-bottom: 36px;
`
