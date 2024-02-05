export interface TweetProps {
    user: string,
    handle: string,
    date: string,
    content: string,
    views?: number,
    comments?: number,
    replies?: number,
    favorites?: number
};