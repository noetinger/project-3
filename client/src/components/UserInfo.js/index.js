//User Info Component

import React from 'react'
import './style.css';

function UserInfo(props){
    return (
        <div>
            <div className="card text-center">
                <div className="card-header card-title">
                    Name Here
                </div>
                <div className="card-body">
                    Email: firstName.lastName@email.com
                </div>
            </div>
        </div>
    )
}

export default UserInfo