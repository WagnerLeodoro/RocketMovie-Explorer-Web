import styled from "styled-components"

export const Container = styled.span`
  display: flex;
  align-items: center;
  font-size: 14px;
  height: 32px;
  padding: 5px 14px;
  border-radius: 5px;
  margin-right: 6px;
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  background-color: ${({ theme }) => theme.COLORS.WINE};
`
