import React, { Component } from 'react'
import axios from 'axios';

export default class TodoList extends Component {
    render() {
        return (
            <div>
                {this.props.todoList.map((oneTodo) => {
                    console.log(oneTodo);
                    console.log("next");
                    return "";
                })}
            </div>
        )
    }
}
