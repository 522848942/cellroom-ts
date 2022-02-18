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
    const inputRef = useRef<HTMLInputElement>(null);
    return (
        <div className="search-input">
            <Search
                placeholder="input search text"
                allowClear
                enterButton="Search"
                size="large"
                onSearch={()=>{console.log('hello')}}
            />
        </div>
    )
}

export default SearchInput