import { Tooltip, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import makeAnimated from "react-select/animated";
import React, { Component } from "react";
import Select from "react-select";
import { listCourses, generateListOfCourses } from "./fetch";

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

class CourseSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };

    this.loadCoursesList = this.loadCoursesList.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.loadCoursesList();
  }

  loadCoursesList() {
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
        {/* <Tooltip title="search">
            <Button
              style={{ "textAlign": "center", display: "block" }}
              type="primary"
              htmlType="submit"
              shape="circle"
              icon={<SearchOutlined />}
              // onClick={(e) => this.handleChange()}
            />
          </Tooltip> */}
      </>
    );
  }
}

export { CourseSelector };
