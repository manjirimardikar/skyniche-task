import React, { useState } from "react";
import styled from "styled-components";
import Destination1 from "../assets/Destination1.png";
import Destination2 from "../assets/Destination2.png";
import Destination3 from "../assets/Destination3.png";
import Destination4 from "../assets/Destination4.png";
import Destination5 from "../assets/Destination5.png";
import Destination6 from "../assets/Destination6.png";


export default function Recommend() {
  const data = [
    {
      image: Destination1,
      title: "California",
      Hotels: "10 Hotels ",
      Tour: "22 Tours",
      Cars: "40 Cars",
    },
    {
      image: Destination2,
      title: "Chicago",
      Hotels: "14 Hotels",
      Tour: "10 Tours",
      Cars: "20 Cars",
    },
    {
      image: Destination3,
      title: "New Jersey",
      Hotels: "20 Hotels",
      Tour: "12 Tours",
      Cars: "12 Cars",
    },
    {
      image: Destination4,
      title: "LosAngeles",
      Hotels: "16 Hotels",
      Tour: "15 Tours",
      Cars: "19 Cars",
    },
    {
      image: Destination5,
      title: "San Francisco",
      Hotels: "10 Hotels",
      Tour: "19 Tours",
      Cars: "25 Cars",
    },
    {
      image: Destination6,
      title: "nevada",
      Hotels: "18 Hotels",
      Tour: "8 Tours",
      Cars: "20 Cars",
    },
  ];

  
  return (
    <Section id="recommend">
     
      <div className="destinations">
        {data.map((destination) => {
          return (
            <div className="destination">
              <img src={destination.image} alt="" />
              <h3>{destination.title}</h3>
              <p>{destination.Hotels}</p>
              <div className="info">
                
                <h4>{destination.Tour}</h4>
              </div>
              <div className="distance">
                <span>10 Rentals</span>
                <span>{destination.Cars}</span>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

const Section = styled.section`
  padding: 2rem 0;
  .title {
    text-align: center;
  }
  
  .destinations {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
    padding: 0 3rem;
    .destination {
      padding: 1rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      background-color: #8338ec14;
      border-radius: 1rem;
      transition: 0.3s ease-in-out;
      &:hover {
        transform: translateX(0.4rem) translateY(-1rem);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
      img {
        width: 100%;
      }
      .info {
        display: flex;
        align-items: center;
        .services {
          display: flex;
          gap: 0.3rem;
          img {
            border-radius: 1rem;
            background-color: #4d2ddb84;
            width: 2rem;
            /* padding: 1rem; */
            padding: 0.3rem 0.4rem;
          }
        }
        display: flex;
        justify-content: space-between;
      }
      .distance {
        display: flex;
        justify-content: space-between;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 768px) {
    
    .destinations {
      grid-template-columns: 1fr;
      padding: 0;
    }
  }
`;