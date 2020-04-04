import "@babel/polyfill";
import React, {Component} from "react";
import ReactDOM from "react-dom";
import FormData from '../components/FormData';
import FormList from '../components/FormList';
import { Layout, Divider } from 'antd';

const { Header, Content } = Layout;

class App extends Component
{

    constructor(props)
    {
        super(props);
    }

    render() {
        return (
            <Layout style={{ backgroundColor: '#FFF' }}>  
                <h2 style={{ backgroundColor: '#FFF' }}> Lifetrack Medical Cost Forecast</h2>
                <Content style={{ backgroundColor: '#FFF' }}>
                    <Divider/>
                    <FormData/>
                    <Divider/>
                    <FormList/>
                </Content>
            </Layout>
        );
    }

}

export default App;

const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<App />, wrapper) : false;