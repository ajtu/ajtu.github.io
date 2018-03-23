import React, { Component } from 'react'
import { Grid, Col, Image, Button } from 'react-bootstrap';
import './Lottery.css';
import { Link } from 'react-router-dom';


export default class Lottery extends Component {
  render() {
    return (
      <div className="mainDiv">
        <Grid>
          <Col xs={12} sm={8} smOffset={2}>
            <h1>Trial Lesson</h1>
            <h4><Image src="assets/icons8-clock-64.png"/>$40 for 30 minutes.</h4>
            <h4> <Image src="assets/icons8-detective-64.png"/>Assessment After Lesson</h4>
            <h4><Image src="assets/icons8-class-48.png"/>      Strong Points & Weak Points</h4>
            <h4><Image src="assets/icons8-swimming-40.png"/>    How to Improve Outside of Class</h4>
            <Link to="/contact">
              <Button className="lottery-button"><p>Register Now!</p></Button>
            </Link>

   </Col>
        </Grid>
      </div>
    )
  }
}
