import React from "react";
import { Row, Col } from 'antd'

import SearchInput from "../../components/SearchTool/Input";
import ResultList from "../../components/SearchTool/List";

import './index.css'

const Home = () => {
    return (
        <div className="home">
            <Row justify="center" >
                <Col span={18}>
                    <Row>
                        <div className="main"></div>
                    </Row>
                    <Row>
                        <div className="main2">Cellroom</div>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <SearchInput />
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <ResultList />
                        </Col>
                    </Row>
                    <Row>
                        <div className="main"></div>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export default Home