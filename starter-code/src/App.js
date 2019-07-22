import React, { Component, Fragment } from 'react';
// import Navbar from './components/navbar';
// import FormField from './components/formField';
// import CoolButton from './components/coolButton';
import SignUp from './components/signUp'
import Container from './components/container';
import "./App.css";

class App extends Component {
  render() {
    return (
      <Fragment>
        <SignUp />
        <div className="message">
          <Container />
        </div>
      </Fragment>
    );
  }
}
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <Navbar />
//         <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
//         <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
//         <CoolButton isSmall isDanger className="is-rounded my-class">Button 1</CoolButton>
//         <CoolButton isSmall isSuccess>Button 2</CoolButton>
//       </div>
//     );
//   }
// }

export default App;
