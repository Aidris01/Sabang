import { Space } from 'antd';
import React from 'react'
import Header from '../header/header';
import AppRoute from '../route/route'
import SideBar from '../sidebar/sidebar';
import './pageContent.css';

function PageContent() {
    return (
        <div className='page'>
            <Header />
            <Space className='page-content'>
                <SideBar />
                <AppRoute />
            </Space>
        </div>
    )
}

export default PageContent