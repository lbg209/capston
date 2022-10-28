import React from "react";
import styled from "styled-components";
import img1 from "../img/wevity.png";
import img2 from "../img/thinkgood.jpg";

const StyleComponent = styled.div`
  display: flex;
  padding: 1rem;
  text-align: center;

  .image-box {
    width: 150px;
    height: 150px;
    object-fit: cover;
    justify-content: center;
    align-items: center;
    img {
      margin-top: 5px;
      width: 150px;
      height: 150px;
    }
  }
`;

const Anothersite = () => {
  return (
    <StyleComponent>
      <div>
        <h5>다른 공모전 사이트</h5>
        <div className="image-box">
          <a href="https://www.wevity.com/" target="_blank" rel="noreferrer">
            <img src={img1} alt="link"></img>
          </a>
          <a
            href="https://www.thinkcontest.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={img2} alt="link"></img>
          </a>
        </div>
      </div>
    </StyleComponent>
  );
};

export default Anothersite;