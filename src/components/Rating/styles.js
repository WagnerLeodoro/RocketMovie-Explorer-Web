import styled from 'styled-components'

export const Container = styled.div.attrs((props) => ({
  type: 'boolean',
  $full: props.$full,
}))`
  display: flex;
  margin: 8px 0;
  gap: ${(props) => (props.$full ? '16px' : '12px')};

  > svg {
    font-size: ${(props) => (props.$full ? '16px' : '14px')};
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`
