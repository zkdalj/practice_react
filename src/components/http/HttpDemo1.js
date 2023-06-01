import React, { Component } from "react";

export default class HttpDemo1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  fetchUsers = () => {
    const myURL = "https://jsonplaceholder.typicode.com/users";

    fetch(myURL)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({ users: data });
      });
  };
  componentDidMount() {
    this.fetchUsers();
  }
  render() {
    return (
      <div>
        <h1 className="text-center">Employee Details</h1>
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>userID</th>
              <th>name</th>
              <th>email</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map((user, ind) => {
              return (
                <tr key={ind}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                  <button type="button" class="btn btn-outline-success ">Edit</button>
                  <button type="button" class="btn btn-outline-danger">Delete</button>

                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
