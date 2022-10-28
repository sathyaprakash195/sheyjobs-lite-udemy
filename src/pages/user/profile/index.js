import React from "react";
import PageTitle from "../../../components/PageTitle";
import { Form, Tabs, message } from "antd";
import Experince from "./Experince";
import Education from "./Education";
import PersonalInfo from "./PersonalInfo";
import { useDispatch } from "react-redux";
import { ShowLoading, HideLoading } from "../../../redux/alertSlice";
import { getUserProfile, updateUserProfile } from "../../../apis/users";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
const { TabPane } = Tabs;

function Profile() {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const params = useParams();
  const loggedInUser = JSON.parse(localStorage.getItem("user"));
  const [userData, setUserData] = React.useState(null);
  const onFinish = async (values) => {
    try {
      dispatch(ShowLoading());
      const response = await updateUserProfile(values);
      dispatch(HideLoading());
      if (response.success) {
        message.success(response.message);
      } else {
        message.error(response.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };

  const getData = async () => {
    try {
      dispatch(ShowLoading());
      const user = JSON.parse(localStorage.getItem("user"));
      const response = await getUserProfile(params.id);
      dispatch(HideLoading());
      if (response.success) {
        setUserData(response.data);
      } else {
        message.error(response.message);
      }
    } catch (error) {
      message.error(error.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <PageTitle title="Profile" />
      {userData && (
        <Form layout="vertical" onFinish={onFinish} initialValues={userData}>
          <Tabs defaultActiveKey="1">
            <TabPane tab="Personal Info" key="1">
              <PersonalInfo />
            </TabPane>
            <TabPane tab="Education" key="2">
              <Education />
            </TabPane>
            <TabPane tab="Experience" key="3">
              <Experince />
            </TabPane>
          </Tabs>
          <div className="d-flex justify-content-end gap-2">
            <button
              className="primary-outlined-btn"
              type="button"
              onClick={() => navigate("/")}
            >
              Cancel
            </button>
            {params.id === loggedInUser.id && (
              <button className="primary-contained-btn" type="submit">
                Save
              </button>
            )}
          </div>
        </Form>
      )}
    </div>
  );
}

export default Profile;
