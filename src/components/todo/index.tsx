import React from "react";
import './style.css'
interface ITodo{
    name:string,
    description:string,
    status:boolean
}
export default function Todo(props:ITodo){
    const {name,description,status}=props;
    return(
        <React.Fragment>
            {status?(
                <div className="todo">
                <h1 className="title">{name}</h1>
                <p className="desc">{description}</p>
                </div>
            ):null}
        </React.Fragment>
    )

}