import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import share from '../images/share.png';
import Layer from '../images/Layer.png';

const DetailsPage = () => {
  const { post } = useSelector((state) => state.detailsCard);

  const [activeButton, setActiveButton] = useState('detail');

  if (!post) return <h1>Loading...</h1>;

  const handleDetailClick = () => {
    setActiveButton('detail');
  };

  const handleUserInfoClick = () => {
    setActiveButton('userInfo');
  };

  return (
    <div className='divi'>
      <div className='details-container'>
        <h2>Post Number {post.id}</h2>
        <img src={`https://picsum.photos/200?random=${post.id}`} alt={post.title} />
        <div className='card'>
          <h3>Post Title: {post.title && post.title.slice(0, 8)}</h3>
          <img src={share} alt='Share Icon' />
          <img src={Layer} alt='Heart Icon' />
        </div>
      </div>
      <div className='details-container1' id='side'>
        <button
          className={`btn ${activeButton === 'detail' ? 'active' : ''}`}
          onClick={handleDetailClick}
        >
          Detail
        </button>
        <button
          className={`btn1 ${activeButton === 'userInfo' ? 'active' : ''}`}
          onClick={handleUserInfoClick}
        >
          User Info
        </button>
        {activeButton === 'detail' ? (
          <div>
            <h3>Title: {post.title}</h3>
            <p>Body: {post.body}</p>
          </div>
        ) : (
          <div>
            <p>Post was posted by User ID: {post.id}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DetailsPage;