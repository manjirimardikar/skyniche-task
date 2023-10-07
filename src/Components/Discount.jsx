import discountImage from"../assets/discount.jpg";
import styled from "styled-components";
import ExploreImage from "../assets/explore.jpg";

export default function Discount() {
    return (
        <Section>
<div className="image">
        <img style={{height:'30%', width:'30%'  }} src={discountImage} alt="" />

        <img style={{height:'10%', width:'21%', paddingLeft:'1rem' }} src={ExploreImage} alt="" />
      </div>
      </Section>

    );
}


const Section = styled.section`
    
position: relative;
margin-top: 8rem;
width: 100%;
height: 100%;


`;