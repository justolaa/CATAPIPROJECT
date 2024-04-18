import React from 'react'
import styled  from 'styled-components';
import { useImagesContext } from '../context/context';

const Header = () => {
  const {limit_image_loading, limit_image, updateFilters, filters:{ 
      text
  } } = useImagesContext()
  return (
    <Wrapper>
        <div className="Top-bar">
            <form onSubmit={(e)=> e.preventDefault()} className="input-btn">
                    <input name='text' type="text" placeholder='search for breeds by name' className='search-bar' value={text} 
          onChange={updateFilters}/><button className='search-btn'><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <g clip-path="url(#clip0_1_53)">
    <path d="M19.3608 18.2168L14.6007 13.2662C15.8246 11.8113 16.4952 9.98069 16.4952 8.07499C16.4952 3.62251 12.8727 0 8.42021 0C3.96773 0 0.345215 3.62251 0.345215 8.07499C0.345215 12.5275 3.96773 16.15 8.42021 16.15C10.0917 16.15 11.6846 15.6458 13.0465 14.6888L17.8427 19.677C18.0431 19.8852 18.3128 20 18.6017 20C18.8752 20 19.1347 19.8957 19.3316 19.7061C19.7501 19.3034 19.7635 18.6357 19.3608 18.2168ZM8.42021 2.10652C11.7113 2.10652 14.3887 4.78391 14.3887 8.07499C14.3887 11.3661 11.7113 14.0435 8.42021 14.0435C5.12912 14.0435 2.45173 11.3661 2.45173 8.07499C2.45173 4.78391 5.12912 2.10652 8.42021 2.10652Z" fill="#FF868E"/>
  </g>
  <defs>
    <clipPath id="clip0_1_53">
      <rect width="20" height="20" fill="white"/>
    </clipPath>
  </defs>
</svg></button> 
            </form>
            
            <div className="icons">
                <div className="like">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M0 15C0 6.71573 6.71573 0 15 0C23.2843 0 30 6.71573 30 15C30 23.2843 23.2843 30 15 30C6.71573 30 0 23.2843 0 15ZM15 2C7.8203 2 2 7.8203 2 15C2 22.1797 7.8203 28 15 28C22.1797 28 28 22.1797 28 15C28 7.8203 22.1797 2 15 2ZM10 12H8V10H10V12ZM22 12H20V10H22V12ZM9.2 16.6L9.8 17.4C12.4 20.8667 17.6 20.8667 20.2 17.4L20.8 16.6L22.4 17.8L21.8 18.6C18.4 23.1333 11.6 23.1333 8.2 18.6L7.6 17.8L9.2 16.6Z" fill="#FF868E"/>
</svg>
                </div>
                <div className="favourite">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="26" viewBox="0 0 30 26" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M8.07107 2C4.71811 2 2 4.71811 2 8.07107C2 9.68122 2.63963 11.2254 3.77817 12.364L15 23.5858L26.2218 12.364C27.3604 11.2254 28 9.68121 28 8.07107C28 4.71811 25.2819 2 21.9289 2C20.3188 2 18.7746 2.63963 17.636 3.77817L15.7071 5.70711C15.3166 6.09763 14.6834 6.09763 14.2929 5.70711L12.364 3.77818C11.2254 2.63963 9.68121 2 8.07107 2ZM0 8.07107C0 3.61354 3.61354 0 8.07107 0C10.2116 0 12.2646 0.850343 13.7782 2.36396L15 3.58579L16.2218 2.36396C17.7354 0.850341 19.7884 0 21.9289 0C26.3865 0 30 3.61354 30 8.07107C30 10.2116 29.1497 12.2646 27.636 13.7782L15.7071 25.7071C15.3166 26.0976 14.6834 26.0976 14.2929 25.7071L2.36396 13.7782C0.850339 12.2646 0 10.2116 0 8.07107Z" fill="#FF868E"/>
</svg>
                </div>
                <div className="dislike">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M0 15C0 6.71573 6.71573 0 15 0C23.2843 0 30 6.71573 30 15C30 23.2843 23.2843 30 15 30C6.71573 30 0 23.2843 0 15ZM15 2C7.8203 2 2 7.8203 2 15C2 22.1797 7.8203 28 15 28C22.1797 28 28 22.1797 28 15C28 7.8203 22.1797 2 15 2ZM10 12H8V10H10V12ZM22 12H20V10H22V12ZM7.6 20.2L8.2 19.4C11.6 14.8667 18.4 14.8667 21.8 19.4L22.4 20.2L20.8 21.4L20.2 20.6C17.6 17.1333 12.4 17.1333 9.8 20.6L9.2 21.4L7.6 20.2Z" fill="#FF868E"/>
</svg>
                </div>
            </div>
        </div>
   </Wrapper>
  )
}

const Wrapper = styled('header')`

.Top-bar{
    position: relative;
    display: flex;
    flex-direction: row;
    margin-top: 30px;
    margin-bottom: 10px;
}

.search-bar{
    width: 470px;
    height: 60px;
    flex-shrink: 0;
    border-radius: 20px;
    background: #FFF;
    padding-top: 15px
    padding-bottom: 15px;
    padding-left: 20px;
    color: #8C8C8C;
    font-family: Jost;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 30px; /* 150% */
}

.icons{
    display: inline-flex;
}

.icons .like{
    width: 60px;
    height: 60px;
    flex-shrink: 0;
    border-radius: 20px;
    background: #FFF;
    padding: 15px;
    margin-left: 10px
    
}

.icons .favourite{
    width: 60px;
    height: 60px;
    flex-shrink: 0;
    border-radius: 20px;
    background: #FFF;
    padding: 15px;
    margin-left: 10px
}

.icons .dislike{
    width: 60px;
    height: 60px;
    flex-shrink: 0;
    border-radius: 20px;
    background: #FFF;
    padding: 15px;
    margin-left: 10px
}
.input-btn > input{
    border:0;
}
.input-btn > button{
    position: absolute;
    left:0;
    border: none;
}

.search-btn{
    width: 40px;
    height: 40px;
    flex-shrink: 0;
    border-radius: 10px;
    background: #FBE0DC;
    margin: 10px 10px 10px 420px;
}

`
export default Header
