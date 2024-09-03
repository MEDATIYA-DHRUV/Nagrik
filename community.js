document.getElementById('postBtn').addEventListener('click', function() {
    const postInput = document.getElementById('postInput');
    const postText = postInput.value.trim();

    if (postText !== "") {
        addPost(postText);
        postInput.value = "";
    }
});

function addPost(postText) {
    const postsContainer = document.getElementById('postsContainer');

    const post = document.createElement('div');
    post.className = 'post';

    const postHeader = document.createElement('div');
    postHeader.className = 'post-header';

    const profilePic = document.createElement('img');
    profilePic.src = 'profile-picture.jpg'; // Default or user profile picture
    profilePic.alt = 'User';
    profilePic.className = 'post-profile-pic';

    const username = document.createElement('span');
    username.className = 'username';
    username.textContent = 'Your Name'; // Replace with dynamic username

    const timeAgo = document.createElement('span');
    timeAgo.className = 'time-ago';
    timeAgo.textContent = 'Just now';

    postHeader.appendChild(profilePic);
    postHeader.appendChild(username);
    postHeader.appendChild(timeAgo);

    const postContent = document.createElement('p');
    postContent.className = 'post-text';
    postContent.textContent = postText;

    post.appendChild(postHeader);
    post.appendChild(postContent);

    postsContainer.prepend(post);
}
