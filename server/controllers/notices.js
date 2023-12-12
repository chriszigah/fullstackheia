const Notices = require("../models/notice.js");
var randomToken = require("random-token");

exports.addNotice = async (req, res, next) => {
  try {
    const { notice } = req.body;
    const nNotice = {
      id: randomToken(32),
      notice: notice,
      createdAt: Date.now(),
    };
    const newNotice = await Notices.addNotice(nNotice);
    res.status(200).json(newNotice);
  } catch (e) {
    res
      .status(500)
      .json({ msg: "SERVER ERROR - SOMETHING WENT WRONG", error: e.message });
  }
};

exports.getAllNotices = async (req, res, next) => {
  try {
    const dbNotices = await Notices.findAllNotices();
    res.status(200).json(dbNotices);
  } catch (e) {
    res
      .status(500)
      .json({ msg: "SERVER ERROR - SOMETHING WENT WRONG", error: e.message });
  }
};

exports.getNoticeByID = async (req, res, next) => {
  try {
    const { noticeid } = req.params;
    console.log(noticeid);
    const dbNotice = await Notices.findNoticeByID(noticeid);
    dbNotice === undefined
      ? res
          .status(404)
          .json({ msg: `Notice with noticeid ${noticeid} not found` })
      : res.status(200).json(dbNotice);
  } catch (e) {
    res
      .status(500)
      .json({ msg: "SERVER ERROR - SOMETHING WENT WRONG", error: e.message });
  }
};

exports.updateNoticeByID = async (req, res, next) => {
  try {
    const { id } = req.params;
    const changes = req.body;
    const dbNotice = await Notices.updateNotice(id, changes);
    dbNotice === undefined
      ? res.status(404).json({ msg: `Notice with id ${id} not found` })
      : res.status(200).json(dbNotice);
  } catch (e) {
    res
      .status(500)
      .json({ msg: "SERVER ERROR - SOMETHING WENT WRONG", error: e.message });
  }
};

exports.deleteNoticeByID = async (req, res, next) => {
  try {
    const { id } = req.params;
    const delNotice = await Notices.removeNoticeByID(id);
    delNotice === undefined
      ? res.status(404).json({ msg: `Notice with id ${id} not found` })
      : res.status(400).json({ msg: "Notice was deleted successfully" });
  } catch (e) {
    res
      .status(500)
      .json({ msg: "SERVER ERROR - SOMETHING WENT WRONG", error: e.message });
  }
};
