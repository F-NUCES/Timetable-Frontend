import React, { Component } from "react";
import { TimetableInformation } from "../components/loadCourses.js";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="app">
        <title>NUCES-Timetable</title>
        <TimetableInformation />
      </div>
    );
  }
}

export default App;
