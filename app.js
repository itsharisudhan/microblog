
function postMessage() {
   a
    const message = document.getElementById('message').value.trim();
    
 
    if (message) {
        const post = document.createElement('div');
        post.className = 'post';
        post.textContent = message;
        
        
        document.getElementById('posts').prepend(post);
        
        
        document.getElementById('message').value = '';
    } else {
        alert('Please enter a message!');
    }
}
