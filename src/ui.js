class UI {
    constructor() {
        //Attributes to create a new post:
        this.post_title = document.getElementById('post_title');
        this.post_author = document.getElementById('post_author');
        this.post_body = document.getElementById('post_body');

        //Get DOM of MODAL
        this.edit_post_title = document.getElementById('edit_post_title');
        this.edit_post_author = document.getElementById('edit_post_author');
        this.edit_post_body = document.getElementById('edit_post_body');
        this.edit_post_id = document.getElementById('edit_post_id');

        this.posts_wrapper = document.getElementById('posts');

        this.add_post_btn = document.getElementById('add_post_btn');

        this.post_container = document.querySelector('.posts-container');
    }

    showPosts(posts) {
        // console.log(posts);
        let output = "";
        posts.forEach(post => {
            output += `
                <div class="card mb-3">
                    <div class="card-body">
                        <h5 class="card-title">${post.title}</h5>
                        <p class="card-text">${post.body}</p>
                        <a href="#" class="card-link">${post.author}</a>
                        <a href="#" class="edit btn btn-primary pull-right mr-3" data-id="${post.id}" data-toggle="modal" data-target="#modalEdit">Edit</a>
                        <a href="#" class="delete btn btn-danger pull-right mr-3" data-id="${post.id}">Delete</a>
                    </div>
                </div>
            `;
        });
        this.posts_wrapper.innerHTML = output;
    }

    showAlert(message, classList) {
        this.clearAlert();

        const div = document.createElement('div');
        div.classList = classList;
        div.appendChild(document.createTextNode(message));
        // div.innerHTML = message;
        this.post_container.insertBefore(div, this.posts_wrapper);
        // console.log(div);

        setTimeout(() => this.clearAlert(), 3000);
    }

    clearAlert() {
        const alert = document.querySelector('.alert');
        if (alert) {
            alert.remove();
        }
    }

    clearAllFields() {
        this.post_title.value = "";
        this.post_author.value = "";
        this.post_body.value = "";
    }

    fillModalData(post) {
        this.edit_post_id.value = post.id;
        this.edit_post_title.value = post.title;
        this.edit_post_author.value = post.author;
        edit_post_body.value = post.body;
    }
}

const ui = new UI();
export default ui;