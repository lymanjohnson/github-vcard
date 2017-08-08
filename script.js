
fetch('https://api.github.com/users/lymanjohnson')
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }

      // Examine the text in the response
      response.json().then(function(data) {
        let name = data.name;
        let login = data.login;
        let githubURL = data.html_url;
        let company = data.company;
        let website = data.blog;
        let bio = data.bio;

         let markup = `
           <h1>${name}</h1>
           <div id="side-by-side">
            <div id="the-basics">
              <h2>The Basics</h2>
              <ul>
                <li>Name: ${name}</li>
                <li>Github URL: <a href="${githubURL}">${login}</a></li>
                <li>Company: ${company}</li>
                <li>Website: <a href="${website}">${website}</a></li>
              </ul>
            </div>

            <div id="the-story">
              <h2>The Story</h2>
              <p>${bio}</p>
            </div>
         `

         document.body.innerHTML = markup;

      });
    }
  )





  /** Offline backup:
  let storedAPI = {
    "login": "lymanjohnson",
    "id": 27706921,
    "avatar_url": "https://avatars2.githubusercontent.com/u/27706921?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/lymanjohnson",
    "html_url": "https://github.com/lymanjohnson",
    "followers_url": "https://api.github.com/users/lymanjohnson/followers",
    "following_url": "https://api.github.com/users/lymanjohnson/following{/other_user}",
    "gists_url": "https://api.github.com/users/lymanjohnson/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/lymanjohnson/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/lymanjohnson/subscriptions",
    "organizations_url": "https://api.github.com/users/lymanjohnson/orgs",
    "repos_url": "https://api.github.com/users/lymanjohnson/repos",
    "events_url": "https://api.github.com/users/lymanjohnson/events{/privacy}",
    "received_events_url": "https://api.github.com/users/lymanjohnson/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Lyman Johnson",
    "company": "The Iron Yard",
    "blog": "https://medium.com/@lymanjohnson",
    "location": "Durham, North Carolina, United States",
    "email": null,
    "hireable": null,
    "bio": "Columbia University Mechanical Engineer\r\nMechanical Engineering, Construction Management\r\nCurrently enrolled at The Iron Yard, Durham",
    "public_repos": 17,
    "public_gists": 0,
    "followers": 2,
    "following": 1,
    "created_at": "2017-04-17T21:40:36Z",
    "updated_at": "2017-08-07T17:41:38Z"
  }
  **/
