async function createSurvey(data) {
    await fetch(`${import.meta.env.VITE_SERVER_API}/survey`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(result =>{
            if (import.meta.env.VITE_ENV === 'development') {
                console.log('Success:', result)
            }})

        .catch(error =>{
            if (import.meta.env.VITE_ENV === 'development') {
                console.log('Error:', error)
            }})
}

export default createSurvey