import { Card, CardActions, CardContent, CardMedia, Button, Typography, ButtonBase } from '@mui/material';
import { ThumbUpAlt, Delete, MoreHoriz } from '@mui/icons-material';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { deletePost, likePost } from '../../../actions/posts';
import { useNavigate } from "react-router-dom";
import useStyles from './styles';
import { decryptData } from '../../../helpers/ecrypt_decrypt';

const Post = ({ post, setCurrentId }) => {
    const classes = useStyles(); // useStyles hook for styling
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = localStorage.getItem('profile') ? JSON.parse(decryptData(localStorage.getItem('profile'))) : null;

    const openPost = () => navigate(`/posts/${post._id}`);

    const Likes = () => {
        if (post.likes?.length > 0) {
            return post.likes.find(like => like == (user?.result?.sub || user?.result?._id)) ?
                <>
                    <ThumbUpAlt fontSize='small' />&nbsp;{post.likes.length > 2 ? `You and ${post.likes.length - 1} others` : `${post.likes.length} like${post.likes.length > 1 ? 's' : ''}`}
                </> : <>
                    <ThumbUpAlt fontSize="small" />&nbsp;{post.likes.length} {post.likes.length === 1 ? 'Like' : 'Likes'}
                </>
        }
        return <>
            <ThumbUpAlt fontSize='small' />&nbsp;like
        </>
    }

    return (
        <>
            <Card className={classes.card} raised elevation={6}>
                {/* <ButtonBase className={classes.cardAction} onClick={openPost}> */}
                {/* Use div instead of ButtonBase to avoid nesting */}
                <div className={classes.cardAction} onClick={openPost} style={{ cursor: 'pointer' }}>
                    <CardMedia className={classes.media} image={post.selectedFile} title={post.title} />
                    <div className={classes.overlay}>
                        <Typography variant='h6'>{post.name}</Typography>
                        <Typography variant='body2'>{post.updated_at > 0 ? moment.unix(post.updated_at).fromNow() : moment.unix(post.created_at).fromNow()}</Typography>
                    </div>
                    {post?.creator == (user?.result?.sub || user?.result?._id) && (
                        <div className={classes.overlay2}>
                            <Button style={{ color: 'white' }} size='small' onClick={() => setCurrentId(post._id)}>
                                <MoreHoriz fontSize='default' />
                            </Button>
                        </div>
                    )}
                    <div className={classes.details}>
                        <Typography variant='body2' color='textSecondary'>{post.tags.map((tag) => `#${tag} `)}</Typography>
                    </div>
                    <Typography className={classes.title} variant='h5' gutterBottom>{post.title}</Typography>
                    <CardContent>
                        <Typography variant='body2' color='textSecondary' component="p">{post.message}</Typography>
                    </CardContent>
                {/* </ButtonBase> */}
                </div>
                <CardActions className={classes.cardActions}>
                    <Button size='small' color='primary' style={{ color: "#d6002b" }} disabled={!user?.result} onClick={() => dispatch(likePost(post._id))}>
                        {/* <ThumbUpAlt fontSize='small' />&nbsp;Like&nbsp;{post.likeCount} */}
                        <Likes />
                    </Button>
                    {post?.creator == (user?.result?.sub || user?.result?._id) && (
                        <Button size='small' color='primary' style={{ color: "#d6002b" }} onClick={() => dispatch(deletePost(post._id))}>
                            <Delete fontSize='small'>Delete</Delete>
                        </Button>
                    )}
                </CardActions>
            </Card>
        </>
    )
}
export default Post;