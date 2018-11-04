import React from 'react';
import { StyledABBox, StyledCount, ControlsBox, Count, Circle } from './styles';

// props include AtBat object (lives in state) that contains balls, strikes, outs
// no need to keep batter or pitcher in at bat?
// when result is returned from atbat, App can update stats for pitcher and batter

const AtBatBox = (props) => {
  let strikes = [];
  let balls = [];

  for (let i = 0; i < props.strikes; i++) {
    strikes.push(<Circle filled/>);
  }

  for (let i = strikes.length; i < 3; i++) {
    strikes.push(<Circle />);
  }

  for (let i = 0; i < props.balls; i++) {
    balls.push(<Circle filled/>);
  }

  for (let i = balls.length; i < 4; i++) {
    balls.push(<Circle />);
  }

  return (
    <StyledABBox>
      <StyledCount>
        <Count strikeCount>
        {strikes}
        </Count>
        <Count>
          {balls}
          </Count>

        </StyledCount>
      <ControlsBox />
    </StyledABBox>
  )
}

export default AtBatBox;


