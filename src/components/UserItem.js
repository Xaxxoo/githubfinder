import React from 'react';
import PropTypes from 'prop-types'


const UserItem = ({user: { login, avatar_url, html_url }}) => {
    
      
      return (
          <div>
              <img src={avatar_url} alt='' />
              <h3>{login}</h3>
            <a href={html_url}>More</a> 
          </div>
      );
    
}

UserItem.propTypes = {
    user: PropTypes.object.isRequired,
};

export default UserItem;
