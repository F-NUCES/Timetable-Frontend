import React, { Component } from "react";
import { TimetableInformation } from "../components/loadCourses.js";


class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <title>NUCES-Timetable</title>
        <TimetableInformation />
      </>
    );
  }
}

export default App;
