export default function handleResponseFromAPI(promise) {
  return new Promise((resolve, reject) => {
    const data = {
      status: 200,
      body: 'Success',
    };

    if (promise) {
      resolve(data);
    } else {
      reject(Error());
    }

  }).then(console.log('Got a response from the API'));
}
