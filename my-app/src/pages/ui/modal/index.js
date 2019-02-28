import React from 'react';

import {Card , Modal , Button} from 'antd';
import './index.less';

export default class Modals extends React.Component{
    state = {
        visible:false
    };
    showModel = () => {
        this.setState({
            visible:true
        });
    };
    handleOk = () =>{
        this.setState({
            visible:false
        });
    };
    handleCancel = () => {
        this.setState({
            visible:false
        })
    };
    showConfirmModel = (e) => {
        Modal.confirm({
            title: '提示',
            content: '确认删除吗？',
            okText: '是',
            cancelText: '否',
            onOk() {
                console.log('OK');
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    }
    render(){
        return(
            <div>
                <Card title="基础弹窗">
                    <Button type="primary" onClick={this.showModel}>基本弹窗</Button>
                    <Button type="primary" onClick={this.showConfirmModel}>确认弹窗</Button>
                </Card>
                <br />
                <Modal
                    title="标题"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    >
                    <p>这是基本弹窗</p>
                </Modal>
            </div>
        )
    }
}