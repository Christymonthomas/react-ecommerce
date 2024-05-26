export const create = async (req, res) => {
  try {
    console.log(req.body);
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
};
