
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
    profilePic.src = ''; // Default or user profile picture
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
document.querySelectorAll('.community-reply-btn').forEach(button => {
    button.addEventListener('click', function() {
        const replyInput = this.nextElementSibling;
        const submitBtn = this;

        if (submitBtn.innerText === "Reply") {
            replyInput.style.display = 'inline-block';
            submitBtn.innerText = "Submit";
        } else if (submitBtn.innerText === "Submit") {
            const replyText = replyInput.value.trim();

            if (replyText !== "") {
                addReply(submitBtn, replyText);
                replyInput.value = "";  // Clear the input field after submission
                replyInput.style.display = 'none';
                submitBtn.innerText = "Reply";
            }
        }
    });
});

function addReply(button, replyText) {
    const replyContainer = button.nextElementSibling.nextElementSibling.nextElementSibling; // Adjusted to get the correct reply container

    const reply = document.createElement('div');
    reply.className = 'community-comment';

    const profilePic = document.createElement('img');
    profilePic.src = 'profile-picture.jpg'; // Replace with user's profile picture
    profilePic.alt = 'User';
    profilePic.className = 'community-comment-profile-pic';

    const replyContent = document.createElement('div');
    replyContent.className = 'community-comment-text';
    replyContent.innerHTML = `<p><strong>Your Name</strong> - Just now</p><p>${replyText}</p>`; // Replace "Your Name" with the current user's name

    reply.appendChild(profilePic);
    reply.appendChild(replyContent);

    replyContainer.appendChild(reply); // Appending the reply to the container

    // Add Edit Reply button
    const editReplyBtn = document.createElement('button');
    editReplyBtn.className = 'community-edit-reply-btn';
    editReplyBtn.innerText = 'Edit Reply';
    editReplyBtn.style.display = 'block';
    editReplyBtn.style.marginTop = '5px';
    replyContainer.appendChild(editReplyBtn);

    // Edit Reply functionality
    editReplyBtn.addEventListener('click', function() {
        const replyInput = document.createElement('input');
        replyInput.type = 'text';
        replyInput.value = replyText;
        replyInput.className = 'community-reply-input';
        replyContent.innerHTML = ''; // Clear the existing content
        replyContent.appendChild(replyInput);

        editReplyBtn.innerText = 'Save';
        editReplyBtn.onclick = function() {
            const updatedText = replyInput.value.trim();
            if (updatedText !== '') {
                replyContent.innerHTML = `<p><strong>Your Name</strong> - Just now</p><p>${updatedText}</p>`;
                editReplyBtn.innerText = 'Edit Reply';
                editReplyBtn.onclick = editReply;
            }
        };
    });
}
const navButton = document.getElementById('navButton');
const hoverMenu = document.getElementById('hoverMenu');

navButton.addEventListener('mouseenter', function() {
    const rect = navButton.getBoundingClientRect();

    // Position the menu
    hoverMenu.style.top = rect.bottom + 'px';
    hoverMenu.style.left = '70%'; // Set to 50% of the viewport width
    hoverMenu.style.transform = `translateX(-50%)`; // Center it by shifting it left by 50% of its own width

    hoverMenu.style.display = 'flex';
});

navButton.addEventListener('mouseleave', function() {
    setTimeout(function() {
        if (!hoverMenu.matches(':hover')) {
            hoverMenu.style.display = 'none';
        }
    }, 200);
});
