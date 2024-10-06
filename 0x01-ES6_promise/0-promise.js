function getResponseFromAPI() {
  return new Promise(
    (resolve) => {
      setTimeout(() => {
        resolve();
      }, 500);
    },
  );
}

export default getResponseFromAPI;