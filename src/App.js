import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import BTable from 'react-bootstrap/Table';

import { useTable } from 'react-table'
import { makeData } from "./fetch.js";

function Table({ columns, data }) {
  // Use the state and functions returned from useTable to build your UI
  const { getTableProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data,
  })

  // Render the UI for your table
  return (
    <BTable striped bordered hover size="sm" {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {rows.map((row, i) => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return (
                  <th {...cell.getCellProps()}>
                    {cell.render('Cell')}
                  </th>
                )
              })}
            </tr>
          )
        })}
      </tbody>
    </BTable>
  )
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
      <Table
        columns={columns}
        data={this.state.data}
        />
        </div>
    );
  }
}

export default  App;
