import React, {Component} from "react";
import Layout from '../../components/MyLayout.js'

//import * as post from '../rest/post';

class Cart extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      first_name: '',
      last_name: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }



  async handleSubmit(event) {
    event.preventDefault();
    

    await post.postPersonalInfo(this.state.email, this.state.first_name, this.state.last_name);

    alert("post successfully");

  }

  changeHandler = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <Layout>
        <form onSubmit={this.handleSubmit}>

          <label htmlFor="email">Email</label>
          <input value={this.state.email}  name="email" type="email" onChange={this.changeHandler}/>

          <label >First Name</label>
          <input value={this.state.first_name}  name="first_name" type="text" onChange={this.changeHandler}/>

          <label htmlFor="last_name">Last Name</label>
          <input value={this.state.last_name}  name="last_name" type="text" onChange={this.changeHandler}/>

          <button>Submit</button>
        </form>

      </Layout>

    );
  }
}

export default Cart;
