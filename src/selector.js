import makeAnimated from "react-select/animated";
import React, { Component } from "react";
import Select from "react-select";
import { generateData } from "./fetch";

const filterCourses = (limit) => {
  const courses = generateData(limit).then((data) => {
    return data;
  });
  return courses.then((c) => {
    return c.map((course) => {
      return { label: course.name, value: course.name };
    });
  });
};

const promiseOptions = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(filterCourses());
    }, 1000);
  });

class CourseSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
    this.loadData = this.loadData.bind(this);
  }
  componentDidMount() {
    this.loadData("5");
  }

  loadData(limit) {
    filterCourses().then((options) => {
      this.setState({ data: options });
    });
  }

  render() {
    const animatedComponents = makeAnimated();

    return (
      <Select
        closeMenuOnSelect={false}
        components={animatedComponents}
        isMulti
        options={this.state.data}
      />
    );
  }
}

export { CourseSelector };
