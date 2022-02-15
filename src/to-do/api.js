const host = 'http://localhost:3001'

const updateList = async(list, desk) => {
    const json = JSON.stringify({ list, desk })
    console.log(json)

    const res = await fetch(`${host}/api/v1/tasks/${desk}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: json
    });
    const data = await res.json()
    return data;
}

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

const loadTasksByDeskId = async(desk) => {
    const res = await fetch(`${host}/api/v1/tasks/${desk}`)
    const data = await res.json()
    return data
}
const addItem = async(title, style, desk = 1) => {
    console.log(desk)
    const res = await fetch(`${host}/api/v1/tasks`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title, style, desk })
    })
    const data = await res.json()
    return data
}

export { updateList, savelist, loadDesks, loadTasksByDeskId, addItem }