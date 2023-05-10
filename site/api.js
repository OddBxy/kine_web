let url = 'https://brave-jumpsuit-elk.cyclic.app/questions/'

export async function getQuestions() {
    const res = await fetch(url, {method: 'GET'});
    return res.json();
}

export async function removeQuestion(question) {
    console.log(question);
    const res = await fetch(url + question._id, {
        method: 'DELETE'
    }
    );
    return res.json();
}


export async function updateQuestion(question) {
    const res = await fetch(url + question._id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(question)
    });
    return res.json();
}
