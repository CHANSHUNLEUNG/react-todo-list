import React, { Component } from 'react'
import axios from 'axios';
import { List } from 'antd';
import { HTTP_OK } from '../Constants/TodoConstant';
import Todo from './Todo';


export default class TodoList extends Component {

    constructor(props) {
        super(props)

        this.changeTodoListStatus = this.changeTodoListStatus.bind(this);
        this.deleteTodoList = this.deleteTodoList.bind(this);
    }


    changeTodoListStatus(id) {
        const { updateTodoList } = this.props;
        return function () {
            const UPDATE_TODO_URL = "https://5e9ec500fb467500166c4658.mockapi.io/todos/" + id;
            axios.get(UPDATE_TODO_URL).then(getResponse => {

                if (getResponse.status === HTTP_OK) {
                    let targetTodoItem = getResponse.data;
                    targetTodoItem["status"] = !targetTodoItem["status"];
                    axios.put(UPDATE_TODO_URL, targetTodoItem).then(putResponse => {
                        (putResponse.status === HTTP_OK) ? updateTodoList() :
                            console.log("Update todo item failed with status " + putResponse.status);
                    })
                }

            })
        }
    }

    deleteTodoList(id) {
        const { updateTodoList } = this.props;
        return function () {
            const DELETE_TODO_URL = "https://5e9ec500fb467500166c4658.mockapi.io/todos/" + id;
            axios.delete(DELETE_TODO_URL).then(response => {
                (response.status === HTTP_OK) ? updateTodoList() :
                    console.log("Delete todo item fail with status " + response.status);
            });
        }
    }

    render() {
        return (
            <List
                bordered
                dataSource={this.props.todoList}
                renderItem={item => (
                    <List.Item key={item.id}>
                        <Todo item={item}
                            changeTodoListStatus={this.changeTodoListStatus}
                            deleteTodoList={this.deleteTodoList} />
                    </List.Item>
                )}
            />
        )
    }
}
