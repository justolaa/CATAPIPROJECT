import React from 'react'
import styled from 'styled-components';
import { useImagesContext } from '../context/context';
import Loading from './Loading';
import GalleryFilter from './GalleryFilter';
import Header from '../components/header'
import Upload from './Upload';
import { Link } from 'react-router-dom';


const GallerySection = () => {
 const {images_loading, openmodal, open_modal} = useImagesContext()

  return (
     <Wrapper>
      {open_modal && <Upload/>}
      <div className={`${open_modal ? 'main hide' : 'main' }`}>

      <Header/>
        <div className='gallery-container' >
          
            <div className="icon">
              <Link to='/Breeds'  >
        <div className="back-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <g clip-path="url(#clip0_1_85)">
                    <path d="M4.70999 10.9901L13.3097 19.5896C13.8567 20.1369 14.7437 20.1369 15.2905 19.5896C15.8373 19.0427 15.8373 18.1558 15.2905 17.6091L7.68104 9.99988L15.2902 2.39096C15.8371 1.84391 15.8371 0.957107 15.2902 0.410284C14.7434 -0.136761 13.8565 -0.136761 13.3095 0.410284L4.70977 9.00985C4.43635 9.28339 4.2998 9.64153 4.2998 9.99983C4.2998 10.3583 4.43662 10.7167 4.70999 10.9901Z" fill="#FF868E"/>
                </g>
                <defs>
                    <clipPath id="clip0_1_85">
                    <rect width="20" height="20" fill="white"/>
                    </clipPath>
                </defs>
                </svg>
            </div> </Link>
                        <div className="gallery-icon"><p>GALLERY</p></div>
                                  <div onClick={()=> openmodal()} className="upload">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.86601 0L12.2355 4.03339L11.4129 4.92452L8.48919 2.22567V12.3618H7.27645V2.30464L4.67336 4.90772L3.81583 4.05019L7.86601 0ZM1.21274 14.7873V7.51081H0V16H15.7656V7.51081H14.5529V14.7873H1.21274Z" fill="#FF868E"/>
              </svg> <p>UPLOAD</p>
                        </div>
        
      </div>
         <GalleryFilter/>
                    {images_loading && <Loading/>}
                    <div className="CatImages-Grid"></div>
        </div>
     
            </div>
      </Wrapper>
  )
}
const Wrapper = styled('GallerySection')`
   .gallery-container{
        display: flex;
        flex-direction: column;
        width: 680px;
        height: 782px;
        flex-shrink: 0;
        border-radius: 20px;
        background: #FFF;
        
   }

     .icon{
        display: flex;
        flex-direction: row;
        margin-top: 20px;
        margin-left: 20px;
     }


   .back-icon{
        width: 40px;
        height: 40px;
        flex-shrink: 0;
        background:#FBE0DC;
        border-radius: 10px;
        padding: 10px;
       
   }

  .gallery-icon{
        width: 146px;
        height: 40px;
        flex-shrink: 0;
        border-radius: 10px;
        background: #FF868E;
        margin-left: 10px;
  }

  .gallery-icon > p{
        color: #FFF;
        text-align: center;
        font-family: Jost;
        font-size: 20px;
        font-style: normal;
        font-weight: 500;
        line-height: 40px; /* 150% */
        letter-spacing: 2px;
  }
      .gallery > select{
        outline: none;
        border: none;
        width: 226px;
        height: 40px;
        flex-shrink: 0;
        border-radius: 10px;
        background: #F8F8F7;
        margin-left: 10px;
      }

      .upload{
          display: flex;
          flex-direction: row;
          gap: 10.23px;
          align-items: center;
          justify-content: center;
          width: 143px;
          height: 40px;
          flex-shrink: 0;
          border-radius: 10px;
          background: #FBE0DC;
          margin-left: 292.5px;
             p{
           width: 57px;
            color: #FF868E;
            text-align: center;
            font-family: Jost;
            font-size: 12px;
            font-style: normal;
            font-weight: 500;
            line-height: 16px; /* 133.333% */
            letter-spacing: 2px;
      }
      }

      .hide{
        display: none;
      }

   
  `

export default GallerySection
