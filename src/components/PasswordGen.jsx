import React, { useEffect, useState } from "react";
// import handleSubmit from "../Handlers/handleSubmit";
// import handleChange from "../Handlers/handleChange";
import PasswordServices from "../Services/PasswordServices";

import {
  Container,
  Form,
  Main,
  Button,
  Span,
} from "./styles/PasswordGen.styled";

import styled from "styled-components";

export default function PasswordGen() {
  const [password, setPassword] = useState({
    generatedPassword: "",
    isNumber: false,
    isUppercase: false,
    isLowercase: false,
    isSymbol: false,
    length: 8,
  });

  const [strength, setStrength] = useState(0);

  //function to handle change on input
  function handleChange(event) {
    const { name, value, type, checked } = event.target;

    setPassword((prevValue) => {
      return {
        ...prevValue,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }
  //function to get the values which are only true
  function getPasswordObj(state) {
    let passwordObject = {};
    for (let key in state) {
      if (typeof state[key] === "boolean" && state[key]) {
        passwordObject = {
          ...passwordObject,
          [key]: state[key],
        };
      }
    }
    return passwordObject;
  }
  //function to handle submit
  function handleSubmit(event) {
    event.preventDefault();
    let passwordObj = PasswordServices(
      getPasswordObj(password),
      password.length
    );
    setPassword((prevValue) => {
      return {
        ...prevValue,
        generatedPassword: passwordObj,
      };
    });
  }
  //function to copy the password
  function copyPassword() {
    navigator.clipboard.writeText(password.generatedPassword);
  }

  //function to check the strength of the password
  function checkStrength() {
    let strength = 0;
    let testPassword = password.generatedPassword;
    if (testPassword.length >= 8) {
      strength += 1;
    }
    if (testPassword.match(/[a-z]/)) {
      strength += 1;
    }
    if (testPassword.match(/[A-Z]/)) {
      strength += 1;
    }
    if (testPassword.match(/[0-9]/)) {
      strength += 1;
    }
    if (testPassword.match(/[!@#$%^&*()_+=?.,]/)) {
      strength += 1;
    }
    return strength;
  }

  useEffect(() => {
    setStrength(checkStrength());
  }, [password.generatedPassword]);

  return (
    <Container>
      <header>
        <h1>Password Generator</h1>
      </header>
      <Main>
        <div className="password">
          <span>
            <input
              type="text"
              id="password"
              name="generatedPassword"
              disabled={true}
              value={password.generatedPassword}
              onChange={handleChange}
            />

            <button onClick={copyPassword}>Copy</button>
          </span>
        </div>

        <Form name="passwordForm" onSubmit={handleSubmit}>
          <span className="slider">
            <span className="slider-text">
              <label htmlFor="password-length">Character Length</label>
              <p className="pwd-length">{password.length}</p>
            </span>
            <input
              type="range"
              id="password-length"
              name="length"
              min="8"
              max="32"
              value={password.length}
              onChange={handleChange}
              required={true}
            />
          </span>
          <span>
            <input
              type="checkbox"
              id="uppercase"
              name="isUppercase"
              onChange={handleChange}
              checked={password.isUppercase}
            />
            <label htmlFor="uppercase">Uppercase</label>
          </span>
          <span>
            <input
              type="checkbox"
              id="lowercase"
              name="isLowercase"
              onChange={handleChange}
              checked={password.isLowercase}
            />
            <label htmlFor="lowercase">Lowercase</label>
          </span>
          <span>
            <input
              type="checkbox"
              id="numbers"
              name="isNumber"
              onChange={handleChange}
              checked={password.isNumber}
            />
            <label htmlFor="numbers">Numbers</label>
          </span>
          <span>
            <input
              type="checkbox"
              id="symbols"
              name="isSymbol"
              onChange={handleChange}
              checked={password.isSymbol}
            />
            <label htmlFor="symbols">Symbols</label>
          </span>
          <div className="strength">
            <label htmlFor="strength">Strength</label>
            <div className="strength-bar">
              <Span
                style={{
                  backgroundColor:
                    strength >= 1 && strength <= 3
                      ? "red"
                      : strength >= 4
                      ? "#A4FEAE"
                      : "transparent",
                }}
              />
              <Span
                style={{
                  backgroundColor:
                    strength >= 2 && strength <= 3
                      ? "red"
                      : strength >= 3
                      ? "#A4FEAE"
                      : "transparent",
                }}
              />
              <Span
                style={{
                  backgroundColor:
                    strength >= 3 && strength < 4
                      ? "orange"
                      : strength >= 4
                      ? "#A4FEAE"
                      : "transparent",
                }}
              />
              <Span
                style={{
                  backgroundColor: strength >= 4 ? "#A4FEAE" : "transparent",
                }}
              />
              <Span
                style={{
                  backgroundColor: strength >= 5 ? "#A4FEAE" : "transparent",
                }}
              />
            </div>
          </div>
          <Button type="submit">Generate</Button>
        </Form>
      </Main>
    </Container>
  );
}
