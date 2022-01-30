function postTemperature(req, res) {
  const { id, temperature, humidity } = req;
  res.status(200).send({
    status: 200,
    id,
  });
}

module.exports = {
  postTemperature,
};
