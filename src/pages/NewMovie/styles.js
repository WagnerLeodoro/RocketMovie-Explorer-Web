import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  margin-bottom: 32px;

  display: grid;
  grid-template-rows: auto auto 1fr;
  grid-template-areas:
    "header"
    "back"
    "content";

  > button {
    grid-area: back;
    display: flex;
    align-items: center;
    padding: 28px 64px 0;

    gap: 8px;
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  > main {
    grid-area: content;
    overflow-y: auto;
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 16px;
    gap: 24px;

    border-radius: 8px;
  }
`

export const Content = styled.div`
  margin: 28px 0 14px;
  display: flex;
  flex-direction: column;
  padding: 0 64px;
`

export const Form = styled.form`
  width: 100%;
  margin: 28px 0 14px;

  display: flex;
  flex-direction: column;
  padding: 0 64px;

  > h2 {
    padding-bottom: 16px;
    margin-bottom: 24px;

    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 32px;
    font-weight: 400;
  }

  .form-group {
    width: 100%;
    display: flex;
    justify-content: space-between;

    gap: 40px;
  }
`

export const Controls = styled.div`
  display: flex;
  margin: 0 64px;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
`
