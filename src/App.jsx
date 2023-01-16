import { useState } from "react";
import "./App.css";
import styled from "styled-components";
import PasswordGen from "./components/PasswordGen";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/styles/Global";
import theme from "./components/styles/Theme";

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #2f2f32;
  min-height: 100vh;
  color: white;
  font-family: "Roboto", sans-serif;
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <StyledApp>
        <PasswordGen />
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
