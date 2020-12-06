import React, { Component } from "react";
import { TimetableInformation } from "../components/loadCourses.js";
import { Layout, Menu, Breadcrumb } from "antd";
import { UserOutlined } from "@ant-design/icons";

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Layout>
          <Header className="header">
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
              <Menu.Item key="1">Home</Menu.Item>
              <Menu.Item key="2">Timetable</Menu.Item>
              <Menu.Item key="3">Offered Courses</Menu.Item>
            </Menu>
          </Header>
          <Content style={{ padding: "0 50px" }}>
            <Layout
              className="site-layout-background"
              style={{ padding: "24px 0" }}
            >
              <Sider
                breakpoint="lg"
                collapsedWidth="0"
                className="site-layout-background"
                width={200}
              >
                <Menu
                  mode="inline"
                  defaultSelectedKeys={["1"]}
                  defaultOpenKeys={["sub1"]}
                  style={{ height: "100%" }}
                >
                  <SubMenu
                    key="sub1"
                    icon={<UserOutlined />}
                    title="Categories"
                  >
                    <Menu.Item key="1">Semester Courses</Menu.Item>
                    <Menu.Item key="2">Create Timetable</Menu.Item>
                    <Menu.Item key="3">Export Timetable</Menu.Item>
                  </SubMenu>
                </Menu>
              </Sider>
              <Content style={{ padding: "0 24px", minHeight: 360 }}>
                <TimetableInformation />
              </Content>
            </Layout>
          </Content>
        </Layout>
        <Footer style={{ textAlign: "center" }}>
          NUCES Timetable ©2020 Powered By Ant Design
        </Footer>
      </>
    );
  }
}

export default App;
