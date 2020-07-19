const axios = require("axios");
const server_url = "http://timetable.mrafay.me:5000";
const encode = encodeURIComponent;

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
  return grab(`${server_url}/course?name=${encode(name)}`);
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

export { grab, listCourses, fetchCourse, generateListOfCourses };
