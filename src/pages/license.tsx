import React from 'react'
import Layout from '@theme/Layout';
import { Button, Popover, QRCode, Space, Tag } from 'antd';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

const LicenseBox = ({ url,title }: { url: string ;title: string }) => {
    const [licenseStr, setLicenseStr] = React.useState('正在加载...');
    React.useEffect(() => {
        fetch(url).then(res => res.text()).then((data) => {
            setLicenseStr(data);
        })
    }, [])

    return <div style={{ width: '40rem'}}>
        <span style={{ fontSize: '1.2rem' ,fontWeight: 'bold' }}>{title}</span>
        <div style={{height: '40rem', overflowY: 'auto', textAlign: 'justify', margin: '0 auto' }}>
        <p style={{ fontSize: '0.8rem', whiteSpace: 'pre-wrap' }}>{licenseStr}</p>
    </div>
    </div>
}

export default function License() {
    return (
        <Layout title='License'>
            <div style={{ marginTop: '5rem', marginBottom: '2rem', width: '100%', textAlign: 'center', alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
                <h1 style={{ color: '#6495ED' }}>许可证</h1>
                <br /><br />
                <Tabs>
                    <TabItem value="NetMount" default >
                        <LicenseBox title='AGPL-3.0 License' url={'//cdn.jsdelivr.net/gh/VirtualHotBar/NetMount/LICENSE'} />
                    </TabItem>
                    <TabItem value="Rclone">
                        <LicenseBox title='MIT License' url={'//cdn.jsdelivr.net/gh/rclone/rclone/COPYING'} />
                    </TabItem>
                </Tabs>
            </div>
        </Layout>
    )
}

