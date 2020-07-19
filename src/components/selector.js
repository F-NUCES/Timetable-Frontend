import makeAnimated from "react-select/animated";
import React, { Component } from "react";
import Select from "react-select";
import { generateListOfCourses } from "../api/fetch";

const filterCourses = () => {
  const courses = generateListOfCourses().then((data) => {
    return data;
  });

  return courses.then((c) => {
    return c.map((course, index) => {
      return { label: course[index], value: course[index] };
    });
  });
};

class CourseSelection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    // Load Courses List
    filterCourses().then((courses) => {
      this.setState({ data: courses });
    });
  }

  handleChange(selectedValue) {
    this.props.selectCourses(selectedValue);
  }

  render() {
    const animatedComponents = makeAnimated();

    return (
      <>
        <Select
          closeMenuOnSelect={false}
          components={animatedComponents}
          isMulti
          options={this.state.data}
          onChange={this.handleChange}
          onMenuClose={this.props.loadCoursesInfo}
        />
      </>
    );
  }
}

export { CourseSelection };
