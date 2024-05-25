import React from "react";

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
                <div>
                <h1>{name}</h1>
                <p>{description}</p>
                </div>
            ):null}
        </React.Fragment>
    )

}