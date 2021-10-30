import Sidebar from "./Sidebar";

const Write = () => {
  return (
    <div className="dashboard container">
      <Sidebar />
      <div className="write">
        <div className="write-header">
          <input
            className="write-input"
            type="text"
            placeholder="Title"
            autoFocus={true}
          />
          <button className="write-submit" type="submit">
            Save Note
          </button>
        </div>
        <div>
          <textarea
            className="write-content"
            type="text"
            placeholder="Your Story..."
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default Write;
