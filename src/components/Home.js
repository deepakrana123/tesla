import React from 'react';
import styled from "styled-components";
import Section from "./Section";
function Home() {
    return (
       <Container>
      
      <Section 
       title="Model S" 
       description="Order online" 
       backgroundImg="model-s.jpg"
       leftBtnText="custom"
       rightBtnText="order"
       />
       <Section 
       title="Model Y" 
       description="Order online" 
       backgroundImg="model-y.jpg"
       leftBtnText="custom"
       rightBtnText="order"
       />
       <Section 
       title="Model X" 
       description="Order online" 
       backgroundImg="model-x.jpg"
       leftBtnText="custom"
       rightBtnText="order"
       />
       <Section 
       title="Model 3" 
       description="Order online" 
       backgroundImg="model-3.jpg"
       leftBtnText="custom"
       rightBtnText="order"
       />
       <Section 
       title="Solar-panel" 
       description="Order online" 
       backgroundImg="solar-panel.jpg"
       leftBtnText="custom"
       rightBtnText="order"
       />
       <Section 
       title="Solar-Roof" 
       description="Order online" 
       backgroundImg="solar-roof.jpg"
       leftBtnText="custom"
       rightBtnText="order"
       />
       <Section 
       title="Model S" 
       description="Order online" 
       backgroundImg="new-interior.jpg"
       leftBtnText="custom"
       rightBtnText="order"
       />
       <Section 
       title="Accessories" 
       description="Order online your choice accessiores" 
       backgroundImg="accessories.jpg"
       leftBtnText="custom"
       rightBtnText="order"
       />
       
       
     
       </Container>
    )
}

export default Home;


const Container= styled.div`
height:100vh;
`
;
