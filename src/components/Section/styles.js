import styled from 'styled-components'

export const Container = styled.section`
  margin: 28px 0 14px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 64px;

  > h2 {
    padding-bottom: 16px;
    margin-bottom: 24px;

    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 32px;
    font-weight: 400;
  }
`
