import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { useTable } from "react-table";

function App() {
  const data = React.useMemo(
    () => [
      {
        subject: "Calculus",
        section: "B",
        timings: "9-12",
        type: "Course",
      },
      {
        subject: "Islamiat",
        section: "B",
        timings: "9-12",
        type: "Course",
      },
      {
        subject: "Pakistan Studies",
        section: "B",
        timings: "9-12",
        type: "Course",
      },
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      {
        Header: "Subject",
        accessor: "subject", // accessor is the "key" in the data
      },
      {
        Header: "Section",
        accessor: "section",
      },
      {
        Header: "Timings",
        accessor: "timings",
      },
      {
        Header: "Type",
        accessor: "type",
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data });

  return (
    <table {...getTableProps()} style={{ border: "solid 1px blue" }}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th
                {...column.getHeaderProps()}
                style={{
                  borderBottom: "solid 3px red",
                  background: "aliceblue",
                  color: "black",
                  fontWeight: "bold",
                }}
              >
                {column.render("Header")}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return (
                  <td
                    {...cell.getCellProps()}
                    style={{
                      padding: "10px",
                      border: "solid 1px gray",
                      background: "papayawhip",
                    }}
                  >
                    {cell.render("Cell")}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default App;
