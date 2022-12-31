import React from "react";
import classes from "./adminReportList.module.css";
import Select from "react-select";
import Icon from "../../commonComponents/Icon";
import { BsCardChecklist } from "@react-icons/all-files/bs/BsCardChecklist";
import Button from "../../commonComponents/Button";
import { BsThreeDots } from "@react-icons/all-files/bs/BsThreeDots";
import { useNavigate } from "react-router";

const typeOptions = [
  { value: "all", label: "Tất cả các báo cáo" },
  { value: "my", label: "Báo cáo của tôi" },
  { value: "share", label: "Báo cáo chia sẻ" },
];

const statusOptions = [
  { value: "plan", label: "Lên kế hoạch" },
  { value: "process", label: "Đang chạy" },
  { value: "complete", label: "Hoàn thành" },
];

const reportList = [
  {
    title: "Những câu đố tiếng Việt hay",
    count: 10,
    accuracy: 83,
  },
  {
    title: "Những câu đố tiếng Việt hay",
    count: 18,
    accuracy: 67,
  },
  {
    title: "Bài tập địa lý lớp 8",
    count: 35,
    accuracy: 59,
  },
  {
    title: "10 vạn câu hỏi vì sao",
    count: 2,
    accuracy: 100,
  },
];

function AdminReportList(props) {
  const navigate = useNavigate();
  const handleChooseReport = () => {
    navigate("/admin/reports/1/players");
  };
  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <div>
          <Select options={typeOptions} defaultValue={typeOptions[0]} />
        </div>
        <div>
          <Select options={statusOptions} placeholder={"Lọc theo trạng thái"} />
        </div>
      </div>
      <div className={classes.reportTable}>
        <div className={classes.reportHead}>
          <div>
            <input type={"checkbox"} />
          </div>
          <div>Loại</div>
          <div>Tên Quizz</div>
          <div>Tổng người chơi</div>
          <div>Chính xác</div>
          <div>Lớp</div>
          <div>Mã</div>
          <div>Hành động</div>
          <div></div>
        </div>
        <div className={classes.reportList}>
          {reportList.map((report, index) => (
            <div
              className={classes.report}
              onClick={handleChooseReport}
              key={index}
            >
              <div>
                <input type={"checkbox"} />
              </div>
              <div>
                <div className={classes.liveType}>
                  <Icon>
                    <BsCardChecklist />
                  </Icon>
                  <span>Trực tiếp</span>
                </div>
              </div>
              <div className={classes.name}>
                <h3>{report.title}</h3>
                <span>Bắt đầu vào 20 tháng 12 - Hoàn thành 2 ngày trước </span>
              </div>
              <div>{report.count}</div>
              <div>
                <span className={classes.label}>{`${report.accuracy}%`}</span>
              </div>
              <div></div>
              <div></div>
              <div>
                <Button>Giao bài</Button>
              </div>
              <div>
                <Icon>
                  <BsThreeDots />
                </Icon>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AdminReportList;
