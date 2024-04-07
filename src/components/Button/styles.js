import styled from 'styled-components'

export const Container = styled.button.attrs((props) => ({
  type: 'boolean',
  $save: props.$save,
}))`
  width: 100%;
  color: ${({ theme }) => theme.COLORS.PINK};

  height: 56px;
  border: 0;
  padding: 0 16px;
  margin-top: 10px;
  border-radius: 10px;
  font-weight: 500;

  &:disabled {
    opacity: 0.5;
  }

  background-color: ${({ theme, $save }) =>
    $save ? theme.COLORS.PINK : theme.COLORS.BACKGROUND_900};
  color: ${({ theme, $save }) =>
    $save ? theme.COLORS.BACKGROUND_600 : theme.COLORS.PINK};
`
