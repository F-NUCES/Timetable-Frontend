import React, { Component } from "react";
import { fetchCourse, generateData } from "./fetch.js";
import { Table } from "./Table.js";

import Course from "./course.js";
import { generateColumns } from "./utils.js";
import { CourseSelector } from "./selector.js";

class LoadCourses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected_courses: [],
      courses_info: [],
      flag: 0,
    };

    this.loadCoursesInfo = this.loadCoursesInfo.bind(this);
    this.updateSelectedCourses = this.updateSelectedCourses.bind(this);
  }

  // componentDidMount() {

  // this.loadCourses();
  // }

  loadCoursesInfo() {
    const data = [];
    for (let i of this.state.selected_courses) {
      fetchCourse(i.label).then((c) => {
        for (let j of c) {
          data.push(j);
        }
        this.setState({ courses_info: data });
      });
      console.log(data.length);
    }
    this.setState({ flag: 1 });
  }

  updateSelectedCourses(courses) {
    this.setState({
      selected_courses: courses,
    });
  }

  render() {
    const columns = generateColumns();

    return (
      <div>
        {/* <Course submit={this.loadData} /> */}
        <CourseSelector
          selectCourses={this.updateSelectedCourses}
          loadCoursesInfo={this.loadCoursesInfo}
        />

        {/* <Table/> */}
        {this.state.flag ? (
          <Table columns={columns} data={this.state.courses_info} />
        ) : null}
      </div>
    );
  }
}

export { LoadCourses };
