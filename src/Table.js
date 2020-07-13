import React, { useState } from "react";
import { useTable, useFilters } from "react-table";
import BTable from "react-bootstrap/Table";

//TODO: Add props type for table

export function Table({ columns, data }) {
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
      setFilter("name", value); // filter accessor
      setFilterInput(value);
    };
  
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
  