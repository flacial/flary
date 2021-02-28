export const getRequest = async (word) => {
    try {
    const request = await fetch('https://wordsapiprojectserver.herokuapp.com/thesaurus', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            word: word
        })
    })
    return request.json()
    }
    catch (error) {
        console.log(error)
    }
}