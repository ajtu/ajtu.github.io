import React, { Component } from 'react'
import { Grid, Col, Image, Button, FormGroup,ControlLabel, FormControl, HelpBlock, Table } from 'react-bootstrap';
import './Lessons.css';
import { Link } from 'react-router-dom';
import firebase from './firebase.js';


export default class BabyLessons extends Component {


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

  const itemsRef = firebase.database().ref('baby');
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
          <Col md={6} lg={4}  smOffset={0}  >
          <div class="row text-center">

          <Image src="assets/babyandme.jpg" rounded className="profile-pic" responsive/>
          </div>

          <br/>
          <Table striped bordered condensed hover>
  <thead>
    <tr>
      <th>Time</th>
      <th>30 minutes</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Private</td>
      <td>$50</td>
    </tr>
    <tr>
      <td>Group(2 students)</td>
      <td>$60</td>
    </tr>

    <tr>
      <td>Group(3 students)</td>
      <td>$90</td>
    </tr>

    <tr>
      <td>Group(4 students)</td>
      <td>$120</td>
    </tr>
  </tbody>
</Table>
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
<br/>
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
        <br/>

        <h4>Questions?</h4>
        <h4>Give us a call at 917-268-4888</h4>


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

            </form>
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
      </div>
    )
  }
}
