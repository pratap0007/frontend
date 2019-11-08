import React from 'react';
// eslint-disable-next-line no-unused-vars
import {TaskPropObject} from '../task/Task';
import {connect} from 'react-redux'
import Task from '../task/Task';
import {mockData} from '../../services/mockdata';
import {ResData} from "../../store"
export interface MockData{
  Name : string,
  Description : string,
  Rating : number,
  Downloads : number,
  YAML : string
}
const TaskContainer: React.FC = (props: any) => {
  // console.log("Ayo")
  // console.log(props.users)
  const data = props.users
   console.log(data)
  return (
    <div>
     {/* <h1>{props.user}</h1> */}

      {
        data.map((task: ResData) => {
          let taskData:MockData  = {
            Name: task.Name,
            Description: task.Description,
            Rating: task.Rating,
            Downloads: task.Downloads,
            YAML:task.YAML
          };
          return <Task key={task.Name} task={taskData} />;
        })}
    </div>
  );
};
const mapStateToProps = (state:any) => {
  console.log("dsdsdas");
  return {
    users: state.data
  }
}

 export default connect (mapStateToProps)(TaskContainer);
;
