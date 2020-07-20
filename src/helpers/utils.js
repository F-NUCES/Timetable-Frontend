import moment from "moment";

function generateColumns() {
  return [
    {
      Header: "Subject",
      accessor: "name", // accessor is the "key" in the data
    },
    // {
    //   Header: "Section",
    //   accessor: "section",
    // },
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
    {
      Header: "Semester",
      accessor: "semester",
    },
  ];
}

function compare(a, b) {
  const a_time = moment(a.start_time, "h:mm a"),
    b_time = moment(b.start_time, "h:mm a");

  if (a_time < b_time) {
    return -1;
  }
  if (a_time > b_time) {
    return 1;
  }
  return 0;
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

  for (let i of Object.keys(info)) info[i].sort(compare);

  return info;
}

export { generateColumns, sort_by_sections };
