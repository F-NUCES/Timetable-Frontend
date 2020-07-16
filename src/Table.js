import React, { useState, useEffect } from "react";
import { useTable, useFilters } from "react-table";
import BTable from "react-bootstrap/Table";
import styled from "styled-components";
//TODO: Add props type for table

const Styles = styled.div`
  padding: 1rem;
  table {
    border-spacing: 0;
    border: 1px solid black;
    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }
    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;
      :last-child {
        border-right: 0;
      }
    }
  }
`;

export function Table({ columns, data }) {
  // Use the state and functions returned from useTable to build your UI
  // const [columns, setColumns] = useState("");
  const { getTableProps, headerGroups, rows, prepareRow } = useTable(
    {
      columns,
      data,
    },
    useFilters
  );

  // setColumns(column);
  // setData(courses_info);
  // console.log(this.state.data);

  // const handleFilterChange = (e) => {
  //   const value = e.target.value || undefined;
  //   setFilter("name", value); // filter accessor
  //   setFilterInput(value);
  // };
  return (
    <>
      {/* <input
        value={filterInput}
        onChange={handleFilterChange}
        placeholder={"Search name"}
      /> */}
      <Styles>
        <BTable striped borderless hover size="sm" {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
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
      </Styles>
    </>
  );
}
