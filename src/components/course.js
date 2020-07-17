import { Field, Form, Formik } from "formik";
import React, { useState } from "react";

class Course extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Courses Information</h1>
        <Formik
          initialValues={{ semester: "" }}
          onSubmit={(values, actions) => {
            setTimeout(() => {
              const data = JSON.parse(JSON.stringify(values, null, 2));
              this.props.submit(data.semester);
              actions.setSubmitting(false);
            }, 1);
          }}
        >
          {() => (
            <Form>
              <Field as="select" name="semester">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
              </Field>
              <button type="submit">Submit</button>
            </Form>
          )}
        </Formik>
      </div>
    );
  }
}

export default Course;
