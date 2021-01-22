import React, { Component } from "react";
import UserItem from "./UserItem";

class Users extends Component {
    state = {
        users: [
            {
                login: "brad",
                id: 1614,
                node_id: "MDQ6VXNlcjE2MTQ=",
                avatar_url: "https://avatars.githubusercontent.com/u/1614?v=4",
                gravatar_id: "",
                url: "https://api.github.com/users/brad",
                html_url: "https://github.com/brad",
                followers_url: "https://api.github.com/users/brad/followers",
                following_url:
                    "https://api.github.com/users/brad/following{/other_user}",
                gists_url: "https://api.github.com/users/brad/gists{/gist_id}",
                starred_url:
                    "https://api.github.com/users/brad/starred{/owner}{/repo}",
                subscriptions_url:
                    "https://api.github.com/users/brad/subscriptions",
                organizations_url: "https://api.github.com/users/brad/orgs",
                repos_url: "https://api.github.com/users/brad/repos",
                events_url:
                    "https://api.github.com/users/brad/events{/privacy}",
                received_events_url:
                    "https://api.github.com/users/brad/received_events",
                type: "User",
                site_admin: false,
                score: 1,
            },
            {
                login: "bradtraversy",
                id: 5550850,
                node_id: "MDQ6VXNlcjU1NTA4NTA=",
                avatar_url:
                    "https://avatars.githubusercontent.com/u/5550850?v=4",
                gravatar_id: "",
                url: "https://api.github.com/users/bradtraversy",
                html_url: "https://github.com/bradtraversy",
                followers_url:
                    "https://api.github.com/users/bradtraversy/followers",
                following_url:
                    "https://api.github.com/users/bradtraversy/following{/other_user}",
                gists_url:
                    "https://api.github.com/users/bradtraversy/gists{/gist_id}",
                starred_url:
                    "https://api.github.com/users/bradtraversy/starred{/owner}{/repo}",
                subscriptions_url:
                    "https://api.github.com/users/bradtraversy/subscriptions",
                organizations_url:
                    "https://api.github.com/users/bradtraversy/orgs",
                repos_url: "https://api.github.com/users/bradtraversy/repos",
                events_url:
                    "https://api.github.com/users/bradtraversy/events{/privacy}",
                received_events_url:
                    "https://api.github.com/users/bradtraversy/received_events",
                type: "User",
                site_admin: false,
                score: 1,
            },
            {
                login: "bradfitz",
                id: 2621,
                node_id: "MDQ6VXNlcjI2MjE=",
                avatar_url: "https://avatars.githubusercontent.com/u/2621?v=4",
                gravatar_id: "",
                url: "https://api.github.com/users/bradfitz",
                html_url: "https://github.com/bradfitz",
                followers_url:
                    "https://api.github.com/users/bradfitz/followers",
                following_url:
                    "https://api.github.com/users/bradfitz/following{/other_user}",
                gists_url:
                    "https://api.github.com/users/bradfitz/gists{/gist_id}",
                starred_url:
                    "https://api.github.com/users/bradfitz/starred{/owner}{/repo}",
                subscriptions_url:
                    "https://api.github.com/users/bradfitz/subscriptions",
                organizations_url: "https://api.github.com/users/bradfitz/orgs",
                repos_url: "https://api.github.com/users/bradfitz/repos",
                events_url:
                    "https://api.github.com/users/bradfitz/events{/privacy}",
                received_events_url:
                    "https://api.github.com/users/bradfitz/received_events",
                type: "User",
                site_admin: false,
                score: 1,
            },
        ],
    };
    render() {
        return (
            <div style={userStyle}>
                {this.state.users.map((user) => (
                    <UserItem key={user.id} user={user} />
                ))}
            </div>
        );
    }
}

const userStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3,1fr)",
    gridGap: "1rem",
};

export default Users;
