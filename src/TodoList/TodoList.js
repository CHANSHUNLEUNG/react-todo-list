import React, { Component } from 'react'
import axios from 'axios';

export default class TodoList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             todoList: [],
        }
    }

    componentDidMount(){
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
            <div>
                {this.state.todoList.map((oneTodo) => {
                    console.log(oneTodo);
                    console.log("next");
                    return "";
                })}
            </div>
        )
    }
}
