import React, { Component } from "react";
import { generateData } from "./fetch.js";
import Course from "./course.js";
import { generateColumns } from "./utils.js";
import { CourseSelector } from "./selector.js";
import { LoadCourses } from "./loadCourses.js";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };

    this.loadData = this.loadData.bind(this);
  }

  componentDidMount() {
    // this.loadData();
  }

  loadData(limit) {
    generateData(parseInt(limit)).then((result) => {
      this.setState({
        data: result,
      });
    });
  }

  render() {
    const columns = generateColumns();

    return (
      <div>
        {/* <Course submit={this.loadData} /> */}
        <LoadCourses/>
        {/* <Table columns={columns} data={this.state.data} />  */}
      </div>
    );
  }
}

export default App;
