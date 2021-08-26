export const greet = (req, res) => {
  res.status(200).json({
    status: 200,
    message: "Hola mundo desde el router",
  });
};

export const greetApi = (req, res) => {
  res.status(200).json({
    status: 200,
    message: "Hola mundo desde el api",
  });
};
