import React from 'react';
import {Card , Button , Radio , Icon} from 'antd';

import './index.less';
const RadioGroup = Radio.Group;

export default class Buttons extends React.Component{
    state = {
        loading: false,
        iconLoading: false,
        value:"large"
    }
    
    enterLoading = () => {
        this.setState({ loading: true });
    }

    enterIconLoading = () => {
        this.setState({ iconLoading: true });
    }
    onChange = (e) =>{
        this.setState({
            value:e.target.value
        })
    }
    render(){
        return(
            <div>
                <Card
                    title="基础按钮"
                >
                    <Button type="primary">Primary</Button>
                    <Button>Default</Button>
                    <Button type="dashed">Dashed</Button>
                    <Button type="danger">Danger</Button>
                </Card>
                <br />
                <Card
                    title="图形按钮"
                >
                    <Button type="primary" shape="circle" icon="search" />
                    <Button type="primary" icon="search">Search</Button>
                    <Button shape="circle" icon="search" />
                    <Button icon="search">Search</Button>
                    
                    <Button shape="circle" icon="search" />
                    <Button icon="search">Search</Button>
                    <Button type="dashed" shape="circle" icon="search" />
                    <Button type="dashed" icon="search">Search</Button>
                </Card>
                <br />
                <Card
                    title="Loading按钮"
                >
                    <Button type="primary" loading>
                    Loading
                    </Button>
                    <Button type="primary" size="small" loading>
                    Loading
                    </Button>
                    <Button type="primary" loading={this.state.loading} onClick={this.enterLoading}>
                    Click me!
                    </Button>
                    <Button type="primary" icon="poweroff" loading={this.state.iconLoading} onClick={this.enterIconLoading}>
                    Click me!
                    </Button>
                    <Button shape="circle" loading />
                    <Button type="primary" shape="circle" loading />
                </Card>
                <br />
                <Card
                    title="尺寸按钮"
                >
                    <RadioGroup value={this.state.value} onChange={this.onChange}>
                        <Radio value="large">A</Radio>
                        <Radio value='default'>B</Radio>
                        <Radio value="small">C</Radio>
                    </RadioGroup>
                    <Button type="primary" size={this.state.value}>Primary</Button>
                    <Button size={this.state.value}>Normal</Button>
                    <Button type="dashed" size={this.state.value}>Dashed</Button>
                    <Button type="danger" size={this.state.value}>Danger</Button>
                    <br />
                    <Button type="primary" shape="circle" icon="download" size={this.state.value} />
                    <Button type="primary" shape="round" icon="download" size={this.state.value}>Download</Button>
                    <Button type="primary" icon="download" size={this.state.value}>Download</Button>
                    <br />
                    <Button.Group size={this.state.value}>
                    <Button type="primary">
                        <Icon type="left" />Backward
                    </Button>
                    <Button type="primary">
                        Forward<Icon type="right" />
                    </Button>
                    </Button.Group>


                </Card>
            </div>
        );
    }
}