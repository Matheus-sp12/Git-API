document.addEventListener('DOMContentLoaded', function () {
    const profile = document.getElementById('avatar');
    const name = document.getElementById('name');
    const username = document.getElementById('username');
    const repos = document.getElementById('repos');
    const followers = document.getElementById('followers');
    const following = document.getElementById('followings');
    const link = document.getElementById('link');

    fetch('https://api.github.com/users/Matheus-sp12')
    .then(function(res) {
        return res.json();
    })
    .then(function(json) {
        profile.src = json.avatar_url;
        name.innerText = json.named;
        username.innerText = json.login;
        repos.innerText = json.public_repos;
        followers.innerText = json.followers;
        following.innerText = json.following;
        link.href = json.html_url;
    })
    .catch(function(erro) {
        alert("deu erro");
    })
})