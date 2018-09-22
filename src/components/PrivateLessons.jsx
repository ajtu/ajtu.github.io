import React, { Component } from 'react'
import { Grid, Col, Image, Button, FormGroup,ControlLabel, FormControl, HelpBlock,Table  } from 'react-bootstrap';
import './Lessons.css';
import { Link } from 'react-router-dom';
import firebase from './firebase.js';


export default class PrivateLessons extends Component {


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

  const itemsRef = firebase.database().ref('private');
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

        <Image src="assets/private.jpg" rounded className="profile-pic" responsive/>

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
    <td>Group</td>
    <td>$30</td>
    <td>$40</td>
    <td>$60</td>
  </tr>
  <tr>
    <td>Private</td>
    <td>$50</td>
    <td>$67</td>
    <td>$100</td>

  </tr>
</tbody>
</Table>
</Col>
<Col md={5} md={4} smOffset={1} >

            <h3 className = "textAlignment">Private</h3>
            <p>Progress faster and better with personalized 1-on-1 lessons.</p>
            <p>For students: </p>
            <p>•with hydrophobia</p>
            <p>•with special needs.</p>
            <p>•that excel in a 1-on-1 environment.</p>
            <p>•trying to reach a specific goal</p>
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
        <br/>


        <h4>Need more information?</h4>
        <h4>Call 917-268-4888</h4>


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
