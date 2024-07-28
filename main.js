document.addEventListener('DOMContentLoaded', () => {
    const usersContainer = document.querySelector('#users-container');

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {
            data.forEach(user => {
                const userCard = document.createElement('div');
                userCard.className = 'user-card';
                userCard.innerHTML = `
                    <h2>Ismi: ${user.name}</h2>
                    <p><strong>Username:</strong> ${user.username}</p>
                    <p><strong>Manzil:</strong> ${user.address.street}</p>
                    <p><strong>Email:</strong> ${user.email}</p>
                `;
                usersContainer.appendChild(userCard);
            });
        })
        .catch(error => console.error('Error fetching users:', error));
});
