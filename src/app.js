import http from './slHTTP';
import ui from './ui';

document.addEventListener('DOMContentLoaded', fetchPosts);

document.getElementById('add_post_btn').addEventListener('click', addPost);

document.getElementById('posts').addEventListener('click', deletePost);

document.getElementById('posts').addEventListener('click', editPost);

document.getElementById('edit_post_btn').addEventListener('click', updatePostData);

function fetchPosts() {
    http.get('http://localhost:3000/posts')
        .then(data => ui.showPosts(data))
        .catch(err => console.log(`Error ${err}`));
}

function addPost() {
    const title = document.getElementById('post_title').value;
    const author = document.getElementById('post_author').value;
    const body = document.getElementById('post_body').value;

    //Create a data object for the above data, so it can be passed to post()
    const data = {
        title,
        author,
        body
    };

    http.post('http://localhost:3000/posts', data)
        .then(data => {
            fetchPosts();
            ui.showAlert('Post Added Successfully', 'alert alert-success');
            ui.clearAllFields();
        })
        .catch(err => console.log(err));
    console.log(data);
}


function deletePost(e) {
    e.preventDefault();
    // console.log('clicked inside post!');
    // console.log(e.target.classList);
    if (e.target.classList.contains('delete')) {
        const id = e.target.dataset.id;
        // console.log(id);
        if (confirm('Are you sure you want to delete?')) {
            http.delete(`http://localhost:3000/posts/${id}`)
                .then(data => {
                    ui.showAlert('Post Deleted Successfully!', 'alert alert-success');
                    fetchPosts();
                })
                .catch(err => console.log(err));
        }
    }
}

function editPost(e) {
    e.preventDefault();
    if (e.target.classList.contains('edit')) {
        const id = e.target.dataset.id;

        http.get(`http://localhost:3000/posts/${id}`)
            .then(data => ui.fillModalData(data))
            .catch(err => console.log(err));
    }
}

function updatePostData() {
    const edit_post_title = document.getElementById('edit_post_title').value;
    const edit_post_author = document.getElementById('edit_post_author').value;
    const edit_post_body = document.getElementById('edit_post_body').value;
    const edit_post_id = document.getElementById('edit_post_id').value;

    const data = {
        title: edit_post_title,
        body: edit_post_body,
        author: edit_post_author
    };

    http.put(`http://localhost:3000/posts/${edit_post_id}`, data)
        .then(data => {
            ui.showAlert('Post Updated Successfully', 'alert alert-success');
            fetchPosts();
        })
        .catch(err => console.log(err));

    $('#modalEdit').modal('hide');
    // $('#modalEdit').modal('dispose');
}