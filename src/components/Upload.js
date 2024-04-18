import React from 'react'
import styled from 'styled-components'

import { useImagesContext } from "../context/context"

const Upload = () => {
    const { open_modal} = useImagesContext()
  return (
   <Wrapper>
    
    <div className={`${open_modal ? 'container dim' : 'container' }`}>
     </div>
   </Wrapper>
  )
}
const Wrapper = styled('Upload')`
 
  .container{
  filter: brightness(100%);
}
.dim{
  filter: brightness(10%);
}
 `

export default Upload
