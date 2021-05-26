exports.handler = async () => {
  console.log('function ran');

  const data = { name: 'Mario', age: 35, job: 'Plumber' };

  // return response to browser

  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};
