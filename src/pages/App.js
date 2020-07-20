import React, { Component } from "react";
import { TimetableInformation } from "../components/loadCourses.js";
import { TIMETABLE_VERSION } from "../timetable_config.js";


class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <title>NUCES-Timetable v{TIMETABLE_VERSION}</title>
        <TimetableInformation />
      </>
    );
  }
}

export default App;
