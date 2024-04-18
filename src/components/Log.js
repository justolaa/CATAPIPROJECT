import React from 'react'
import { useImagesContext } from '../context/context';
import styled from 'styled-components';

const Log = () => {
    const {log} = useImagesContext();
 
  return (
   <Wrapper>
          
                    {log.map((log, index)=>{
                   const {id} = log;
                return( 
                
                <div className="Log" key={index}>
                    <div className="box">
                  <div className="time"> <span className='time-text'>22:35</span></div>
                    <span className='imageid'><span>Image ID:</span> <span className='ID'>{id}</span></span> 
                          <span className="action">was added to...<span className='emoji'><svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M5.38071 1.33333C3.14541 1.33333 1.33333 3.14541 1.33333 5.38071C1.33333 6.45414 1.75975 7.48361 2.51878 8.24264L10 15.7239L17.4812 8.24264C18.2402 7.48361 18.6667 6.45414 18.6667 5.38071C18.6667 3.14541 16.8546 1.33333 14.6193 1.33333C13.5459 1.33333 12.5164 1.75975 11.7574 2.51878L10.4714 3.80474C10.2111 4.06509 9.78895 4.06509 9.5286 3.80474L8.24264 2.51878C7.48361 1.75975 6.45414 1.33333 5.38071 1.33333ZM0 5.38071C0 2.40903 2.40903 0 5.38071 0C6.80777 0 8.17637 0.566895 9.18545 1.57597L10 2.39052L10.8146 1.57597C11.8236 0.566894 13.1922 0 14.6193 0C17.591 0 20 2.40903 20 5.38071C20 6.80777 19.4331 8.17637 18.424 9.18545L10.4714 17.1381C10.2111 17.3984 9.78895 17.3984 9.5286 17.1381L1.57597 9.18545C0.566893 8.17637 0 6.80777 0 5.38071Z" fill="#FF868E"/>
</svg></span>
                          </span>
                          </div>
                </div>
                 
                )
            })}
                          
                    
    </Wrapper>
  )
}
 
const Wrapper =  styled('Log')`

.Log{
    display: flex;
    flex-direction: column;
    width: 640px;
    height: 60px;
    flex-shrink: 0;
    border-radius: 10px;
    background: #F8F8F7;
    margin-top: 14px;
    }


    .box{
      color: #8C8C8C;
      font-family: Jost;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 24px; /* 150% */
      margin-left: 30px
      margin-top:14px;
      margin-bottom:15px;
      
    }

 .time{
      width: 61px;
      height: 30px;
      flex-shrink: 0;
      border-radius: 5px;
      background: #FFF;
      padding: 3px 10px 3px 10px;
      margin-left:15px;
      
    }
    
    .time-text{
      width: 41px;
      color: #1D1D1D;
      font-family: Jost;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 24px; /* 150% */
    }
    
     .ID{
      color: #1D1D1D;
      font-family: Jost;
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: 24px;
    }

    .action{
        margin-left: 9px;
      }

    .emoji{
        width: 20px;
        height: 17.333px;
        flex-shrink: 0;
        margin: 21px 21.76px 20px 154px;
      }
`

export default Log
