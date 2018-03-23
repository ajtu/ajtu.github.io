import React, { Component } from 'react'
import { Grid, Col, Image, Button } from 'react-bootstrap';
import './Lessons.css';
import { Link } from 'react-router-dom';

export default class GroupLessons extends Component {
  render() {
    return (
      <div>
        <Grid>
        <Col  md={6} lg={4}  smOffset={0}  >
        <div class="row text-center">

        <Image src="assets/group.jpeg" rounded className="profile-pic"/>
        </div>
</Col>
<Col md={5} md={4} smOffset={1} >

            <h3 className = "textAlignment">Group</h3>

            <p>One of the most standard and common type of class. The student gets the opportunity to learn from the instructor, as well as, from student examples.</p>
            <p>This class is not recommended for students that need a lot of individualized attention.</p>
          <div className="centerDiv"><p>The main principles we follow here are: </p>
           <p><b>Comfort • Technique • Strength • Endurance</b></p></div>
<p>Group lessons, our main program, is offered to all students 4 years and older. </p>
<p>Classes are either <b>30 or 40 minutes</b> with an average group size of<b> 3 students per class</b>.
</p>
<p>
Students in group classes work together to achieve a common goal, whether it be improvements on : comfort, technique, strength, or endurance </p>
<p>In a beginner group class, the common goals are achieving comfort and introducing technique.</p>
<p>In an intermediate group class, the common goals are technique, maximizing efficiency on movements, strength, and introducing endurance.</p>
<p>In an advanced group class, students should know all four strokes (butterfly, backstroke, breaststroke, freestyle), as the class mainly focuses on strength, endurance, swim drills, & timed laps.</p>
<p>After a few semesters in the advanced group class, open swim works with the client to figure out the best route for the student, whether it be a competitive swim team, water polo team, lifeguard certification, synchronized swimming, etc.</p>
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
