const Profile = require("../models/profile");
var randomToken = require("random-token");
const { validationResult } = require("express-validator");

exports.addAllProfiles = async (req, res, next) => {
  try {
    const dbProfiles = await Profile.addProfile;
    res.status(200).json(dbProfiles);
  } catch (e) {
    res
      .status(500)
      .json({ msg: "SERVER ERROR - SOMETHING WENT WRONG", error: e.message });
  }
};

exports.getAllProfiles = async (req, res, next) => {
  try {
    const dbProfiles = await Profile.findAllProfiles();
    res.status(200).json(dbProfiles);
  } catch (e) {
    res
      .status(500)
      .json({ msg: "SERVER ERROR - SOMETHING WENT WRONG", error: e.message });
  }
};

exports.getProfileUserByID = async (req, res, next) => {
  try {
    const { userid } = req.params;
    const dbProfile = await Profile.findProfileByUserId(userid);
    dbProfile === undefined
      ? res.status(404).json({ msg: `Profile with userid ${userid} not found` })
      : res.status(200).json(dbProfile);
  } catch (e) {
    res
      .status(500)
      .json({ msg: "SERVER ERROR - SOMETHING WENT WRONG", error: e.message });
  }
};

exports.getProfileByID = async (req, res, next) => {
  try {
    const { id } = req.params;
    const dbProfile = await Profile.findProfileByID(id);
    dbProfile === undefined
      ? res.status(404).json({ msg: `Profile with id ${id} not found` })
      : res.status(200).json(dbProfile);
  } catch (e) {
    res
      .status(500)
      .json({ msg: "SERVER ERROR - SOMETHING WENT WRONG", error: e.message });
  }
};

exports.updateProfileByID = async (req, res) => {
  try {
    const { id } = req.params;
    const changes = req.body;
    const dbProfile = await Profile.updateProfile(id, changes);
    dbProfile === undefined
      ? res.status(404).json({ msg: `Profile with id ${id} not found` })
      : res.status(200).json(dbProfile);
  } catch (e) {
    res
      .status(500)
      .json({ msg: "SERVER ERROR - SOMETHING WENT WRONG", error: e.message });
  }
};

exports.deleteProfileByID = async (req, res, next) => {
  try {
    const { id } = req.params;
    const delProfile = await Profile.removeProfileByID(id);
    delProfile === undefined
      ? res.status(404).json({ msg: `Profile with id ${id} not found` })
      : res.status(400).json({ msg: "Profile was deleted successfully" });
  } catch (e) {
    res
      .status(500)
      .json({ msg: "SERVER ERROR - SOMETHING WENT WRONG", error: e.message });
  }
};
