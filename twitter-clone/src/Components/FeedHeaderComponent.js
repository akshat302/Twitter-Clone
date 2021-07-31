import React from 'react';
import '../feed.css';
import StarOutlineOutlinedIcon from '@material-ui/icons/StarOutlineOutlined';

function FeedHeader() {
    return (
        <div>
            <div className='feed__header'>
                <h2>Home</h2>
                <StarOutlineOutlinedIcon />
            </div>
        </div>
        
    )
}

export default FeedHeader
