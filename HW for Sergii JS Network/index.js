const TITLE_INPUT = document.getElementById("postTitle");
const BODY_INPUT = document.getElementById("postBody");
const CREATE_POST_BUTTON = document.getElementById("createPost");
const LAST_CREATED_BUTTON = document.getElementById("lastCreated");
const SHOW_ALL_POSTS_BUTTON = document.getElementById("showAllButton");
const OUTPUT_BLOCK = document.getElementById("outputBlock");
const POST_BLOCK = document.getElementById("postBlock");

CREATE_POST_BUTTON.addEventListener("click", createPost);
LAST_CREATED_BUTTON.addEventListener("click", () => {
    OUTPUT_BLOCK.innerHTML = '';
    showLastCreatedPost()
});
SHOW_ALL_POSTS_BUTTON.addEventListener("click", showAllPost);

function setInputsDataToState() {
    state.currentPostTitle = TITLE_INPUT.value;
    state.currentPostBody = BODY_INPUT.value;
}

function showAllPost() {
    OUTPUT_BLOCK.innerHTML = '';
    for (let i = 0; i < state.allPosts.length; i++) {

        const newPostBlock = document.createElement('div');
        newPostBlock.id = i;
        newPostBlock.className = 'post';

        const newTitle = document.createElement('label');
        const newBody = document.createElement('label');

        newTitle.className = 'title';
        newBody.className = 'body';

        newTitle.textContent = state.allPosts[i].title;
        newBody.textContent = state.allPosts[i].body;

        newPostBlock.appendChild(newTitle);
        newPostBlock.appendChild(newBody);

        OUTPUT_BLOCK.appendChild(newPostBlock);
    }
}

function showLastCreatedPost() {
    
    const newPostBlock = document.createElement('div');
    newPostBlock.id = 1;
    newPostBlock.className = 'post';

    const newTitle = document.createElement('label');
    const newBody = document.createElement('label');

    newTitle.className = 'title';
    newBody.className = 'body';

    newTitle.textContent = state.lastCreatedPost.title;
    newBody.textContent = state.lastCreatedPost.body;

    newPostBlock.appendChild(newTitle);
    newPostBlock.appendChild(newBody);

    OUTPUT_BLOCK.appendChild(newPostBlock);
}

async function createPost() {
    setInputsDataToState();
    CREATE_POST_BUTTON.disabled = true;
    if (state.currentPostBody && state.currentPostTitle) {
        let promice = setPost(state.userId, state.currentPostTitle, state.currentPostBody)
        promice.then(function () {
            showLastCreatedPost();
            CREATE_POST_BUTTON.disabled = false;
        })
    }
}
