export default async function handleResponseFromAPI(promise) {
  const data = {
    status: 200,
    body: 'Success',
  }

  return promise
    .then(
      () => console.log(data),
      () => console.log(new Error()))
    .finally(() => console.log("Got a response from the API"))
}
