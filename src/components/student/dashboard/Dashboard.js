import React, { Component } from 'react';
import './Dashboard.css';

class Dashboard extends Component {
  /* Set the width of the side navigation to 250px */
openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

render() {
  return (
    <div className="">
      <div id="mySidenav" className="sidenav">
        <a href="javascript:void(0)" className="closebtn" onClick={this.closeNav}>&times;</a>
        <a href="">Home</a>
        <a href="">Lessons</a>
        <a href="">Teachers</a>
        <a href="">Profile</a>
      </div>

      <button onClick={this.openNav}>open</button>
    </div>
  );
}
}

export default Dashboard;
