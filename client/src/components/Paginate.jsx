import React, { useEffect } from 'react';
import { Pagination, PaginationItem } from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import useStyles from './styles';
import { getPosts } from '../actions/posts';

const Paginate = ({ page }) => {
    const { totalPages } = useSelector((state) => state.posts);
    const classes = useStyles(); // useStyles hook for styling
    const dispatch = useDispatch();
    useEffect(() => {
        if (page) {
            dispatch(getPosts(page));
        }
    }, [page]); // Include dispatch in the dependency array
    return (
        <>
            <Pagination
                classes={{ ul: classes.ul }}
                count={totalPages}
                page={Number(page) || 1}
                variant="outlined"
                color="primary"
                renderItem={(item) => (
                    <PaginationItem {...item} component={Link} to={`/posts?page=${1}`} />
                )}
            />
        </>
    )
}

export default Paginate
