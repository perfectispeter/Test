import React from 'react';
import './AppJson.css';
import Data from './events.json';

function AppJson() {
  return (
    <div className="AppJson">
      <div className="posts">
        { Data.map(post => {
          return(
            <div key={ post.id}>
              <h3>{ post.title}</h3>
              <p>{ post.end}</p>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default AppJson;