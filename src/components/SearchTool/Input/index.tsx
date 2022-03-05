import React, { FC, ReactElement, useRef } from "react";
import { Input } from 'antd'
import { ISearch } from "../../../containers/home/typings";

const { Search } = Input
interface IProps {
    getResultList: (searchSettings: ISearch)=>void;
}


const SearchInput:FC<IProps> = ({
    getResultList
}):ReactElement => {

    const search = (input:string):void =>{
        getResultList({
            input: input
        })
    }
    
    return (
        <div>
            <Search
                className="search-input"
                placeholder="input search text"
                allowClear
                enterButton="Search"
                size="large"
                onSearch={(val)=>{search(val)}}
            />
        </div>
    )
}

export default SearchInput