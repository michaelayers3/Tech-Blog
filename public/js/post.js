const newFormHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#title').value.trim();
    const postText = document.querySelector('#post_text').value.trim();
    
  
    if (title && postText) {
      const response = await fetch(`/api/post`, {
        method: 'POST',
        body: JSON.stringify({ title, postText }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('not yet');
      }
    }
  };
  
  
  document
    .querySelector('.new-post-form')
    .addEventListener('submit', newFormHandler);
  