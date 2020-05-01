import React from 'react'
import loadingIcon from '../images/gif/loading-arrow.gif'

export default function Loading() {
    return (
        <div className="loading">
            <h4>Loading...</h4>
            <img src={loadingIcon} alt="" />
        </div>
    )
}
