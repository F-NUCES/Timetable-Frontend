import makeAnimated from "react-select/animated";
import React, { Component } from "react";
import Select from "react-select";
import { notification } from "antd";
import { generateListOfCourses } from "../api/fetch";

const openNotification = () => {
  notification.info({
    message: "Display Courses",
    duration: 3.5,
    description:
      "In order to display courses information, close the menu after selecting courses.",
  });
};

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
      showNotification: false,
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
      <div>
        <Select
          closeMenuOnSelect={false}
          components={animatedComponents}
          isMulti
          options={this.state.data}
          onChange={this.handleChange}
          onMenuClose={this.props.loadCoursesInfo}
          onFocus={() => {
            openNotification();
          }}
          placeholder="Search Courses.... | Close Menu to Load Courses"
          theme={(theme) => ({
            ...theme,
            borderRadius: 30,
            height: 50,
            width: "20px",
            colors: {
              ...theme.colors,
            },
          })}
        />
      </div>
    );
  }
}

export { CourseSelection };
