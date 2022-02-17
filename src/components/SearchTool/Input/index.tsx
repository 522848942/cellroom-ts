import React from "react";
import { Input } from 'antd'

const { Search } = Input

const SearchInput = () => {
    return (
        <div className="search-input">
            <Search
                placeholder="input search text"
                allowClear
                enterButton="Search"
                size="large"
                onSearch={()=>{}}
            />
        </div>
    )
}

export default SearchInput