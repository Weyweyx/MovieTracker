const newFormHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#movie-title').value.trim();

    if (title && needed_funding && description) {
        const response = await fetch(`/api/projects`, {
            method: 'POST',
            body: JSON.stringify({ title: title }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.replace('/profile');
        } else {
            alert('Failed to create movie');
        }
    }
};

const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');

        const response = await fetch(`/api/projects/${id}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            document.location.replace('/profile');
        } else {
            alert('Failed to delete project');
        }
    }
};

document.querySelector('.new-movie-form').addEventListener('submit', newFormHandler);

document.querySelector('.movie-list').addEventListener('click', delButtonHandler);
