import React, { Component } from 'react'
import { Layout } from 'antd';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import axios from 'axios';

const { Header, Footer, Content } = Layout;

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
            console.log(response.data);
            this.setState({
                todoList: response.data,
            })
        })
    }

    render() {
        return (
            <Layout>
                <Header>TodoList</Header>
                <Content>
                    <TodoList todoList={this.state.todoList} />
                </Content>
                <Footer>
                    <TodoForm updateTodoList={this.updateTodoList}/>
                </Footer>
            </Layout>
        )
    }
}
