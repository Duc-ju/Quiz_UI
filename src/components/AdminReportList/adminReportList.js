import React from "react";
import classes from "./adminReportList.module.css";
import Select from "react-select";
import Icon from "../../commonComponents/Icon";
import { BsCardChecklist } from "@react-icons/all-files/bs/BsCardChecklist";
import Button from "../../commonComponents/Button";
import { BsThreeDots } from "@react-icons/all-files/bs/BsThreeDots";

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

function AdminReportList(props) {
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
          {new Array(5).fill(null).map((x, index) => (
            <div className={classes.report} key={index}>
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
                <h3>10 vạn câu hỏi vì sao</h3>
                <span>started on 20th Dec 22 - Hoàn thành a day ago </span>
              </div>
              <div>2</div>
              <div>
                <span className={classes.label}>83%</span>
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
