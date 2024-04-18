import LeftSection from "../components/Left-Section";
import BreedSection from '../components/BreedSection'
import Header from '../components/header'
import styled from "styled-components";
import React from 'react'

const breed = () => {
  return (
    <Wrapper>
      <div className="container">
        <LeftSection/>
        <div className="Right-Section">
          <div className="Header">
             <Header/>
          </div>
         
          <BreedSection/>
        </div>
      </div>
      </Wrapper>
  )
}

const Wrapper = styled('container')`
   .Right-Section{
    width: 680px;
    height: 850px;
    flex-shrink: 0;
    border-radius: 20px;
    background: #F8F8F7;
}

@media (max-width: 992px) {
  .Right-Section{
    margin-top: -350px;
  }
.Header{
  display: none;
}
`
export default breed
