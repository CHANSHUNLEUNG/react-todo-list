import React, { Component } from 'react'
import axios from 'axios';

export default class TodoList extends Component {

    constructor(props) {
        super(props)

        this.changeTodoListStatus = this.changeTodoListStatus.bind(this);

    }


    changeTodoListStatus(id) {
        let targetTodoItem = this.props.todoList[parseInt(id) - 1];
        targetTodoItem["status"] = !targetTodoItem["status"]
        console.log(targetTodoItem);
        const UPDATE_TODO_URL = "https://5e9ec500fb467500166c4658.mockapi.io/todos/" + id;
        axios.put(UPDATE_TODO_URL, targetTodoItem)
    }

    deleteTodoList(id){
        const DELETE_TODO_URL = "https://5e9ec500fb467500166c4658.mockapi.io/todos/" + id;
        axios.delete(DELETE_TODO_URL);
    }

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
