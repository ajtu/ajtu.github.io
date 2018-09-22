import React, { Component } from 'react'
import { Grid, Col, Image, Button,FormGroup,ControlLabel, FormControl, HelpBlock, Table } from 'react-bootstrap';
import './Lessons.css';
import { Link } from 'react-router-dom';
import firebase from './firebase.js';

export default class GroupLessons extends Component {


handleChange(e){
this.setState({
    [e.target.name]: e.target.value
  });


}

handleSubmit(e) {

  e.preventDefault();

  if(this.state.phoneNumber == '' && this.state.email == ''){
  return;
  }

  const itemsRef = firebase.database().ref('group');
  const item = {
    name: this.state.name,
    email:this.state.email,
    phoneNumber:this.state.phoneNumber,
    referral:this.state.referral,
    experience:this.state.experience
  }
  itemsRef.push(item);
  this.setState({
    name: '',
    email:'',
    phoneNumber:'',
    referral:'',
    experience:'',
    messageSent:true
  });


  console.log(this.state.name);
  console.log(this.state.email);
  console.log(this.state.phoneNumber);
}

constructor() {
  super();
  this.state = {
  name: '',
  email:'',
  phoneNumber:'',
  referral:'',
  experience:'',
  messageSent:false
  }
  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);

  }

  componentDidMount(){
  console.log(this.state.name);
  }
  render() {
    return (
      <div>
        <Grid>
        <Col  md={6} lg={4}  smOffset={0}  >
        <div class="row text-center">

        <Image src="assets/group.jpg" rounded className="profile-pic" responsive/>
        </div>

        <br/>
        <Table striped bordered condensed hover>
<thead>
  <tr>
    <th>Time</th>
    <th>30 minutes</th>
    <th>40 minutes</th>
    <th>60 minutes</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>per student</td>
    <td>$30</td>
    <td>$40</td>
    <td>$60</td>
  </tr>
  <tr>

  <td>2</td>
  <td>$60</td>
  <td>$80</td>
  <td>$120</td>
  </tr>

  <tr>

  <td>3</td>
  <td>$90</td>
  <td>$120</td>
  <td>$180</td>
  </tr>

  <tr>

  <td>4</td>
  <td>$120</td>
  <td>$160</td>
  <td>$240</td>
  </tr>
</tbody>
</Table>
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

<h5>Beginner</h5>
<p>In a beginner group class, the common goals are achieving comfort and introducing technique.</p>
<h5>Intermediate</h5>
<p>In an intermediate group class, the common goals are technique, maximizing efficiency on movements, strength, and introducing endurance.</p>
<h5>Advanced</h5>
<p>In an advanced group class, students should know all four strokes (butterfly, backstroke, breaststroke, freestyle), as the class mainly focuses on strength, endurance, swim drills, & timed laps.</p>
<h5>What Comes After</h5>
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
<br/>

                <h4>Please give us a call at 917-268-4888.</h4>




        <br/>


                    <form onSubmit={this.handleSubmit}>
                      <FormGroup
                        controlId="formBasicText"
                      >
                        <ControlLabel>Contact Info</ControlLabel>
                        <FormControl
                          type="text"
                          placeholder="Enter Name"
                          onChange={this.handleChange}
                          value={this.state.name}
                          name="name"

                        />

                        <FormControl
                          type="email"
                          placeholder="Email"
                          onChange={this.handleChange}
                          value={this.state.email}
                          name="email"


                        />



                        <FormControl
                          type="number"
                          placeholder="Phone Number"
                          onChange={this.handleChange}
                          value={this.state.phoneNumber}
                          name="phoneNumber"

                        />


                        <ControlLabel>How did you hear about us?</ControlLabel>

                                <FormControl
                                  type="text"
                                  placeholder="Optional"
                                  onChange={this.handleChange}
                                  value={this.state.referral}
                                  name="referral"

                                />



                        <FormGroup controlId="formControlsTextarea">
                          <ControlLabel>Student's swimming experience. If none, enter N/A.</ControlLabel>
                          <FormControl componentClass="textarea" placeholder="Ex. 'My child has had a few lessons elsewhere and is comfortable in the water.'"
                          onChange={this.handleChange}
                          value={this.state.experience}
                          name="experience"
                 />
                        </FormGroup>
                        <FormControl.Feedback />
                        <Button className="btn btn-primary btn-large centerButton" type="submit">Send</Button>

                      </FormGroup>

                      <h3>{this.state.messageSent ? "Message Sent! Thanks for contacting us. We'll get back to you shortly!" : "Please leave us a message and we'll get back to you as soon as we can!"} </h3>

                      <br/>

                      <div class="study1">
                        <div class="transparent-dark">

                        <div className="addressSide">
                      <p>Open Swim, Inc.</p>
                      <p>52-51 84th street Elmhurst</p>
                      <p>Queens, New York</p>
                      <p>Phone: (917) 268- 4888 </p>
                      <p>Text: (917) 268- 4888</p>
                      <p>info@openswim.nyc</p>
                      </div>

                          <div className="socialMediaSide">
                      <Link to="/facebook"><p>Facebook</p></Link>
                      <Link to="/instagram"><p>Instagram</p></Link>
                      <Link to="/twitter"><p>Twitter</p></Link>
                      </div>
                        </div>
                      </div>
                    </form>

      </div>
    )
  }
}
