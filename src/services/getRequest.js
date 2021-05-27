/* eslint-disable no-console */
const getRequest = async (word) => {
  try {
    const request = await fetch('https://flary-server2.herokuapp.com/thesaurus', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        word,
      }),
    });
    return request.json();
  } catch (error) {
    // console.log(error);
    return false;
  }
};

export default getRequest;
