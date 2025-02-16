import { Container, Grow, Paper, AppBar, TextField, Button } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { useNavigate, useLocation } from "react-router-dom";
import { MuiChipsInput } from 'mui-chips-input';
import Posts from '../Posts/Posts';
import Form from '../Form/Form';
import useStyles from './styles';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getPosts, getPostsBySearch } from '../../actions/posts';
import Paginate from '../Paginate';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const Home = () => {
    const [currentId, setCurrentId] = useState(null);
    const classes = useStyles(); // useStyles hook for styling
    const dispatch = useDispatch();
    // console.log("app");
    const query = useQuery();
    const navigate = useNavigate();
    const page = query.get('page') || 1;
    const searchQuery = query.get('searchQuery');
    const [search, setSearch] = useState('');
    const [tags, setTags] = useState([]);

    // useEffect(() => {
    //     // console.log("app userEffect");
    //     dispatch(getPosts());
    // }, [dispatch]); // Include dispatch in the dependency array

    const handleKeyPress = (e) => {
        if (e.keyCode === 13) {
            //search
        }
    }
    const handleAddChip = (tag) => setTags([...tags, tag]);

    const handleDeleteChip = (chipToDelete) => setTags(tags.filter((tag) => tag !== chipToDelete));

    const searchPost = () => {
        if (search.trim() || tags.length > 0) {
            dispatch(getPostsBySearch({ search, tags: tags.join(',') }));
            navigate(`/posts/search?searchQuery=${search}&tags=${tags.join(',')}`);
        } else {
            navigate('/');
        }
    }

    return (
        <>
            <Grow in>
                <Container maxWidth="xl">
                    <Grid className={`${classes.mainContainer} ${classes.girdContainer}`} container justifyContent="space-between" alignItems="stretch" spacing={3}>
                        <Grid size={{ xs: 12, sm: 7 }}>
                            <Posts setCurrentId={setCurrentId} />
                        </Grid>
                        <Grid size={{ xs: 12, sm: 4 }}>
                            <AppBar className={classes.appBarSearch} position='static' color="inherit">
                                <TextField
                                    name='search'
                                    variant='outlined'
                                    label="Search Memories"
                                    onKeyDown={handleKeyPress}
                                    fullWidth
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                />
                                <MuiChipsInput
                                    style={{ margin: '10px 0' }}
                                    value={tags}
                                    onAddChip={handleAddChip}
                                    onDeleteChip={handleDeleteChip}
                                    label="Search Tags"
                                    variant='outlined'
                                />
                                <Button onClick={searchPost} className={classes.searchButton} variant="contained" color="primary">Search</Button>
                            </AppBar>
                            <Form currentId={currentId} setCurrentId={setCurrentId} />
                            {(!searchQuery && !tags.length) && (
                                <Paper className={classes.pagination} elevation={6}>
                                    <Paginate page={page} />
                                </Paper>
                            )}
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </>
    )
}

export default Home;
