import React from 'react'
import { Button, Avatar } from '@material-ui/core'
import '../feed.css'

function TweetBox() {
    return (
        <div className="app__tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src='https://material-ui.com/static/images/avatar/1.jpg' />
                    <input placeholder="What's happening?"></input>
                </div>
                <div className='tweetBox_uploadImg'>
                    <input  placeholder="Optional: Enter image URL"></input>
                </div>  
                <Button className="tweetBox__button">Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox
