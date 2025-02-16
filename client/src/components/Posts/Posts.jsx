import { useSelector } from "react-redux";
import { CircularProgress } from '@mui/material';
import Grid from '@mui/material/Grid2';

import Post from "./Post/Post.jsx";
import useStyles from './styles';

const Posts = ({ setCurrentId }) => {
    const { posts, isLoading } = useSelector((state) => state.posts);
    const classes = useStyles(); // useStyles hook for styling
    
    if(!posts?.length && !isLoading) return 'No Posts';

    return (
        // !posts.length ? (<><CircularProgress /></>) : (<>
        isLoading ? (<><CircularProgress /></>) : (<>
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {posts.map((post) => (
                    <Grid key={post._id} size={{ xs: 12, sm: 12, md: 6 }}>
                        <Post post={post} setCurrentId={setCurrentId} />
                    </Grid>
                ))}
            </Grid>
        </>)
    )
}
export default Posts;