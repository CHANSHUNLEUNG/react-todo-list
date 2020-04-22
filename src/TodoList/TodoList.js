import React, { Component } from 'react'
import axios from 'axios';
import { List, Button } from 'antd';
import { CloseOutlined } from '@ant-design/icons';

export default class TodoList extends Component {

    constructor(props) {
        super(props)

        this.changeTodoListStatus = this.changeTodoListStatus.bind(this);
        this.deleteTodoList = this.deleteTodoList.bind(this);
    }


    changeTodoListStatus(id) {
        let targetTodoItem = this.props.todoList[parseInt(id) - 1];
        targetTodoItem["status"] = !targetTodoItem["status"]
        const UPDATE_TODO_URL = "https://5e9ec500fb467500166c4658.mockapi.io/todos/" + id;
        axios.put(UPDATE_TODO_URL, targetTodoItem)
    }

    deleteTodoList(id) {
        return function () {
            const DELETE_TODO_URL = "https://5e9ec500fb467500166c4658.mockapi.io/todos/" + id;
            axios.delete(DELETE_TODO_URL);
        }
    }

    render() {
        return (
            <List
                bordered
                dataSource={this.props.todoList}
                renderItem={item => (
                    <List.Item key={item.id}>
                        <div>{item.content}</div>
                        <Button type="primary"
                            danger
                            shape="circle"
                            icon={<CloseOutlined />}
                            onClick={this.deleteTodoList(item.id)} />
                    </List.Item>
                )}
            />
        )
    }
}
