import * as React from 'react';
import { AppBar, Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

/*
    To Do:
        Need to find a better way to display Icons based on the links, perhaps adding in the Icon into the object itself?
*/

const drawerWidth = 240;

const navigationItems = [
    {
        text: 'Home',
        url: 'http://localhost:3000'
    },
    {
        text: 'Explore',
        url: 'http://localhost:3000/explore',
    },
    {
        text: 'Notifications',
        url: 'http://localhost:3000/notifications',
    },
    {
        text: 'Messages',
        url: 'http://localhost:3000/messages'
    }
]

export default function Nav() {
    return (
        <Box sx={{ display: 'flex' }}>
            <List>
                {navigationItems.map((item, index) => (
                    <ListItem key={item.text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                { index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    )
}