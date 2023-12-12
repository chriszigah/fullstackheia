const Hash = require("../models/hash");

exports.getAllHashes = async (req, res, next) => {
  try {
    const dbHashes = await Hash.findAllHashes();
    res.status(200).json(dbHashes);
  } catch (e) {
    res
      .status(500)
      .json({ msg: "SERVER ERROR - SOMETHING WENT WRONG", error: e.message });
  }
};
