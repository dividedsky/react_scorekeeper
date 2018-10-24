import React from 'react';
import { StyledABBox, StyledCount, ControlsBox } from './styles';

// props include AtBat object (lives in state) that contains balls, strikes, outs
// no need to keep batter or pitcher in at bat?
// when result is returned from atbat, App can update stats for pitcher and batter

const AtBatBox = (props) => {
  return (
    <StyledABBox>
      <StyledCount />
      <ControlsBox />
    </StyledABBox>
  )
}

export default AtBatBox;


