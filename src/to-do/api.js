const host = 'http://localhost:3001'

const savelist = async(list) => {
    const response = await fetch(`${host}/save-todo`, {
        method: 'POST',
        headers: {
            'Content-type': 'applications/json'
        },
        body: JSON.stringify(list)
    });
    const data = await response.json();
    return data;
}



export { savelist }