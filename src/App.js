import React, { Component, useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import "bootstrap/dist/css/bootstrap.min.css";

import BTable from "react-bootstrap/Table";

import { useTable, useFilters } from "react-table";
import { makeData } from "./fetch.js";

function Table({ columns, data }) {
  // Use the state and functions returned from useTable to build your UI
  const [filterInput, setFilterInput] = useState("");
  const { getTableProps, headerGroups, rows, prepareRow, setFilter } = useTable(
    {
      columns,
      data,
    },
    useFilters
  );

  const handleFilterChange = (e) => {
    const value = e.target.value || undefined;
    setFilter("name", value);
    setFilterInput(value);
  };

  // Render the UI for your table
  return (
    <>
      <input
        value={filterInput}
        onChange={handleFilterChange}
        placeholder={"Search name"}
      />
      <BTable striped borderless hover size="sm" {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <th {...cell.getCellProps()}>{cell.render("Cell")}</th>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </BTable>
    </>
  );
}

class App extends Component {
  constructor(props) {
    super(props);
    //Initial data from API
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    makeData().then((result) => {
      this.setState({
        data: result,
      });
    });
  }

  render() {
    const columns = [
      {
        Header: "Subject",
        accessor: "name", // accessor is the "key" in the data
      },
      {
        Header: "Section",
        accessor: "section",
      },
      {
        Header: "Start",
        accessor: "start_time",
      },
      {
        Header: "End",
        accessor: "end_time",
      },
      {
        Header: "Room",
        accessor: "room",
      },
      {
        Header: "Day",
        accessor: "day",
      },
    ];

    return (
      <div>
        <Table columns={columns} data={this.state.data} />
      </div>
    );
  }
}

export default App;
