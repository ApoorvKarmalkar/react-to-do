import React from 'react';

function UpdateForm({ updateData, updateTask, changeTask, cancelUpdate }) {
    return (
        //Update data
        <div className="row mb-3">
          <div className="col">
            <input
              className="form-control form-control-lg"
              value={updateData && updateData.title}
              onChange={(e) => changeTask(e)}
            />
          </div>
          <div className="col-auto">
            <button
              className="btn btn-lg btn-success mr-20"
              onClick={updateTask}
            >
              Update Task
            </button>
            <button className="btn btn-lg btn-warning" onClick={cancelUpdate}>
              Cancel
            </button>
          </div>
        </div>
    );
}

export default UpdateForm;