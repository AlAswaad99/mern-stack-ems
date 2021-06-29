import styled from "styled-components";

export const Styles = styled.div`
  background: lavender;
  padding: 25px 20px 0px 25px;
  margin: 0px;
  color: #3d3d3d;

  h1 {
    border-bottom: 1px solid white;
    color: #3d3d3d;
    font-family: sans-serif;
    font-size: 20px;
    font-weight: 600;
    line-height: 24px;
    padding: 10px;
    text-align: center;
  }

  form {
    background: white;
    border: 1px solid #dedede;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 0 auto;
    max-width: 350px;
    padding: 20px 20px;
  }

  input {
    border: 1px solid #d9d9d9;
    border-radius: 2px;
    box-sizing: border-box;
    margin-bottom: 1px;
    padding: 10px;
    width: 100%;
    flex: 10;
  }

  .form-group {
    margin: 5px 0px;
  }

  .Error-Info-Icon {
    flex: 1;
    padding: 15px 0px 0px 5px;
    z-index: 5;
    font-size: 10px;
  }

  .Error-Info-Icon svg {
    color: #e62727;
  }

  .name-div {
    border-radius: 4px;

    display: flex;
  }

  .gender-div {
    border-radius: 4px;
    display: flex;
  }

  .date-div {
    border-radius: 4px;
    display: flex;
  }

  .salary-div {
    border-radius: 4px;
    display: flex;
  }

  .gender-select-div {
    flex: 10;
  }

  #Gender-Select {
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    box-sizing: border-box;
    padding: 10px 10px 10px 5px;
    width: 100%;
    color: #3d3d3d;
  }

  #Gender-Placeholder {
    display: none;
  }

  .DateOfBirth-DatePicker {
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    box-sizing: border-box;
    width: 100%;
    float: left;
    flex: 10;
    color: #3d3d3d;
  }

  .searchText {
    width: 50%;
    padding: 10px;
  }

  .label-div {
    clear: right;
  }

  label {
    color: #3d3d3d;
    display: block;
    font-family: sans-serif;
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 5px;
  }

  .submitButton {
    background-color: #6976d9;
    color: white;
    font-family: "Segoe UI" "Courier New", Courier, monospace, sans-serif;
    font-size: 13px;
    width: 92%;
    height: 50px;
    margin: 10px 0px;
    border: 0px;
    align-self: center;
    cursor: pointer;
    text-transform: uppercase;
    font-weight: 600;
  }

  .clearButton {
    background-color: #e62727;
    color: white;
    font-family: sans-serif;
    font-size: 13px;
    width: 92%;
    height: 50px;
    margin: 10px 0px;
    border: 0px;
    align-self: center;
    cursor: pointer;
    text-transform: uppercase;
    font-weight: 600;
  }

  .employeesResult {
    width: 60%;
    height: 520px;
    float: left;
    margin-right: 50px;
    overflow-y: scroll;
    background-color: white;
    padding: 10px;
  }

  .employeesResult::-webkit-scrollbar {
    background-color: transparent;
    width: 10px;
  }

  .employeesResult::-webkit-scrollbar-thumb {
    background-color: lightgray;
    border-radius: 2px;
  }

  .employeesResult::-webkit-scrollbar-thumb:hover {
    background-color: darkgray;
    transition: all 5s;
  }

  .searchArea {
    margin-bottom: 50px;
  }

  .Card {
    margin: 2px 15px 2px 15px;
    width: 95%;
    background-color: whitesmoke;
    padding: 10px 5px;
    float: left;
    display: flex;
  }

  .Employee-Icon {
    font-size: 50px;
    display: inline;
    margin: auto 0px auto 5px;
    text-align: center;
    background-color: #151525;
    padding-top: 5px;

    flex: 1.5;
  }

  .Employee-Icon svg {
    color: white;
  }
  .Employee-Personal-Info {
    flex: 4.25;
    display: inline;
    margin: auto 5px auto 10px;
  }

  .Employee-Personal-Info h5,
  p {
    margin: 7px;
  }
  .Employee-Personal-Info p {
    font-size: 12px;
  }
  .Employee-Personal-Info h5 {
    text-transform: capitalize;
  }
  .Employee-Salary {
    flex: 3;
    display: inline;
    margin: auto 5px auto 0px;
    text-align: start;
    font-size: 12px;
  }
  .Card-Buttons {
    flex: 3;
    display: inline;
    margin: auto 5px auto 0px;
    text-align: justify;
  }

  .editButton {
    background-color: whitesmoke;
    color: #6976d9;
    font-size: 15px;
    width: 45%;
    height: 40px;
    border: 0px;
    margin-right: 5px;
  }

  .deleteButton {
    background-color: whitesmoke;
    color: #e62727;
    font-size: 15px;
    width: 45%;
    height: 40px;
    border: 0px;
  }

  .Card-Buttons svg {
    cursor: pointer;
  }

  .Toast-Message {
    display: flex;
  }

  .Toast-Body p {
    margin: 0px 5px;
    padding: 0;
  }
  .Toast-Action {
    margin-top: 15px;
    display: flex;
  }

  .Toastify__toast {
    position: absolute !important;
    top: 60px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    height: 100px;
  }
`;
