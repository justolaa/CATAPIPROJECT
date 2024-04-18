import React from 'react'
import LeftSection from '../components/Left-Section';
import  styled  from 'styled-components';
import Header from '../components/header';
import VotingSection from '../components/voting-section';

const Voting = () => {
  return (
    <Wrapper>
      <div className="container">
        <LeftSection/>
        <div className="Right-Section">
          <div className="Header">
              <Header/>
          </div>
          <VotingSection/>
        </div>
      </div>
      </Wrapper>
  )
}

const Wrapper = styled('container')`
   .Right-Section{
    width: 680px;
    height: 840px;
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
}


`



export default Voting
