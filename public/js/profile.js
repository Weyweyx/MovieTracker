const newFormHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#movie-title').value.trim();

    if (title) {
        const response = await fetch(`/api/movies`, {
            method: 'POST',
            body: JSON.stringify({ title }),
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

        const response = await fetch(`/api/movies/${id}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            document.location.replace('/profile');
        } else {
            alert('Failed to delete movie');
        }
    }
};

document.querySelector('.new-movie-form').addEventListener('submit', newFormHandler);

document.querySelector('.movie-list').addEventListener('click', delButtonHandler);
