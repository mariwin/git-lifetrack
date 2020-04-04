import React from 'react'; 
import { observer } from "mobx-react";
import {  Row, Col, Form, InputNumber, Button } from 'antd';
import Store from '../stores/Store';

const layout = {
    labelCol: { span: 10 },
    wrapperCol: { span: 8 },
};
const tailLayout = {
    wrapperCol: { offset: 10, span: 8 },
};

const FormData = observer(() => {
    const onFinish = values => {
        //console.log('Success:', values);
        Store.actions.getApi(values);
    };
    
    const onFinishFailed = errorInfo => {
        //console.log('Failed:', errorInfo);
    };

    const onChangeCurrNumStudy = value => {
        //console.log('changed', value);
    }

    const onChangeNoStudyGrowth = value => {
        //console.log('changed', value);
    }

    const onChangeNoMonthForecast = value => {
        //console.log('changed', value);
    }

    return (
        <Row>
            <Col span={24}>
                <Form
                    {...layout}
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    >
                    <Form.Item
                        label="Current No. of Study Per Day"
                        name="currNumStudy"
                        rules={[{ required: true, message: 'Please input No. of Study Per Day!' }]}
                    >
                        <InputNumber 
                            min={1} 
                            formatter={value => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                            parser={value => value.replace(/\$\s?|(,*)/g, '')}
                            style={{ width: '100%' }}
                            onChange={onChangeCurrNumStudy} />
                    </Form.Item>

                    <Form.Item
                        label="No. of Study Growth Per Month"
                        name="noStudyGrowth"
                        rules={[{ required: true, message: 'Please input No. of Study Growth Per Month!' }]}
                    >
                        <InputNumber 
                            min={1} 
                            max={100}
                            formatter={value => `${value}%`} 
                            parser={value => value.replace('%', '')}
                            style={{ width: '100%' }} 
                            onChange={onChangeNoStudyGrowth} 
                        />
                    </Form.Item>

                    <Form.Item
                        label="No. of Months to Forecast"
                        name="noMonthForecast"
                        rules={[{ required: true, message: 'Please input No. of Months to Forecast!' }]}
                    >
                        <InputNumber 
                            min={1} 
                            style={{ width: '100%' }}
                            onChange={onChangeNoMonthForecast} 
                        />
                    </Form.Item>

                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit">
                        Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Col>
            </Row> 
    
    );
})

export default FormData;