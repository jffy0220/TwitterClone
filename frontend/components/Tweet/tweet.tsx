import * as React from 'react';
import PropTypes from 'prop-types';
import { Container, Box, Grid, Avatar, Typography, IconButton } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'; // For favorites
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'; // For comments
import ReplyIcon from '@mui/icons-material/Reply'; // For replies
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'; // For bookmarking
import ShareIcon from '@mui/icons-material/Share'; // For sharing
import { TweetProps } from '../../types/Tweet';


const Tweet: React.FC<TweetProps> = ({ user, handle, date, content, views, comments, replies, favorites }) => {
    return (
        <Container maxWidth="sm">
            <Box sx={{ width: '100%', padding: 2 }}>
                <Grid container spacing={2} alignItems="center">
                    <Grid item xs={1}>
                        <Avatar>{user[0]}</Avatar> {/* Assuming user's first letter as Avatar */}
                    </Grid>
                    <Grid item xs={11}>
                        <Typography variant="subtitle2" component="span">
                            <b>{user}</b> @{handle} &bull; {date}
                        </Typography>
                        <Typography variant="body1" sx={{ display: 'block', marginTop: 1 }}>
                            {content}
                        </Typography>
                        <Typography variant="caption" sx={{ display: 'block', marginTop: 1 }}>
                            { `3:31 PM - ${date} - ${views} views `}
                        </Typography>
                        <Box sx={{ display: 'flex', marginTop: 1, gap: 1 }}>
                            <IconButton aria-label="add to favorites">
                                <FavoriteBorderIcon fontSize='small'/> 
                                <Typography variant="caption" sx={{ paddingLeft: 0.5 }}>
                                    {favorites}
                                </Typography>
                            </IconButton>
                            <IconButton aria-label="comment">
                                <ChatBubbleOutlineIcon fontSize='small'/> 
                                <Typography variant="caption" sx={{ paddingLeft: 0.5 }}>
                                {comments}
                                </Typography>
                            </IconButton>
                            <IconButton aria-label="reply">
                                <ReplyIcon fontSize='small'/> 
                                <Typography variant="caption" sx={{ paddingLeft: 0.5 }}>
                                {replies}
                                </Typography>
                            </IconButton>
                            <IconButton aria-label="bookmark">
                                <BookmarkBorderIcon fontSize='small'/>
                            </IconButton>
                            <IconButton aria-label="share">
                                <ShareIcon fontSize='small'/>
                            </IconButton>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    )
}

export default Tweet;