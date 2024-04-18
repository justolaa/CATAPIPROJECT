import React,{useEffect, useState} from 'react'
import styled from 'styled-components'
import { useImagesContext } from '../context/context';
import Loading from "./Loading";
import { limiturl as url } from '../utils/constants';
import { Link } from 'react-router-dom';

const BreedSection = () => {
  const {limit_image_loading, limit_image, LimitImages, updateSort } = useImagesContext()
   const [id, setId] = useState('10')

useEffect(() => {
      LimitImages(`${url}${id}&api_key=live_pOFPJfzT1D9jF6kJJ9hHDpSamT47dwUErbeIyDIzJgKQYAHq31JVVhyTWluoXfX6`)
  }, [id])

   const GetLimit = (e) => {
    setId(e.target.value)
  }

   

  return (
     <Wrapper>
        <div className="breed-container">
            <div className="icon">
       <Link to='/Voting'> <div className="back-icon">
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
            </div> 
            </Link>
            <div className="breed-icon"><p>BREED</p></div>
                  <div className="breeds">
                    <select className="options">
                      <option value="All breeds">All breeds</option>
                      <option value="breeds">{}</option>
                    </select>
                  </div>
                  <div onClick={GetLimit} className="Limit">
                    <select  className='limit-options'>
                      <option value="1">Limit:1</option>
                      <option value="2"> Limit:2</option>
                      <option value="3">Limit:3</option>
                      <option value="4"> Limit:4</option>
                      <option value="5">Limit:5</option>
                      <option value="6"> Limit:6</option>
                      <option value="7">Limit:7</option>
                      <option value="8"> Limit:8</option>
                      <option value="9">Limit:9</option>
                      <option value="10" selected> Limit:10</option>
                      </select>
                      <div className="limit-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
  <g clip-path="url(#clip0_1_153)">
    <path d="M6.59406 9.17417L11.7538 4.01436C12.0821 3.68616 12.0821 3.15395 11.7538 2.82587C11.4256 2.4978 10.8935 2.4978 10.5655 2.82587L5.99993 7.39154L1.43458 2.82606C1.10635 2.49792 0.574264 2.49792 0.24617 2.82606C-0.0820567 3.15414 -0.0820567 3.68628 0.24617 4.01447L5.40591 9.17431C5.57003 9.33836 5.78492 9.42029 5.9999 9.42029C6.21498 9.42029 6.43002 9.3382 6.59406 9.17417Z" fill="#8C8C8C"/>
  </g>
  <defs>
    <clipPath id="clip0_1_153">
      <rect width="12" height="12" fill="white" transform="matrix(0 -1 1 0 0 12)"/>
    </clipPath>
  </defs>
</svg>
                      </div>
                  </div>
                  <div data-value="ascending" onClick={() => updateSort('ascending')} className="ascending">
<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
  <rect width="40" height="40" rx="10" fill="#F8F8F7"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M15 9.21284C15.2603 8.92905 15.6825 8.92905 15.9428 9.21284L19.9428 13.5728L19 14.6005L16.1381 11.481V30.8H14.8047V11.481L11.9428 14.6005L11 13.5728L15 9.21284ZM26.1381 10.4533C25.0335 10.4533 24.1381 11.4294 24.1381 12.6333V14.8133H28.1381V12.6333C28.1381 11.4294 27.2426 10.4533 26.1381 10.4533ZM28.1381 16.2667V19.1733H29.4714V12.6333C29.4714 10.6267 27.979 9 26.1381 9C24.2971 9 22.8047 10.6267 22.8047 12.6333V19.1733H24.1381V16.2667H28.1381ZM22.8047 20.6267H26.8047C28.2775 20.6267 29.4714 21.928 29.4714 23.5333C29.4714 24.4015 29.1222 25.1807 28.5686 25.7133C29.1222 26.2459 29.4714 27.0252 29.4714 27.8933C29.4714 29.4986 28.2775 30.8 26.8047 30.8H22.8047V20.6267ZM26.8047 24.9867C27.5411 24.9867 28.1381 24.336 28.1381 23.5333C28.1381 22.7307 27.5411 22.08 26.8047 22.08H24.1381V24.9867H26.8047ZM24.1381 26.44H26.8047C27.5411 26.44 28.1381 27.0907 28.1381 27.8933C28.1381 28.696 27.5411 29.3467 26.8047 29.3467H24.1381V26.44Z" fill="#8C8C8C"/>
</svg>
                  </div>
                  <div data-value="descending" onClick={() => updateSort('descending')}  className="decending">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
  <rect width="40" height="40" rx="10" fill="#F8F8F7"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M14.8047 29.319V10H16.1381V29.319L19 26.1995L19.9428 27.2272L15.9428 31.5872C15.8178 31.7234 15.6482 31.8 15.4714 31.8C15.2946 31.8 15.125 31.7234 15 31.5872L11 27.2272L11.9428 26.1995L14.8047 29.319ZM26.1381 11.4533C25.0335 11.4533 24.1381 12.4294 24.1381 13.6333V15.8133H28.1381V13.6333C28.1381 12.4294 27.2426 11.4533 26.1381 11.4533ZM28.1381 17.2667V20.1733H29.4714V13.6333C29.4714 11.6267 27.979 10 26.1381 10C24.2971 10 22.8047 11.6267 22.8047 13.6333V20.1733H24.1381V17.2667H28.1381ZM22.8047 21.6267H26.8047C28.2775 21.6267 29.4714 22.928 29.4714 24.5333C29.4714 25.4015 29.1222 26.1807 28.5686 26.7133C29.1222 27.2459 29.4714 28.0252 29.4714 28.8933C29.4714 30.4986 28.2775 31.8 26.8047 31.8H22.8047V21.6267ZM26.8047 25.9867C27.5411 25.9867 28.1381 25.336 28.1381 24.5333C28.1381 23.7307 27.5411 23.08 26.8047 23.08H24.1381V25.9867H26.8047ZM24.1381 27.44H26.8047C27.5411 27.44 28.1381 28.0907 28.1381 28.8933C28.1381 29.696 27.5411 30.3467 26.8047 30.3467H24.1381V27.44Z" fill="#8C8C8C"/>
</svg>
                  </div>
            </div>
                    {limit_image_loading && <Loading/>}
                    <div className="CatImages-Grid">
                      {limit_image.map((image)=>{
                        const {id, url} = image
                               return(
                                <div key={id} className="img">
                                      <img width='200px' src={url} alt="cat" />
                                </div>
                               )
                      })}
                    </div>
            </div>
      </Wrapper>
  )
}
const Wrapper = styled('BreedSection')`
   .breed-container{
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
     }


   .back-icon{
        width: 40px;
        height: 40px;
        flex-shrink: 0;
        background:#FBE0DC;
        border-radius: 10px;
        padding: 10px;
        margin-left: 20px;
   }

  .breed-icon{
        width: 146px;
        height: 40px;
        flex-shrink: 0;
        border-radius: 10px;
        background: #FF868E;
        margin-left: 10px;
  }

  .breed-icon > p{
        color: #FFF;
        text-align: center;
        font-family: Jost;
        font-size: 20px;
        font-style: normal;
        font-weight: 500;
        line-height: 40px; /* 150% */
        letter-spacing: 2px;
  }
      .breeds > select{
        outline: none;
        border: none;
        width: 226px;
        height: 40px;
        flex-shrink: 0;
        border-radius: 10px;
        background: #F8F8F7;
        margin-left: 10px;
      }

      .options{
        color: #8C8C8C;
        font-family: Jost;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px; /* 150% */
      }

      .Limit{
        position: relative;
        width: 101px;
        height: 40px;
        flex-shrink: 0;
        border-radius: 10px;
        background: #F8F8F7;
        margin-left: 10px;
      }

 .Limit > select{
        width: 90px;
        appearance: none;
        -webkit-appearance: none;
        color: #8C8C8C;
        background: #F8F8F7;
        font-family: Jost;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px; /* 150% */
        outline: none;
        border: none;
        margin: 8px 32px 8px 10px;
 }

      .limit-icon {
            position: absolute;
            bottom: 10px;
            pointer-events: none;
            right:  0px;
      }

      .ascending{
        width: 40px;
        height: 40px;
        flex-shrink: 0;
        margin-left: 10px;
      }

      .decending{
        width: 40px;
        height: 40px;
        flex-shrink: 0;
        margin-left: 10px;
      }

      .CatImages-Grid{
        display:grid;
        grid-template-columns:repeat(3, minmax(200px, 1fr));
        margin: auto;
        gap: 10px;
        margin-top: 15px;
      }

      img{
         border-radius: 15px;
      }
     
  `

export default BreedSection
