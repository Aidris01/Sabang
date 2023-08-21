 import { Table, Typography } from 'antd'
import React, { useState } from 'react'
import '../../pages/style/style.css'

function Village() {
  const [dataSource1, setDataSource1] = useState([
    {
      id: 1,
      village: 'AMCT',
      niraVillage: '134688.90'
    },
    {
      id: 2,
      village: 'AMKM',
      niraVillage: '103314.50'
    },
    {
      id: 3,
      village: 'AMSA',
      niraVillage: '16844.50'
    }
  ]);

  const [dataSource2A, setDataSource2A] = useState([
    {
      tapperName: 'amct.01',
      niraVolume: '10000'
    }
  ]);

  const [dataSource2B, setDataSource2B] = useState([
    {
      tapperName: 'amkm.01',
      niraVolume: '2500'
    },
    {
      tapperName: 'amkm.02',
      niraVolume: '300'
    }
  ]);

  const [dataSource2C, setDataSource2C] = useState([
    {
      tapperName: ' amsa.01',
      niraVolume: '200'
    }
  ])

  const columns1 = [
    {
      key: '1',
      title: 'ID',
      dataIndex: 'id',
      width: 50
    },
    {
      key: '2',
      title: 'Village',
      dataIndex: 'village',
      width: 700
    },
    {
      key: '3',
      title: 'Nira Volume',
      dataIndex: 'niraVillage',
      width: 700
    }
  ];

  const columns2 = [
    {
      key: '1',
      title: 'Tapper Name',
      dataIndex: 'tapperName'
    },
    {
      key: '2',
      title: 'Nira Volume',
      dataIndex: 'niraVolume'
    }
  ];

  return (
    <div className='content'>
      <Typography.Title level={4}>Village</Typography.Title>
      <div className='village'>
        <Table
          size='small'
          columns={columns1}
          dataSource={dataSource1}
          expandable={{
            expandedRowRender: (record) => (
              <div>
                {record.village === 'AMCT' && (
                  <Table
                    columns={columns2}
                    dataSource={dataSource2A}
                  />
                )}
                {record.village === 'AMKM' && (
                  <Table
                    columns={columns2}
                    dataSource={dataSource2B}
                  />
                )}
                {record.village === 'AMSA' && (
                  <Table 
                  columns={columns2}
                  dataSource={dataSource2C}
                  />
                )}
              </div>
            )
          }}
        />
      </div>
    </div>
  );
}

export default Village;
