import React from "react";

export default class Todo extends React.Component {
  handleClick = () => {
    // console.log("handle click", this.props.todo.task);
    this.props.handleToggle(this.props.todo.id);
  };
  render() {
    return (
      <li onClick={this.handleClick} key={this.props.todo.id}>
        {" "}
        {this.props.todo.name}{" "}
        {this.props.todo.completed ? (
          <span>Task Completed</span>
        ) : (
          <span></span>
        )}
      </li>
    );
  }
}

// class Todo extends React.Component {
//   render() {
//     <li>
//       {this.props.todo.task}
//       {this.props.todo.completed ? <span>Completed</span> : <span></span>}
//     </li>;
//   }
// }
