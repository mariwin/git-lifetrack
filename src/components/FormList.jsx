import React from 'react'; 
import { observer } from "mobx-react";
import { toJS } from 'mobx';
import { Row, Col, Table } from 'antd'; 
import Store from '../stores/Store';

const FormList = observer(() => {

    let dataSource = []
    let forecastList = toJS(Store.ob.forecastList)

    if (forecastList) {
      Object.keys(forecastList).forEach(key => dataSource.push(toJS(forecastList[key])))
    }

    const columns = [
      {
        title: 'Month Year',
        dataIndex: 'monthYear',
      },
      {
        title: 'No. of Studies',
        dataIndex: 'noStudies',
        render: text => <p>{text.toLocaleString()}</p>
      },
      {
        title: 'Cost Forecasted',
        dataIndex: 'costForecast',
        render: text => <p>{'$' + text.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</p>
      },
    ];
    return (
        <Row>
            <Col span={24}>
                <Table 
                  dataSource={dataSource} 
                  columns={columns} 
                  rowKey="monthYear" 
                  />;
            </Col>
        </Row> 
           
    );
})

export default FormList;