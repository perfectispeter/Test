import React, { useState } from 'react'
import { Checkbox,Tag } from 'antd'; 
import './Category.css';

const tags = [
    {id:0,title:"Sport"},
    {id:1,title:"Art"},
    {id:2,title:"Information"},
    {id:3,title:"Events"},
    {id:4,title:"Bushfire Recovery"},
    {id:5,title:"Entertainment"},
    {id:6,title:"Social & Support Groups"},
    {id:7,title:"Young Families"},
    {id:8,title:"Seniors"},
    {id:9,title:"Youth"},
    {id:10,title:"All Ages"},
    {id:11,title:"Education & Training"}
]

const TagInfo = ({checkedValues, onTagClose}) => {
    return(
        <div>
            {checkedValues.map((value) =>(
                <Tag
                    closable
                    key={value}
                    onClose={() =>{
                        onTagClose(value)
                    }}
                >{`${getTitle(value)}`}</Tag>
            ))}
        </div>
    )
}

const Category = () => {
    const [checkedValues,setCheckedValues] = useState([])

    const onChange = (checkedValues) =>{
        setCheckedValues(checkedValues)
    }

    const onTagClose = (tagId) =>{
        const updatedCheckedValue = checkedValues.filter(
            (value) => value !== tagId
        )
        setCheckedValues(updatedCheckedValue)
    }

    return(
        <>
            <TagInfo 
                checkedValues={checkedValues} 
                onTagClose={onTagClose}
            />               
            <Checkbox.Group
                options={getOptions(tags)} 
                value={checkedValues} 
                onChange={onChange} 
            />  
        </>
    )
}

function getTitle(value) {
    return tags.find((tag) => tag.id === value)?.title
}

function getOptions(tags) {
    return tags.map(
        (tag) => ({
            label: tag.title,
            value: tag.id
        })
    )
}

export default Category;