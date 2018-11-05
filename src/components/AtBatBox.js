import React from "react";
import { StyledABBox, StyledCount, ControlsBox, Count, Circle, Button } from "./styles";

// props include AtBat object (lives in state) that contains balls, strikes, outs
// no need to keep batter or pitcher in at bat?
// when result is returned from atbat, App can update stats for pitcher and batter

// got to be a cleaner way to do this! pass an array and map??
class AtBatBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      strikes: 0,
      balls: 0,
      outs: Array(props.outs).fill(<Circle filled />),
    }
    this.addOut = props.addOut.bind(this);
    console.log(this.state.outs);
  }

  addStrike = () => {
    this.setState((prevState) => {
      return { strikes: prevState.strikes + 1 }
    });
    if (this.state.strikes === 2) {
      this.addOut();
      setTimeout(this.reset, 800);
  }
  }

  addBall = () => {
    this.setState((prevState) => {
      return { balls: prevState.balls + 1 }
    });
    if (this.state.balls === 3) {
      setTimeout(this.reset, 800);
    }
  }

  reset = () => {
    this.setState({ strikes: 0, balls: 0 });
  }
  
  render() {
  let strikeDisplay = [];
  let ballDisplay = [];

  for (let i = 0; i < this.state.strikes; i++) {
    strikeDisplay.push(<Circle filled />);
  }

  for (let i = strikeDisplay.length; i < 3; i++) {
    strikeDisplay.push(<Circle />);
  }

  for (let i = 0; i < this.state.balls; i++) {
    ballDisplay.push(<Circle filled />);
  }

  for (let i = ballDisplay.length; i < 4; i++) {
    ballDisplay.push(<Circle />);
  }


  return (
    <StyledABBox>
      <StyledCount>
        <Count strikeCount>{strikeDisplay}</Count>
        <Count>{ballDisplay}</Count>
      </StyledCount>
      <ControlsBox>
        <Button onClick={this.addStrike}>Strike</Button>
        {this.state.outs}
        <Button onClick={this.addBall}>Ball</Button>
        </ControlsBox>
    </StyledABBox>
  );
};
}

export default AtBatBox;
