import React, { Component } from 'react'
import { Grid, Col, Image, FormGroup,ControlLabel, Button, FormControl, HelpBlock } from 'react-bootstrap';
import './Contact.css';
import firebase from './firebase.js';
import { Link } from 'react-router-dom';


export default class Register extends Component {



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

  const itemsRef = firebase.database().ref('general-contact-or-owns-pool');
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

    )
  }
}
