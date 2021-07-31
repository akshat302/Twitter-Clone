import React from 'react'
import '../Sidebar.css'
import SidebarOptions from './SidebarOptionsComponent'
import HomeIcon from '@material-ui/icons/Home';
import ExploreIcon from '@material-ui/icons/Explore';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MessageIcon from '@material-ui/icons/Message';
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PersonIcon from '@material-ui/icons/Person';
import MoreIcon from '@material-ui/icons/More';
import { Button } from '@material-ui/core';

function Sidebar() {
    return (
        <div>
            <img
                className="app__sidebarLogo"
                src="https://img.icons8.com/color/48/000000/twitter--v1.png"
                alt="" 
            />
            <div className="app__sidebarOptions">
                <SidebarOptions Icon={HomeIcon} option={'Home'} />
                <SidebarOptions Icon={ExploreIcon} option={'Explore'} />
                <SidebarOptions Icon={NotificationsIcon} option={'Notifications'} />
                <SidebarOptions Icon={MessageIcon} option={'Messages'} />
                <SidebarOptions Icon={BookmarkBorderOutlinedIcon} option={'Bookmarks'} />
                <SidebarOptions Icon={ListAltIcon} option={'Lists'} />
                <SidebarOptions Icon={PersonIcon} option={'Profile'} />
                <SidebarOptions Icon={MoreIcon} option={'More'} />
            </div>
            
            <Button variant='outlined' className='button__tweet' fullWidth>Tweet</Button>
        </div>
    )
}

export default Sidebar
