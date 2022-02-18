import React, { FC, ReactElement, useCallback, useReducer } from "react";
import { Row, Col } from 'antd'

import SearchInput from "../../components/SearchTool/Input";
import ResultList from "../../components/SearchTool/ResultList";
import { resultReducer } from "./reducer";
import { ACTION_TYPE, IRoom, IState, ISearch } from "./typings";

import './index.css'


function init (initResultList: IRoom[]):IState{
    return{
        resultList: initResultList
    }
}


const Home:FC = ():ReactElement => {

    const [state, dispatch] = useReducer(resultReducer,[],init)
    
    const getResultList = useCallback((searchSettings: ISearch):void=>{
        const result:IRoom[] = []
        dispatch({
            type: ACTION_TYPE.LOADING_RESULT,
            payload: result
        })
    },[])

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
                                getResultList = { getResultList }
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <ResultList
                                resultList = { state.resultList }
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