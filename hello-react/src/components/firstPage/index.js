import React , {Component} from 'react';

import {Table , Divider , Tag} from 'antd'
const { Column } = Table;

export default class FirstPage extends Component{
    constructor(porps){
        super(porps)
        console.log(porps)
    }

    render () {
        const data = [{
            key: '1',
            firstName: 'John',
            lastName: 'Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
            tags: ['nice', 'developer'],
        }, {
            key: '2',
            firstName: 'Jim',
            lastName: 'Green',
            age: 42,
            address: 'London No. 1 Lake Park',
            tags: ['loser'],
        }, {
            key: '3',
            firstName: 'Joe',
            lastName: 'Black',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
            tags: ['cool', 'teacher'],
        }];
        return(
            <div className="firstPage">
                <Table dataSource={data} pagination={false}>
                    <Column
                        title="First Name"
                        dataIndex="firstName"
                        key="firstName"
                    />
                    <Column
                        title="Last Name"
                        dataIndex="lastName"
                        key="lastName"
                    />
                    <Column
                    title="Age"
                    dataIndex="age"
                    key="age"
                    />
                    <Column
                    title="Address"
                    dataIndex="address"
                    key="address"
                    />
                    <Column
                    title="Tags"
                    dataIndex="tags"
                    key="tags"
                    render={tags => (
                        <span>
                        {tags.map(tag => <Tag color="blue" key={tag}>{tag}</Tag>)}
                        </span>
                    )}
                    />
                    <Column
                    title="Action"
                    key="action"
                    render={(text, record) => (
                        <span>
                        <Divider type="vertical" />
                        </span>
                    )}
                    />
                </Table>
               
            </div>
        )
    }
}