import React from 'react'
import Layout from '@theme/Layout';
import { Button, Popover, QRCode, Space, Tag } from 'antd';


const QQGroupCard = ({ link, title, number, available, maxNumber }) => {
    return (
        <div style={{ width: '20rem', height: '10rem', marginTop: '2rem', padding: '1rem', boxShadow: 'rgba(140, 152, 164, 0.176) 0px 10px 40px 10px', borderRadius: '8px' }}>
            <h2>{title}</h2>
            <span>群号:{number}
                <Tag color="blue" style={{ marginLeft: '0.8rem' }}>{maxNumber}人</Tag>
                {available ? <Tag color="green">可用</Tag> : <Tag color="red">已满</Tag>}
            </span>
            <br />
            <div style={{ display: 'flex', textAlign: 'center', alignItems: 'center', justifyContent: 'center' }}>
                <Space>
                    <Popover content={<>
                        <QRCode style={{}} value={link} />
                    </>} title="QQ扫码加入">
                        <Button type="primary" style={{ marginTop: '1rem' }}>二维码</Button>
                    </Popover>
                    <Button type="primary" href={link} target="_blank" style={{ marginTop: '1rem' }}>点击加入</Button>
                </Space>
            </div>
        </div>
    )
}


export default function QQGroup() {
    return (
            <Layout title='官方Q群'>
                <div style={{ marginTop: '10rem', marginBottom: '10rem', width: '100%', textAlign: 'center', alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
                    <h1 style={{ color: '#6495ED' }}>加入官方Q群</h1>
                    <QQGroupCard link={'https://qm.qq.com/q/LoocEAXr6Q'} title={'NetMount官方交流群'} number={'931722172'} available maxNumber={500}></QQGroupCard>
                </div>
            </Layout>
    )
}

