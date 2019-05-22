import React, { Component } from "react";
import ReactDOM from "react-dom";
import Notification from "./Notification";

// class Form extends Component {
//   constructor() {
//     super();
//     this.state = {
//       userName: "",
//       password: "",
//       codedUsername: "rahman",
//       codedPassword: "123456",
//       notification: "info"
//     };
//   }

//   onInputChange = e => {
//     this.setState({
//       [e.target.name]: e.target.value
//     });
//   };

//   onFormSubmit = e => {
//     e.preventDefault();
//     const { userName, password, codedPassword, codedUsername } = this.state;
//     if (userName === codedUsername && password === codedPassword) {
//       this.setState({
//         notification: "success"
//       });
//     } else if (userName !== codedUsername || password !== codedPassword) {
//       this.setState({
//         notification: "Error"
//       });
//     }
//   };

//   render() {
//     return (
//       <div>
//         <h3>Form</h3>
//         <form onSubmit={this.onFormSubmit}>
//           <label htmlFor="username">Username</label>
//           <input
//             onChange={this.onInputChange}
//             id="username"
//             name="userName"
//             type="text"
//           />
//           <br />
//           <label htmlFor="password">Password</label>
//           <input
//             onChange={this.onInputChange}
//             id="password"
//             name="password"
//             type="password"
//           />
//           <br />
//           <br />
//           <button type="submit">Submit</button>
//         </form>
//         <Notification notification={this.state.notification} />
//       </div>
//     );
//   }
// }

export default Form;