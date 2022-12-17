import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faPen,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";

function ToDo({ toDo, markDone, setUpdateData, deleteTask }) {
    return (
        toDo &&
            toDo
              .sort((a, b) => (a.id > b.id ? 1 : -1))
              .map((task, index) => {
                return (
                  <React.Fragment key={task.id}>
                    <div className="col taskBg">
                      <div className={task.status ? "done" : ""}>
                        <span className="taskNumber">{index + 1}</span>
                        <span className="taskText">{task.title}</span>
                      </div>
                      <div className="iconsWrap">
                        <span title="Completed / Not Completed">
                          <FontAwesomeIcon
                            icon={faCircleCheck}
                            onClick={() => markDone(task.id)}
                          />
                        </span>
                        {!task.status && (
                          <span title="Edit">
                            <FontAwesomeIcon
                              icon={faPen}
                              onClick={() =>
                                setUpdateData({
                                  id: task.id,
                                  title: task.title,
                                  status: task.status,
                                })
                              }
                            />
                          </span>
                        )}
                        <span title="Delete">
                          <FontAwesomeIcon
                            icon={faTrashCan}
                            onClick={() => deleteTask(task.id)}
                          />
                        </span>
                      </div>
                    </div>
                  </React.Fragment>
                );
            })
    );
}

export default ToDo;