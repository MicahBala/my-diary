import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import Sidebar from "./Sidebar";

const Notes = () => {
  return (
    <div className="dashboard container">
      <Sidebar />
      <div className="notes">
        <h1>My Story</h1>
        <div className="notes-header">
          <div className="date">2 August, 2021. 04:00pm</div>
          <div className="notes-icon">
            <FiEdit className="notes-edit-icon" />
            <RiDeleteBinLine className="notes-delete-icon" />
          </div>
        </div>
        <div className="notes-body">
          <p className="notes-content">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe quo
            adipisci pariatur molestias aperiam repellat reiciendis fuga ea,
            ratione sapiente cum debitis libero aut quidem delectus, eligendi
            nobis sit, necessitatibus quas assumenda. eveniet similique commodi
            ipsam accusantium temporibus sint laboriosam, unde libero magnam
            debitis! Nostrum deleniti delectus laudantium iure magni, velit
            repellat cumque fugiat, illo commodi vel dignissimos! Ut rerum
            incidunt minima perferendis qui nemo ad fugiat praesentium natus
            quibusdam.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Notes;
