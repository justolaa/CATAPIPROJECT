import React from 'react'
import LeftSection from '../components/Left-Section';
import styled from "styled-components";

const home = () => {
  return (
    <Wrapper>
      <div className="container">
        <LeftSection/> 
        <div className="Right-Section">
          <div className="Image">
            <img src={require('../Assets/girl-and-pet 1.png')} alt="GirlandPet"/>
          </div>
        </div>
      </div>
      </Wrapper>
  )
}

const Wrapper = styled('container')`
.container{
  width: 100vw;
  height: 100vh;
}
   .Right-Section{
    width: 680px;
    height: 840px;
    border-radius: 20px;
    background: #C4C4C4;
}

.Right-Section .Image{
    width: 775px;
    flex-shrink: 0;
    background-repeat: no-repeat;
    background-size: cover;
}

@media (max-width: 992px) {
   .Right-Section{
    width: 300px;
    height: 500px;
    border-radius: 20px;
    background: #C4C4C4;
    position: absolute;
    top: 110%;

    img{
      width: 300px;
      height: 500px;
    }
}

 .Right-Section .Image{
    flex-shrink: 0;
    background-repeat: no-repeat;
    background-size: cover;
}

}

`
export default home
