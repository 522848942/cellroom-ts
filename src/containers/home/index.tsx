import React, { FC, ReactElement, useCallback, useReducer } from "react";
import { Row, Col } from 'antd'

import SearchInput from "../../components/SearchTool/Input";
import ResultList from "../../components/SearchTool/ResultList";
import { resultReducer } from "./reducer";
import { ACTION_TYPE, IRoom, IState, ISearch } from "./typings";

import './index.css'


function init(initResultList: IRoom[]): IState {
    return {
        resultList: initResultList
    }
}


const Home: FC = (): ReactElement => {

    const [state, dispatch] = useReducer(resultReducer, [], init)

    const getResultList = useCallback((searchSettings: ISearch): void => {
        
        //此处加网络请求
        const result: IRoom[] = []
        for (let i = 0; i < 23; i++) {
            result.push({
                href: 'https://ant.design',
                title: `ant design part ${i}`,
                description:
                    'Ant Design, a design language for background applications, is refined by Ant UED Team.',
                content:
                    'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
            });
        }
        dispatch({
            type: ACTION_TYPE.LOADING_RESULT,
            payload: result
        })
    }, [])
        //测试
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
                            <SearchInput
                                getResultList={getResultList}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <ResultList
                                resultList={state.resultList}
                            />
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