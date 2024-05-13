import React from 'react'
import Layout from '@theme/Layout';
import { Button, Popover, QRCode, Space, Tag } from 'antd';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


export default function License() {
    return (
        <Layout title='Contract'>
            <div style={{ marginTop: '5rem', marginBottom: '2rem', width: '100%', textAlign: 'center', alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
                <h1 style={{ color: '#6495ED' }}>用户协议</h1>
                <br /><br />
                <div style={{ width: '40rem' }}>
                    <div style={{ height: '40rem', overflowY: 'auto', textAlign: 'justify', margin: '0 auto' }}>
                        <p style={{ fontSize: '0.8rem', whiteSpace: 'pre-wrap' }}>
                            除官网访问统计外，NetMount不会收集任何用户信息，也不会以任何方式使用您的数据。
                            <br /><br />
                            用户在使用NetMount时，造成的任何损失，开发者概不负责。
                            <br /><br />
                            用户协议的最终解释权归VirtualHotBar所有。
                        </p>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

