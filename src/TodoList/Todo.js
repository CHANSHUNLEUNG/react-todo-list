import React, { Component } from 'react'
import { Typography, Button } from 'antd';
import { CloseOutlined } from '@ant-design/icons';

const { Text } = Typography;

export default class Todo extends Component {
    render() {
        const { item, changeTodoListStatus, deleteTodoList } = this.props;
        return (
            <>
                <Text delete={!item.status} onClick={changeTodoListStatus(item.id)}>
                    {item.id}. {item.content}
                </Text>
                <Button type="primary"
                    danger
                    shape="circle"
                    icon={<CloseOutlined />}
                    onClick={deleteTodoList(item.id)} />
            </>
        )
    }
}
