import * as React from 'react';
import { Box, TextField, Divider, Fab, Avatar, Grid, Container } from '@mui/material';
import {  blue, grey } from '@mui/material/colors';


export default function TweetInput() {
    return (
        <Container maxWidth="sm" sx={{ 
            border: 1, 
            borderColor: 'grey.200',
            borderRadius: 0,
            display: 'flex',
            justifyContent: 'center', 
            alignItems: 'center',
            height: 'auto',
            p: 2
        }}>
            <Box sx={{ width: '100%' }}>
                <Grid container spacing={0.5}>
                    <Grid item xs={1} md={1}>
                        <Avatar sx={{ bgcolor: blue[500]}}>J</Avatar>
                    </Grid>
                    <Grid item xs={11} md={11}>
                        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                            <TextField 
                                id="tweet_input" 
                                placeholder='What is happening?!' 
                                multiline 
                                maxRows={4} 
                                fullWidth
                                variant="standard"
                                InputProps={{ disableUnderline: true }}
                                sx={{
                                    "& .MuiInputBase-root": {
                                        border: 'none',
                                        outline: 'none',
                                        fontSize: '23px',
                                        color: grey[600]
                                    }
                                }}
                            />
                        </Box>
                        <Divider />
                        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2}}>
                            <Fab variant='extended' size='small' sx={{ 
                                px: 1.5, 
                                py: 2,
                                backgroundColor: blue[300],
                                '&:hover': {
                                    backgroundColor: blue[400]
                                }
                            }}>
                                Post
                            </Fab>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Container>
            
            
    )
}