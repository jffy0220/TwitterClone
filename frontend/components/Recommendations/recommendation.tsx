import * as React from "react";
import { Container, ListItemAvatar, List, ListItem, ListItemText, Avatar, Typography, Grid, Button } from "@mui/material";
import { grey } from '@mui/material/colors';

interface FollowRecommendationProps {
    avatar: string,
    title: string,
    handle: string
}

/*
    To Do:
        Fix button location 
        Format button appropriately
*/

const whoToFollow = [
    {
        avatar: 'L',
        title: "Lipscomb Women's Backetball",
        handle: "LipscombWBB"
    },
    {
        avatar: 'J',
        title: "Justin Thomas",
        handle: "JustinThomas34"
    },
    {
        avatar: 'B',
        title: "Brooks Koepka",
        handle: "BKoepka"
    },
]


const Recommendations = () => {
    return (
        <Container maxWidth="md" sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: grey[100],
            borderRadius: 12,
            minWidth: '400px',
            marginTop: 1
        }}>
            <Typography variant="h5" sx={{ display: 'block', marginTop: 1, color: grey[700] }}>
                Who to Follow
            </Typography>
            <List sx={{ 
                width: 'auto', 
                overflow: 'hidden',
            }}>
                {whoToFollow.map((item, index) => (
                    <Grid container spacing={0.5} sx={{ flexWrap: 'nowrap' }}>
                        <Grid item>
                            <ListItem key={index} sx={{ 
                                minWidth: '100%', 
                                overflow: 'hidden',
                                '&:hover': {
                                    cursor: 'pointer',
                                    background: 'background.paper'
                                }
                            }}>
                                <ListItemAvatar>
                                    <Avatar>{item.avatar}</Avatar>
                                </ListItemAvatar>
                                <ListItemText primary={(<b>{item.title}</b>)} secondary={`@${item.handle}`} />
                            </ListItem>
                        </Grid>
                        <Grid item>
                            <Button sx={{ alignItems: 'center', justifyContent: 'center' }}>Follow</Button>
                        </Grid>
                    </Grid>
                    
                ))}
            </List>
        </Container>
    )
}

export default Recommendations;