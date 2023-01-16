import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  h1 {
    color: #787777;
    text-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  }
  /* border: 2px solid black; */
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  max-width: 400px;
  margin-top: 1rem;
  background-color: ${({ theme }) => theme.colors.contentbg};

  @media (max-width: 768px) {
    width: 100%;
  }
  .password {
    display: flex;
    justify-content: center;
    height: 70px;
    width: 100%;
    margin-bottom: 10px;
    position: relative;
    border-bottom: 10px solid #2f2f32;
    border-radius: 5px 5px 0 0;
    input {
      width: 100%;
      height: 100%;
      color: ${({ theme }) => theme.colors.header};
      font-size: 1.5rem;
      background-color: ${({ theme }) => theme.colors.contentbg};
      border: none;
      padding: 0 1rem;
      position: absolute;
      left: 0;
    }
    button {
      position: absolute;
      right: 0;
      height: 100%;
      width: 100px;
      border: none;
      background-color: ${({ theme }) => theme.colors.contentbg};
      color: ${({ theme }) => theme.colors.button};
      font-size: 1.2rem;
      cursor: pointer;
      &:hover {
        background-color: ${({ theme }) => theme.colors.button};
        transition: all 0.3s ease-in-out;
        color: ${({ theme }) => theme.colors.contentbg};
      }
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 1rem;
  width: 100%;
  .slider {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 1rem 0;

    .slider-text {
      display: flex;
      justify-content: space-between;
      margin: 0.7rem 0;
      label {
        margin: 0;
      }
    }
    #password-length {
      -webkit-appearance: none;
      width: 100%;
      margin: 10px 0;
      background-color: transparent;
      outline: none;
      overflow: hidden;
      border-radius: 10px;
      &::-webkit-slider-thumb {
        -webkit-appearance: none;
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background-color: ${({ theme }) => theme.colors.button};
        border: 4px solid #000000;
        cursor: pointer;
        box-shadow: -407px 0 0 400px ${({ theme }) => theme.colors.button};
      }
      &:focus::-webkit-slider-thumb {
        box-shadow: -407px 0 0 400px ${({ theme }) => theme.colors.button};
      }
      &::-webkit-slider-runnable-track {
        width: 100%;
        height: 12px;
        cursor: pointer;
        box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
        background-color: #fff;
        border-radius: 5px;
      }
      &::-moz-range-progress {
        background-color: ${({ theme }) => theme.colors.button};
      }
      &::-ms-fill-lower {
        background-color: ${({ theme }) => theme.colors.button};
      }
      &::-ms-fill-upper {
        background-color: ${({ theme }) => theme.colors.button};
      }
    }
  }

  span {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
    label {
      margin-left: 1rem;
    }
  }
  .strength {
    background-color: rgba(0, 0, 0, 0.6);
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
    color: rgba(255, 255, 255, 0.3);
    border-radius: 5px;
    box-shadow: 0 2px 10px rgba(255, 255, 255, 0.1);
    margin-bottom: 10px;

    .strength-bar {
      width: fit-content;
      height: 80%;
      display: flex;
      justify-content: center;
      gap: 5px;
    }
  }
`;
export const Span = styled.span`
  width: 10px;
  height: 100%;
  border-radius: 10px;
`;

export const Button = styled.button`
  width: 100%;
  height: 50px;
  border: none;
  background-color: ${({ theme }) => theme.colors.button};
  font-size: 1rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.bodybg};
  cursor: pointer;
  margin-bottom: 1rem;

  &:hover {
    background-color: ${({ theme }) => theme.colors.button};
    color: ${({ theme }) => theme.colors.bodybg};
  }
`;
