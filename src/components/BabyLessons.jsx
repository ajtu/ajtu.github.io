import React, { Component } from 'react'
import { Grid, Col, Image, Button } from 'react-bootstrap';
import './Lessons.css';
import { Link } from 'react-router-dom';

export default class BabyLessons extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Col  md={6} lg={4}  smOffset={0}  >
          <div class="row text-center">

          <Image src="assets/babyandme.jpg" rounded className="profile-pic"/>
          </div>
</Col>
<Col md={5} md={4} smOffset={1} >

            <h3 className="textAlignment">Baby + Me</h3>
            <p>Come in with the little one and have a blast!</p>
            <p>The goal of this class is to create an initial gauge and understanding of the students' comfort level. We work as a class to overcome fears and get as much water exposure possible for the students.</p>
            <p>Every student is different, but consistency is always key.</p>
            <p>•Water Exploration</p>
            <p>•Sing-a-longs</p>
            <p>•Fun and Games</p>

            <p>An introductory group class for infants and toddlers age 6 months to 2.5 years. Children are accompanied into the water with a parent or guardian. The class offers an amazing opportunity for bonding with your child in a fun & stimulating environment. Classes run for <b>30 minutes</b>.
</p>
            <p>Creative games are used to teach infants breath control, arm movements, and leg kicks. Parents and children are introduced to the motions that become fundamental building blocks. Guardians are encouraged to challenge each child’s skill level. The classes are structured to help engage each child and get them as much water exposure as possible.</p>
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
