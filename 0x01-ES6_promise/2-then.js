export default function handleResponseFromAPI(promise) {
  const data = {
    status: 200,
    body: 'Success',
  };

  return promise
    .then(
      () => data,
      () => new Error(),
      ).finally('Got a response from the API');
}
