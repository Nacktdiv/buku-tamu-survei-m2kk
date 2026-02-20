async function getSurvey() {
    try {
        const res = await fetch(`${import.meta.env.VITE_SERVER_API}/survey`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    })
    const data = await res.json();
    return data;
    } catch (error) {
        if (import.meta.env.VITE_ENV === 'development') {
            console.log('Error:', error)
        }
        return [];
    }
}

export default getSurvey;