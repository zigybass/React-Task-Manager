import React from "react";
import { Collapsible, CollapsibleItem } from "react-materialize";

function Deleted(props) {

  console.log(props)

  return (
    <div className="container">
        <h4 style={{ textAlign: "center" }}>Recently Deleted</h4>
        {/* <Collapsible accordion={false}>
          {props.deleted.map((task, i) => {
            const { key, newTask } = task;
            return (
              <CollapsibleItem
                id={key}
                key={key}
                header={newTask}
                icon={
                  <i
                    onClick={this.onDelete}
                    className="material-icons btn-floating grey darken-3"
                    id={key}
                  >
                    delete_outline
                  </i>
                }
              >
                {task.details}
              </CollapsibleItem>
            );
          })}
        </Collapsible> */}
      </div>
  );
}

export default Deleted;
