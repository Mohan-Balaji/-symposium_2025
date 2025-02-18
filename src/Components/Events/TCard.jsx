import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const CardWrapper = styled.div`
  position: relative;
  width: 90vw;
  max-width: 380px;
  min-height: 460px;
  border-radius: 15px;
  padding: 1.5rem;
  background: white;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  transition: 0.4s ease-out;
  box-shadow: 0px 7px 10px rgba(0, 0, 0, 0.5);
  cursor: pointer;
  overflow: hidden;

  &:hover {
    transform: translateY(10px);

    &::before {
      opacity: 1;
    }

    .info {
      opacity: 1;
      transform: translateY(0px);
    }
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 15px;
    background: rgba(0, 0, 0, 0.6);
    z-index: 2;
    transition: 0.5s;
    opacity: 0;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 15px;
  }

  .info {
    position: absolute;
    bottom: 20px;
    left: 20px;
    text-align: left;
    z-index: 3;
    color: white;
    opacity: 0;
    transition: 0.5s;
    width: auto;

    h1 {
      margin: 0;
      font-size: 1.5rem;
    }

    p {
      letter-spacing: 1px;
      font-size: 14px;
      margin-top: 8px;
    }

    button {
      padding: 0.6rem;
      outline: none;
      border: none;
      border-radius: 5px;
      background: white;
      color: black;
      font-weight: bold;
      cursor: pointer;
      transition: 0.4s ease;
      width: auto;

      &:hover {
        background: dodgerblue;
        color: white;
      }
    }
  }

  /* Mobile Styles */
  @media (max-width: 480px) {
    min-height: 400px;
    padding: 1rem;

    .info {
      bottom: 15px;
      left: 15px;
    }

    .info h1 {
      font-size: 1.2rem;
    }

    .info p {
      font-size: 13px;
    }

    .info button {
      font-size: 14px;
      padding: 0.5rem;
    }
  }
`;

const TCard = ({ img, title, description,url }) => {
  return (
    <CardWrapper>
      <img src={img} alt={title} />
      <div className="info">
        <h1>{title}</h1>
        <p>{description}</p>
        <Link to={url}>
          <button>Know More</button>
        </Link>
      </div>
    </CardWrapper>
  );
};

export default TCard;
