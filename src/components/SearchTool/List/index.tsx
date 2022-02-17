import React, { FC, ReactElement } from "react";
import { List, Avatar, Space } from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';

const ListData: Array<{
    href: string,
    title: string,
    description: string,
    content: string
}> = []

for (let i = 0; i < 23; i++) {
    ListData.push({
      href: 'https://ant.design',
      title: `ant design part ${i}`,
      description:
        'Ant Design, a design language for background applications, is refined by Ant UED Team.',
      content:
        'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
    });
  }

const ResultList = () => {
    return (
        <div className="result-list">
            <List
                itemLayout="vertical"
                size="large"
                pagination={{
                    pageSize: 4,
                }}
                dataSource={ListData}
                footer={
                    <div>
                        <b>ant design</b> footer part
                    </div>
                }
                renderItem={item => (
                    <List.Item
                        key={item.title}
                        extra={
                            <img
                                width={272}
                                alt="logo"
                                src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                            />
                        }
                    >
                        <List.Item.Meta                           
                            title={<a href={item.href}>{item.title}</a>}
                            description={item.description}
                        />
                        {item.content}
                    </List.Item>
                )}
            />
        </div>
    )
}

export default ResultList