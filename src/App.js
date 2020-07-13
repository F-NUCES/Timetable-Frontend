import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { generateData } from "./fetch.js";
import { Table } from "./Table.js";
import Course from "./course.js";
import { generateColumns } from "./utils.js";
import { CourseSelector } from "./selector.js";
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };

    this.loadData = this.loadData.bind(this);
  }

  componentDidMount() {
    this.loadData("3");
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
        <Course submit={this.loadData} />
        <CourseSelector options={this.state.data} />
        {/* <Table columns={columns} data={this.state.data} />  */}
      </div>
    );
  }
}

export default App;
