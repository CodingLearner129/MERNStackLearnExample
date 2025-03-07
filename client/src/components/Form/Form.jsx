import { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@mui/material';
import FileBase from 'react-file-base64';
import useStyles from './styles';
import { useSelector, useDispatch } from 'react-redux';
import { createPost, updatePost } from '../../actions/posts';
import { decryptData } from '../../helpers/ecrypt_decrypt';

const From = ({ currentId, setCurrentId }) => {
    const post = useSelector((state) => currentId ? state.posts.find((currentPost) => currentPost._id === currentId) : null);
    const [postData, setPostData] = useState({
        title: '',
        message: '',
        tags: '',
        selectedFile: ''
    });
    const [key, setKey] = useState(Date.now()); // Unique key for FileBase
    const classes = useStyles(); // useStyles hook for styling
    const dispatch = useDispatch();
    
    const user = localStorage.getItem('profile') ? JSON.parse(decryptData(localStorage.getItem('profile'))) : null;
    useEffect(() => {
        if (post) setPostData(post)
    }, [post]);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (currentId) {
            dispatch(updatePost(currentId, {...postData, name: user?.result?.name}));
        } else {
            dispatch(createPost({...postData, name: user?.result?.name}));
        }
        clear();
    }

    const clear = () => {
        setCurrentId(null);
        setPostData({ title: '', message: '', tags: '', selectedFile: '' });
        setKey(Date.now()); // Update the key to force re-render of FileBase
    }

    if (!user?.result?.name) {
        return (
            <Paper className={classes.paper}>
                <Typography variant='h6' align="center">
                    Please Sign In to create your own memories and like other's memories
                </Typography>
            </Paper>
        )
    }

    return (
        <>
            <Paper className={classes.paper} elevation={6}>
                <form autoComplete='off' noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                    <Typography variant='h6'>{currentId ? 'Edit' : 'Create'} a Memory</Typography>
                    {/* <TextField name='creator' variant='outlined' label="Creator" fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })} /> */}
                    <TextField name='title' variant='outlined' label="Title" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
                    <TextField name='message' variant='outlined' label="Message" fullWidth value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
                    <TextField name='tags' variant='outlined' label="Tags" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })} />
                    <div className={classes.fileInput}>
                        <FileBase 
                        // key={postData.selectedFile} // Add this key prop to force re-render
                        key={key} // Add this key prop to force re-render
                        type="file" multiple={false} onDone={({ base64 }) => {setPostData({ ...postData, selectedFile: base64 })}} />
                    </div>
                    <Button className={classes.buttonSubmit} variant='contained' color='success' size='large' type='submit' fullWidth>Submit</Button>
                    <Button className={classes.buttonSubmit} variant='contained' color='error' size='small' onClick={clear} fullWidth>Clear</Button>
                </form>
            </Paper>
        </>
    )
}
export default From;
