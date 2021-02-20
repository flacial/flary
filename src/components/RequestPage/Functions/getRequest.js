export const getRequest = async (word) => {
    const Response = await fetch(`https://dictionaryapi.com/api/v3/references/ithesaurus/json/${word}?key=c48ccf67-004d-4d61-bf2b-54e83578866c`)
    const Data = Response.json()
    return Data
}