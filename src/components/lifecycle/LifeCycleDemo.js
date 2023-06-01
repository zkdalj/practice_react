import React, { Component } from "react";

export default class LifeCycleDemo extends Component {
  constructor(props) {
    //is the best place to initial state ---it is call with props --
    super(props); // the class component initialice class variable

    this.state = {
      // state variable
      name: "sachin",
      users: [],  //fetchdata1
    };
    console.log("Constructor...");
  }
  static getDerivedStateFromProps(props, state) {
    //if requrement update the state datat than ue this
    console.log("GetDerivedStateFromProps...", props, state);
    // return {name: props.name  };
    if (props.name) {
      return { name: props.name };
    }
  };

  shouldComponentUpdate(){ //return true or false true update Deepak
    console.log("ShuldComponentUpdate...")
    return true; //continues rendering
  }; //if false{block the rendering} render will not happened  sachin not getting updated in deepak

  fetchUsers = async () => {   //fetchdata3
    let response = await fetch('https://jsonplaceholder.typicode.com/users');
    let userData = await response.json();
    this.setState({users :userData})
  };



  componentDidMount() {
    //not matter were you right the are sequence call did mount after the render than componentdidmount
    console.log("ComponentdidMount..."); //good place for Dom manipulation
    document.getElementById("div1").style.color = "red";  //for style
    this.fetchUsers();    //fetchdata4
};

getSnapshotBeforeUpdate(prevProps, prevState){ // there is the lifecycle hook
document.getElementById("div1").innerHTML =
"before the update, the name was" + prevState.name;  // get prev info
} 

componentDidUpdate(){
document.getElementById("div2").innerHTML =
"the Updated name is" + this.state.name; // current update name
}



  render() {
    //actual html aliment render here
    console.log("Render...");
    return (
      <div>
        LifeCycleDemo
        {/* <div id="div1">Name is : {this.state.name}</div> */}
        <div id="div1"></div>
        <div id="div2"></div>
        <button onClick={() => {
            this.setState({name:"Deepak"})
        }} className="btn btn-primary btn-sm">Update-Name</button>
        <h1>Users</h1>
        <ul>
          {this.state.users.map((user) => (
            <li key={user.id}>{user.name}</li> ////fetchdata2
          ))}
        </ul>
      </div>
    );
  }
}
