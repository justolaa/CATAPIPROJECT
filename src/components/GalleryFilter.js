import React from 'react'
import styled from 'styled-components'

const GalleryFilter = () => {
  return (
    <Wrapper>
         <div className="Filter-container">

          <div className="order">
             <select className="box" name="" id="">
                <option value="">Random</option>
            </select>
            <p>Order</p>
          </div>
           
           <div className="type">
             <select className="box" name="" id="">
                <option value="">Static</option>
            </select>
            <p>Type</p>
          </div>
          
          <div className="breed">
             <select className="box" name="" id="">
                <option value="">None</option>
            </select>
            <p>Breed</p>
          </div>

          <div className="Limit">
             <select className="box" name="" id="">
                <option value=""> <div>5 items per page</div></option>
            </select>
            <p>Limit</p>
          </div>

          <div className="refresh">

          </div>
          

          
          
             
         </div>

    </Wrapper>
  )
}

const Wrapper = styled('GalleryFilter')`
.Filter-container{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 13px;
    width: 640px;
    height: 156px;
    flex-shrink: 0;
    border-radius: 20px;
    background: #F8F8F7;
    margin: 20px;
    padding: 10px;

    p{width: 112px;
     color: #8C8C8C;
            font-family: jost;
            font-size: 10px;
            font-weight: 500px;
            font-style: normal;
            line-height: 18px;
            text-transform: uppercase;
        }

}

select{
    border: none;

}



.box{ 
        position: relative;
        margin-top: 20px;
        width: 290px;
        height: 40px;
        flex-shrink: 0;
        border-radius: 10px;
        background: #FFF;
        color: #1D1D1D;
        font-family: Jost;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px;
        padding: 10px;

    }
.order{
    position: relative;
    
    
    p{
            position: absolute;
            top: 0;
            
        }
}

.type{
    position: relative;
    p{
            position: absolute;
            top: 0;
           
        }
}

.breed{
    position: relative;
    margin-bottom: 28px;
    p{
            position: absolute;
            top: 0;
        }
}
.Limit{
    position: relative;

    select{
        width: 240px;
        height: 40px;
    }
    p{
            position: absolute;
            top: 0;
            
}
}
.refresh{
    width: 40px;
    height: 40px;
    flex-shrink: 0;
    border-radius: 10px;
    background: #FFF;
    margin-top: 20px;
}
`
export default GalleryFilter
