const host = 'http://localhost:3001'



const savelist = async(list, title, deskId) => {
    const json = JSON.stringify({ list, title, deskId })
    console.log(json)

    const response = await fetch(`${host}/api/v1/desks`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: json
    });
    const data = await response.json();
    return data;
}
const loadDesks = async() => {
    const res = await fetch(`${host}/api/v1/desks`)
    const data = await res.json();
    return data;
}

const loadTasksByDeskId = async(deskId) => {
    const res = await fetch(`${host}/api/v1/tasks/${deskId}`)
    const data = await res.json()
    return data
}


export { savelist, loadDesks, loadTasksByDeskId }