const host = 'http://localhost:3001'



const savelist = async(list, title, id) => {
    const json = JSON.stringify({ list, title, id })
    console.log(json)

    const response = await fetch(`${host}/save-todo`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: json
    });
    const data = await response.json();
    return data;
}



export { savelist }