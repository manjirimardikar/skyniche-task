import React from "react";
import styled from "styled-components";
import homeImage from "../assets/hero.png";

export default function Navbarpage() {
  return (
    <Section id="hero">
      <div className="background">
        <img style={{height:'100%', width:'100%'  }} src={homeImage} alt="" />
      </div>
      <div className="content">
        <div className="title">
          <h1>Let The Journey Begin</h1>
          <p>
            Get the Prices on 2,000,000+ properties, worldwide
          </p>
        </div>

        <div className="Navbarsearch">
        <ul>
          <li>
            <a href="#hotel">Hotel</a>
          </li>
          <li>
            <a href="#Tour">Tour</a>
          </li>
          <li>
            <a href="3Activity">Activity</a>
          </li>
          <li>
            <a href="#rental">Rental</a>
          </li>
          <li>
            <a href="#carrental">Car Rental</a>
          </li>
          <li>
            <a href="#cartransfer">Car Transfer</a>
          </li>
        </ul>
      
        </div>
        
        <div className="search">

        
          <div className="container">
            <label htmlFor="">Location </label>
            <input style={{color:'gray'}} type="text" placeholder="Where are you going?" />
            <select name="cars" id="cars">
            <optgroup label="United States">
  <option value="California">California</option>
  <option value="New Jersey">New Jersey</option>
  <option value="Chicago">Chicago</option>
  <option value="Los Angeles">Los Angeles</option>
  <option value="SanFrancisco">San Francisco</option>
  <option value="Nevada">Nevada</option>
  
  </optgroup>
</select>
          </div>
          <div className="container">
            <label htmlFor="">Check-in</label>
            <input type="date" />
          </div>
          <div className="container">
            <label htmlFor="">Check-out</label>
            <input type="date" />
          </div>
          <div className="container">
            <label htmlFor="">Guest</label>
            <input type="text" placeholder="1guest 1 room" />
          </div>
          <button>Search</button>
        </div>
      </div>


      
    </Section>

   
  );
}

const Section = styled.section`
  position: relative;
  
  width: 100%;
  height: 100%;

  
  
  .content {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    z-index: 3;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    .title {
      color: white;
      h1 {
        font-size: 3rem;
        letter-spacing: 0.2rem;
      }
      p {
        text-align: center;
        padding: 0 30vw;
        margin-top: 0.5rem;
        font-size: 1.2rem;
      }
    }
    .search {
      display: flex;
      background-color: white;
      padding: 0.5rem;
      border-radius: 50px;
      position: absolute;
  bottom: -30px;
      .container {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: 0 1.5rem;
        label {
          font-size: 1.1rem;
          color: #03045e;
        }
        input {
          background-color: transparent;
          border: none;
          text-align: center;
          color: gray;
          &[type="date"] {
            padding-left: 3rem;
          }

          &::placeholder {
            color: gray;
          }
          &:focus {
            outline: none;
          }
        }
      }
      button {
        padding: 1rem;
        cursor: pointer;
        border-radius:30px;
        border: none;
        color: white;
        background-color: #4361ee;
        font-size: 1.1rem;
        transition: 0.3s ease-in-out;
        &:hover {
          background-color: #023e8a;
        }
      }
    }
  }
 
  .Navbarsearch{
   
  position: absolute;
  bottom: 90px;
  }
   
  ul {
    display: flex;
    gap: 3rem;
    list-style-type: none;
    li {
      a {
        text-decoration: none;
        color: darkblue;
        font-size: 1.2rem;
        transition: 0.1s ease-in-out;
        &:hover {
          color: #023e8a;
        }
      }
      &:first-of-type {
        a {
          color: darkblue;
          font-weight: 900;
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 980px) {
    height: 25rem;
    .background {
      background-color: palegreen;
      img {
        height: 100%;
      }
    }
    .content {
      .title {
        h1 {
          font-size: 1rem;
        }
        p {
          font-size: 0.8rem;
          padding: 1vw;
        }
      }
      .search {
        flex-direction: column;
        padding: 0.8rem;
        gap: 0.8rem;
        /* padding: 0; */
        .container {
          padding: 0 0.8rem;
          input[type="date"] {
            padding-left: 1rem;
          }
        }
        button {
          padding: 1rem;
          font-size: 1rem;
        }
        /* display: none; */
      }
    }
  }
`;