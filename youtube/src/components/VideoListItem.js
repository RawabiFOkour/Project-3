import React from 'react';

const VideoListItem = (props) => {
   
    const {video,onUserSelected} =props;
    const imageUrl = video.snippet.thumbnails.default.url;

    return (
        /*render video list item component  */
    <li onClick={() => onUserSelected(video)} className="list-group-item">
        <div className="media">
            <div className="media-left">
                <img className="media-object" src={imageUrl} />
            </div>
            <div className="media-body">
                <div className="media-heading">{video.snippet.title}</div>
            </div>
        </div>
    </li>
    );
};

export default VideoListItem;