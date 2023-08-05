import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../redux/actions/apiActions";
import { useNavigate } from "react-router-dom";
import { addToDetails } from "../redux/actions/detailsActions";
// import rect from "../images/rect.png";
import search from "../images/search.png";

const HomePage = () => {
    const { loading, posts, error } = useSelector(state => state.posts);
    console.log(loading, posts, error)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch])

    function handleCardDetails(post) {
        dispatch(addToDetails(post));
        navigate(`/item/${post.id}`);
    }

    if (loading) return <h1>Loading...</h1>
    if (error) return <h1>{error}</h1>

    return (
        <>
  <div id='head'>
        <h1>Social Media For Travellers</h1>
      </div>
      <div  id="search">
        {/* <img src={rect} alt="rect-img"/> */}
        <div id="search-in">
        <img src={search} alt="search icon"/>
        <h3>Search here...</h3>
        </div>
      </div>
        <div className="home-container">
        
            {posts && posts.map((post) => {
                return (
                    <div className="post" key={post.id} onClick={() => {
                        handleCardDetails(post)
                    }}>
                        <img src={`https://picsum.photos/200?random=${post.id}`} alt={post.title} />
                        {/* <p>User ID: {post.userId}</p> */}
                        <h3>Title: {post.title.slice(0, 10)}...</h3>
                        <p>Body: {post.body.slice(0, 70)},{post.body.slice(0, 40)}<span id="read">,Read More...</span></p>
                        {/* <span>Read More...</span> */}
                    </div>
                )
            })}
        </div>
        </>
    )
}

export default HomePage