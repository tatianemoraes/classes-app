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
export const Panel = styled.div`
  display: flex; 
  align-content: center;
  justify-content: center; 
  flex-direction: column;
  background: #fff; 
  width: 735px;
  height: 450px; 
  border-radius: 10px;
  padding: 60px;
  margin-top: -45px;
  margin-bottom: 65px;

  .profile {
    display: flex; 
    align-content: center;
    justify-content: center; 
    flex-direction: column;

    .proffy-details {
      display: flex;
      flex-direction: revert;
      width: 100%;
      margin-top: 15px;

      img {
        width: 80px;
        height: 82px;
        border-radius: 50%;
      }

      .title-design {
        margin-left: 15px;

        .proffy-name {
        font-size: 24px;
        }

        .proffy-class {
          font-weight: normal;
          font-size: 16px;
          color: #6A6180;
          margin-top: 3px;
        }
      }
    }

    .proffy-sentences {
      margin-top: 30px;
      display: flex; 
      flex-direction: column; 

      .proffy-main-phrase, 
      .proffy-more-about {
        font-size: 16px;  
        color: #6A6180;
        margin-top: 10px;
      }

      .proffy-more-about {
        margin-top: 30px; 
        margin-bottom: 40px;
      }
    }
    
    hr {
      border: 1px solid #E6E6F0;
    }
  
    .details-price {
      margin-top: 40px; 
      display: flex;
      justify-content: space-between;

      .proffy-title-price  {
      margin-top: 10px;
      font-size: 14px;
      color: #9C98A6;
      }

      .proffy-price {
        font-size: 20px;
        line-height: 26px;
        color: #8257E5;
        margin-left: -180px;
        margin-top: 5px;
      }

      .proffy-contact {
        background: #04D361;
        border-radius: 8px;
        color: #fff;
        width: 250px;
        height: 55px;
        cursor: pointer;  
        border: none;
        font-size: 18px;

        .call-img {
          margin-right: 20px;
          padding-top: 2px;
        }
      }
    }
  }
`

