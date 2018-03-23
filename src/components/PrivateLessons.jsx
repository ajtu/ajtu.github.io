import React, { Component } from 'react'
import { Grid, Col, Image, Button } from 'react-bootstrap';
import './Lessons.css';
import { Link } from 'react-router-dom';

export default class PrivateLessons extends Component {
  render() {
    return (
      <div>
        <Grid>
        <Col  md={6} lg={4}  smOffset={0}  >
        <div class="row text-center">

        <Image src="assets/private.jpeg" rounded className="profile-pic"/>

        </div>
</Col>
<Col md={5} md={4} smOffset={1} >

            <h3 className = "textAlignment">Private</h3>
            <p>Progress faster and better with personalized 1-on-1 lessons.</p>
            <p>For students: </p>
            <p>•with hydrophobia</p>
            <p>•with special needs.</p>
            <p>•that are trying to reach a specific goal(i.e. trying to swim their first triathlon)</p>
            <p>•that excel in a 1-on-1 environment.</p>
<p>Private Swim Lessons are offered with one instructor with one student for <b>40 minutes.</b></p>

            <br/>
            <br/>
            <br/>
<div className="ownPoolDiv">
          <Link to="/contact">
          <Button> <h3>Have your own pool?</h3></Button>
</Link>
</div>




          </Col>
        </Grid>
      </div>
    )
  }
}
