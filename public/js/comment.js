const newFormHandler = async (event) => {
    event.preventDefault();
  
    const content = document.querySelector('#comment_text').value.trim();
  
    if ( content) {
      const response = await fetch(`/api/comment`, {
        method: 'POST',
        body: JSON.stringify({ content }),
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
    .querySelector('.comment-form')
    .addEventListener('submit', newFormHandler);
  