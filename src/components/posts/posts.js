import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setPosts, setPostsLoading, resetPostsLoading} from "../../redux/";

export const Posts = () => {
    const {posts, isPostsLoading} = useSelector(
        ({posts}) => posts
    );
    const dispatch = useDispatch();
    useEffect(() => {
        try {
            dispatch(setPostsLoading())
            fetch("https://jsonplaceholder.typicode.com/posts")
                .then(response => response.json())
                .then(response => dispatch(setPosts(response)))
        }catch (e){
            console.log(e)
        }finally {
            dispatch(resetPostsLoading())
        }
    }, []);

    if(isPostsLoading){
        return <div>LOADING</div>;
    }
    return (<div>
        {
            posts.map(({title, body}) => (
                <div>
                    <h4>{title}</h4>
                    <p>{body}</p>
                </div>
            ))
        }
    </div>);
}