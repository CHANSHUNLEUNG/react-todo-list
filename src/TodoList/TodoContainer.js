import React, { Component } from 'react'
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import axios from 'axios';
import 'antd/dist/antd.css';
import "./TodoContainer.css";
import { Row, Col, PageHeader } from 'antd';

export default class TodoContainer extends Component {
    constructor(props) {
        super(props)

        this.updateTodoList = this.updateTodoList.bind(this);

        this.state = {
            todoList: [],
        }
    }

    componentDidMount() {
        this.updateTodoList();
    }

    updateTodoList() {
        const TODO_LIST_URL = "https://5e9ec500fb467500166c4658.mockapi.io/todos";
        axios.get(TODO_LIST_URL).then(response => {
            this.setState({
                todoList: response.data,
            })
        })
    }



    render() {
        return (
            <>
                <Row>
                    <Col span={24}>
                        <Row gutter={[16, 50]} justify="center" >
                            <Col span={10}>
                                <PageHeader title="Todo List" />
                            </Col>
                        </Row>
                    </Col>
                    <Col span={24}>
                        <Row gutter={[16, 50]} justify="center">
                            <Col span={10}>
                                <TodoList todoList={this.state.todoList}
                                    updateTodoList={this.updateTodoList} />
                            </Col>
                        </Row>
                    </Col>
                    <Col span={24}>
                        <Row justify="center">
                            <Col span={10}>
                                <TodoForm todoList={this.state.todoList}
                                    updateTodoList={this.updateTodoList} />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </>
        )
    }
}
