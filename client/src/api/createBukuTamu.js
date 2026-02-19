async function createBukuTamu(data) {
    await fetch(`${import.meta.env.VITE_SERVER_API}/tamu`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(result => console.log('Success:', result))
        .catch(error => console.error('Error:', error));
}

export default createBukuTamu