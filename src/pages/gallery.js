import LeftSection from "../components/Left-Section";
import GallerySection from '../components/GallerySection'
import styled from "styled-components";
import React from 'react'

const Gallery = () => {
  
  return (
    <Wrapper>
      <div className='container'>
        <LeftSection/>
        <div className="Right-Section">
          <GallerySection/>
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

`
export default Gallery
