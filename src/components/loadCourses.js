import React, { Component } from "react";
import { fetchCourse } from "../api/fetch.js";
import { Table } from "./Table.js";

import { generateColumns, sort_by_sections } from "../helpers/utils.js";
import { CourseSelection } from "./selector.js";
import { TIMETABLE_VERSION } from "../timetable_config.js";
import styled from "styled-components";

const Styles = styled.div`
  .header {
    padding: 30px;
    text-align: center;
    background: #001229;
    color: cyan;
    font-weight: bold;
    font-size: 14px;
    font-family: Arial, Tahoma, Verdana, Helvetica;
  }

  .courseMenu {
    padding: 30px;
    text-align: center;
    background: #001229;
    color: #002424;
    font-weight: bold;
    font-size: 14px;
    font-family: Arial, Tahoma, Verdana, Helvetica;
  }
`;

class TimetableInformation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected_courses: [],
      courses_info: [],
      flag: 0,
      courses_by_section: [],
    };

    this.loadCoursesInfo = this.loadCoursesInfo.bind(this);
    this.updateSelectedCourses = this.updateSelectedCourses.bind(this);
  }

  loadCoursesInfo() {
    if (this.state.selected_courses) {
      const data = [];
      for (let i of this.state.selected_courses) {
        fetchCourse(i.label).then((c) => {
          for (let j of c) {
            data.push(j);
          }
          this.setState({ courses_info: data });
          this.setState({
            courses_by_section: sort_by_sections(this.state.courses_info),
          });
        });
      }
      this.setState({ flag: 1 });
    } else {
      this.setState({ flag: 0 });
    }
  }

  updateSelectedCourses(courses) {
    this.setState({
      selected_courses: courses,
    });
  }

  render() {
    const columns = generateColumns();

    return (
      <Styles>
        <div className="courseMenu">
          <h1 style={{ color: "white" }}>Timetable {TIMETABLE_VERSION} Selection Menu</h1>
          <CourseSelection
            selectCourses={this.updateSelectedCourses}
            loadCoursesInfo={this.loadCoursesInfo}
          />
        </div>

        <div className="header">
          {this.state.flag
            ? Object.keys(this.state.courses_by_section).map((section, i) => {
                return (
                  <>
                    <h2 style={{ color: "white" }}>{section}:</h2>
                    <Table
                      key={i}
                      columns={columns}
                      data={this.state.courses_by_section[section]}
                    />
                  </>
                );
              })
            : null}
        </div>
      </Styles>
    );
  }
}

export { TimetableInformation };
