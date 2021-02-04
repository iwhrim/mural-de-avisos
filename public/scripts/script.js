document.addEventListener('DOMContentLoaded', function () {
    updatePosts();
})

function updatePosts() {
    fetch("http://192.168.100.42:3000/api/all").then(response => {
        return response.json();
    }).then(json => {
        let postElements = '';
        let posts = JSON.parse(json);
        posts.forEach((post) => {
            let postElement = `<div id="${post.id}" class="card mb-4">
            <div class="card-header">
                <h2 class="card-title">${post.title}</h2>
            </div>
            <div class="card-body">
                <div class="card-text">${post.description}</div>
            </div>
        </div>`;
            postElements += postElement;

        });
        document.getElementById("posts").innerHTML = postElements;


    });

}

function newPost() {
    let title = document.getElementById("title").value;
    let description = document.getElementById("description").value;
    let post = { title, description };
    const options = {
        method: "POST",
        headers: new Headers({ 'content-type': 'application/json' }),
        body: JSON.stringify(post),
    }
    fetch("http://192.168.100.42:3000/api/new", options).then(response => {
        console.log(response);
        updatePosts();
        document.getElementById("title").value = "";
        document.getElementById("description").value = "";
    });
}