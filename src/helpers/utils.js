function generateColumns() {
  return [
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
}

export { generateColumns };