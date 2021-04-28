import styled from "styled-components";

export const Container = styled.div`
  display: flex; 
  align-content: center;
  align-items: center; 
  justify-content: center; 
  flex-direction: column;
  background:#F0F0F7;
  margin-top: 70px;
`
export const Form = styled.form`
  display: flex; 
  align-content: center;
  justify-content: center; 
  flex-direction: column;
  background: #fff; 
  width: 690px;
  height: 1000px; 
  border-radius: 10px;
  padding: 60px;
  margin-top: -45px;
  margin-bottom: 50px;


  span {
    font-weight: 600;
    font-size: 24px;
    float: left;
    left: 0;
    text-align: left;
    padding-top: 10px;
  }

  hr {
    border: 1px solid #E6E6F0;
  }

  label {
    font-size: 14px;
    color: #9C98A6;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  input {
    height: 180px;
    width: 100%;
    border-radius: 5px;
    border: 1.8px solid #E6E6F0;
    padding-left: 10px;
    font-size: 20px; 
    &:focus-visible {
      outline: none;
    }
  }

  .input-biography {
    height: 100%;
    padding-left: 10px;
    font-size: 20px;
    border: 1.8px solid #E6E6F0;
  }

  button {
    background: none;
    border: none; 
    cursor: pointer;
  }

  select {
    width: 150px;
    border: 1px solid #E6E6F0;
    border-radius: 4px;
    padding: 10px;
    font-size: 18px;
    cursor: pointer;
    line-height: 1.1;
    background-color: #fff;
    margin-top: 10px;
  }

  .class {
    width:100%;
  }
  .availables-hours {
    display: flex; 
    justify-content: space-between;
  }
 
  .appointment-configuration {
    display: flex; 
    justify-content: center; 
    align-items: center; 
    flex-direction: row;

    .hour1, 
    .hour2 {
      height: 45px;
      margin-top: 10px;
    }

    .hour1 {
      margin-left: 10px;
    }

    .hour2 {
      margin-left: 10px;
    }
  }
  .alignment-label{
    display:flex;
    justify-content:space-between;
  }

  .btn-save {
    background: #04D361;
    border-radius: 6px;
    color: #fff;
    width: 200px;
    height: 50px;
    margin-top: 15px;
    margin-left: 370px;
    font-size: 18px;
  }
`;