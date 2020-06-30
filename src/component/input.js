import React from 'react'

export default function input(props) {
    return (
        <div>
            <form>
            <input type="text"  onChange={props.change}/>
            {/* <button type="button" onClick={props.change} >submit</button> */}
            </form>
        </div>
    )
}
