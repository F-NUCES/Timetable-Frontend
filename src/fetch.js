const axios = require("axios");
const server_url = "http://localhost:8000";

export async function listCourses() {
  try {
    const resp = await axios.get(`${server_url}/courses`);
    return resp.data;
  } catch (error) {
    console.log(error);
  }
}

export async function fetchCourse(name) {
  try {
    const resp = await axios.get(`${server_url}/course?name=${name}`);
    return resp.data;
  } catch (error) {
    console.log(error);
  }
}

export async function makeData() {
  try {
    const data = [];
    const result = await listCourses();
    for (let i of result.courses) {
      let course_info = await fetchCourse(i);
      if (course_info) {
        for (let i of course_info) {
          if (i) {
            data.push(i);
          }
        }
      }
    }
    return data;
  } catch (err) {
    console.log(err);
  }
}

 
// makeData().then((data) => {
//   console.log(data);
//   for (let i of data) {
//     console.log(i);
//   }
// });
// });
// listCourses().then((result) => {
//     for (let i of result.courses)
//         console.log(i);
// });

// fetchCourse("Design Pattern (MSP-2A)")
