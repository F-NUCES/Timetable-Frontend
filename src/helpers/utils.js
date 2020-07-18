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

function sort_by_sections(data) {
  let sections = new Set();

  data.map((d) => {
    sections.add(d.section);
  });

  sections = [...sections];

  const info = {};

  sections.map((section) => {
    info[section] = data.filter((d) => {
      return d.section === section;
    });
  });
  return info;
}

export { generateColumns, sort_by_sections };
