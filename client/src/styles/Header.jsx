import styled from "styled-components";

export const Header = styled.div`
  background: #151525;
  height: 60px;
  padding: 5px;
  align-content: flex-start;

  h2 {
    color: white;
    font-family: sans-serif;
    font-size: 20px;
    font-weight: 600;
    padding: 5px 10px;
    text-align: start;
    margin-left: 10px;
    float: left;
  }

  .searchArea {
    background-color: white;
    float: right;
    margin-right: 50px;
    margin-top: 15px;
    padding: 2px 10px;
  }

  .searchArea input {
    border-left: 1px solid lightgray;
    border-top: none;
    border-bottom: none;
    border-right: none;
    margin: 2px auto;
    height: auto;
    padding: 3px 2px 3px 5px;
    outline: none;
  }

  .searchArea label {
    margin-right: 15px;
    color: #3d3d3d;
  }
`;
