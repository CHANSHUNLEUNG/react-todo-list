import React, { Component } from 'react'
import { Input } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import axios from 'axios';

export default class TodoForm extends Component {
    constructor(props) {
        super(props)

        this.handleTodoContentChange = this.handleTodoContentChange.bind(this);
        this.addTodoList = this.addTodoList.bind(this);

        this.state = {
            todoContent: "",
        }
    }

    handleTodoContentChange(event) {
        this.setState({
            todoContent: event.target.value,
        })
    }

    addTodoList(){
        const ADD_TODO_URL = "https://5e9ec500fb467500166c4658.mockapi.io/todos";
        axios.post(ADD_TODO_URL,{
            content: this.state.todoContent,
            status: true,
        }).then(response => {
            console.log(response);
        })
    }


    render() {
        return (
            <Input placeholder="Please type to add your todo list"
                addonAfter={<PlusOutlined onClick={this.addTodoList} />}
                value={this.state.todoContent}
                onChange={this.handleTodoContentChange} />
        )
    }
}
