import React, { Component } from 'react';
import UserItem from '../UserItem';

class User extends Component {
  state = {
   users: [
      {
login: "mojombo",
id: 1,
node_id: "MDQ6VXNlcjE=",
avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
gravatar_id: "",
url: "https://api.github.com/users/mojombo",
html_url: "https://github.com/mojombo",
followers_url: "https://api.github.com/users/mojombo/followers",
following_url: "https://api.github.com/users/mojombo/following{/other_user}",
},
{
login: "defunkt",
id: 2,
node_id: "MDQ6VXNlcjI=",
avatar_url: "https://avatars.githubusercontent.com/u/2?v=4",
gravatar_id: "",
url: "https://api.github.com/users/defunkt",
html_url: "https://github.com/defunkt",
followers_url: "https://api.github.com/users/defunkt/followers",
following_url: "https://api.github.com/users/defunkt/following{/other_user}",
},
{
login: "pjhyett",
id: 3,
node_id: "MDQ6VXNlcjM=",
avatar_url: "https://avatars.githubusercontent.com/u/3?v=4",
gravatar_id: "",
url: "https://api.github.com/users/pjhyett",
html_url: "https://github.com/pjhyett",
followers_url: "https://api.github.com/users/pjhyett/followers",
following_url: "https://api.github.com/users/pjhyett/following{/other_user}",
},
{
login: "wycats",
id: 4,
node_id: "MDQ6VXNlcjQ=",
avatar_url: "https://avatars.githubusercontent.com/u/4?v=4",
gravatar_id: "",
url: "https://api.github.com/users/wycats",
html_url: "https://github.com/wycats",
followers_url: "https://api.github.com/users/wycats/followers",
following_url: "https://api.github.com/users/wycats/following{/other_user}",
},
  ]
}
  render() {
    return (
      <div>
        {this.state.users.map(user => (
          
          <UserItem key={user.id} user={user}/>
        ))}
      </div>
    )
  }
}



export default User;