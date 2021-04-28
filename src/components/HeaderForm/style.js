import styled from 'styled-components';

export const Container = styled.div`
    display: flex; 
    align-items: center; 
    align-content: center; 
    justify-content: center; 

  .header-btn {
    display: flex; 
    justify-content: space-between;
    margin-top: -200px; 
    width: 200px;
    height: 20px;
    

    button {
      background: none; 
      border: none;
      color: white;
      padding-right: 1041px;
      cursor: pointer;

      .btn-back {
        height: 55px;
        width: 30px;
        margin-left: -430px;
      }

      img {
        position: absolute;
        top: 8px;
        right: 16px;
      }
    }
  }

  .header-phrases {
    display: flex; 
    align-items: center; 
    align-content: center; 
    justify-content: center; 
    flex-direction: column;
    width: 400px; 
    height: 250px;
    margin-right: 462px;
  }

  h1 {
    font-size: 35px; 
    font-weight: bold; 
    color: #fff;
    line-height: 42px;
    font-style: normal;
    line-height: 42px;
  }

  h3 {
    margin-top: 30px;
    font-size: 15px; 
    font-weight: bold;  
    color: #D4C2FF;
    
  }

  .second-phrase {
    padding-right: 95px;
  }
`;
