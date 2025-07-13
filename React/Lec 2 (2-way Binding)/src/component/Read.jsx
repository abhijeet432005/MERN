import React, { useState } from 'react'

const Render = (props) => {
    const users = props.users
    const setUsers = props.setUsers
    const renderUSer = users.map((elem, idx) => <li key={idx}>{elem.name}</li>)


    return (
        <div>
            <div>
                <ol>{renderUSer}</ol>
            </div>
        </div>
    )
}

export default Render
