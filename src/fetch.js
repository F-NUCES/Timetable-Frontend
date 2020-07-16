const axios = require("axios");
const server_url = "http://localhost:8000";

async function grab(url) {
  try {
    const resp = await axios.get(url);
    return resp.data;
  } catch (error) {
    console.log(error);
  }
}

async function listCourses() {
  return grab(`${server_url}/courses`);
}

async function fetchCourse(name) {
  return grab(`${server_url}/course?name=${encodeURIComponent(name)}`);
}

async function generateListOfCourses() {
  try {
    const output = await listCourses();
    const result = [];
    for (let i of output) {
      result.push(i);
    }
    return result;
  } catch (err) {
    console.log(err);
  }
}

async function generateData(limit = -1) {
  try {
    const data = [];
    const result = await listCourses();
    let num = 0;
    for (let i of result.courses) {
      let course_info = await fetchCourse(i);
      if (course_info) {
        for (let i of course_info) {
          if (i) {
            data.push(i);
          }
        }
        num += 1;
        if (num >= limit && limit !== -1) break;
      }
    }
    return data;
  } catch (err) {
    console.log(err);
  }
}
export { grab, listCourses, fetchCourse, generateData, generateListOfCourses };
