import React, { Component } from 'react'
import { Layout } from 'antd';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
const { Header, Footer, Content } = Layout;

export default class TodoContainer extends Component {
    render() {
        return (
            <Layout>
                <Header>TodoList</Header>
                <Content>
                    <TodoList />
                </Content>
                <Footer>
                    <TodoForm />
                </Footer>
            </Layout>
        )
    }
}
