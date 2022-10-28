import { Col, message, Row } from "antd";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllJobs } from "../apis/jobs";
import Filters from "../components/Filters";
import PageTitle from "../components/PageTitle";
import { HideLoading, ShowLoading } from "../redux/alertSlice";

function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [data, setData] = React.useState([]);
  const [filters, setFilters] = React.useState({
    location: "",
    industry: "",
    experience: "",
  });

  const getData = async () => {
    try {
      dispatch(ShowLoading());
      const response = await getAllJobs();
      if (response.success) {
        const approvedJobs = response.data.filter(
          (job) => job.status === "approved"
        );
        setData(approvedJobs);
      }
      dispatch(HideLoading());
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <Filters filters={filters} setFilters={setFilters} setData={setData} />
      <Row gutter={[15, 15]} className="mt-3">
        {data.map((job) => (
          <Col span={8}>
            <div className="job-card">
              <h3 className="uppercase">{job.title}</h3>
              <div className="light-divider"></div>

              <div className="d-flex flex-column gap-1">
                <div className="d-flex justify-content-between mt-1">
                  <span>Company</span>
                  <span>{job.company}</span>
                </div>
                <div className="d-flex justify-content-between">
                  <span>Location</span>
                  <span>{job.location}</span>
                </div>
                <div className="d-flex justify-content-between">
                  <span>Salary</span>
                  <span>{job.salary}</span>
                </div>
                <div className="d-flex justify-content-between">
                  <span>Posted On</span>
                  <span>{job.postedOn}</span>
                </div>
                <div className="d-flex justify-content-between">
                  <span>Last Date To Apply</span>
                  <span>{job.lastDateToApply}</span>
                </div>
              </div>

              <button
                className="primary-outlined-btn w-100 mt-2"
                onClick={() => navigate(`/job-description/${job.id}`)}
              >
                Apply Now
              </button>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Home;
