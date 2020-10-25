function getPost(userId) {

}

function getAllPosts(userId) {

}

function setPost(userId, title, body) {
    return fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: title,
            body: body,
            userId: userId,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then((response) => response.json())
    .then((json) => {state.lastCreatedPost = json; state.allPosts.push(json)})       
}