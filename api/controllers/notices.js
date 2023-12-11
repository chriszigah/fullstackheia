const Notices = require("../models/notice.js");
var asyncWrapper = require("../middlewares/asyncWrapper");
var randomToken = require("random-token");

exports.addNotice = asyncWrapper(async (req, res, next) => {
  const { notice } = req.body;
  const nNotice = {
    id: randomToken(32),
    notice: notice,
    createdAt: Date.now(),
  };
  const newNotice = await Notices.addNotice(nNotice);
  res.status(200).json(newNotice);
});

exports.getAllNotices = asyncWrapper(async (req, res, next) => {
  const dbNotices = await Notices.findAllNotices();
  res.status(200).json(dbNotices);
});

exports.getNoticeByID = asyncWrapper(async (req, res, next) => {
  const { noticeid } = req.params;
  console.log(noticeid);
  const dbNotice = await Notices.findNoticeByID(noticeid);
  dbNotice === undefined
    ? res
        .status(404)
        .json({ msg: `Notice with noticeid ${noticeid} not found` })
    : res.status(200).json(dbNotice);
});

exports.updateNoticeByID = asyncWrapper(async (req, res, next) => {
  const { id } = req.params;
  const changes = req.body;
  const dbNotice = await Notices.updateNotice(id, changes);
  dbNotice === undefined
    ? res.status(404).json({ msg: `Notice with id ${id} not found` })
    : res.status(200).json(dbNotice);
});

exports.deleteNoticeByID = asyncWrapper(async (req, res, next) => {
  const { id } = req.params;
  const delNotice = await Notices.removeNoticeByID(id);
  delNotice === undefined
    ? res.status(404).json({ msg: `Notice with id ${id} not found` })
    : res.status(400).json({ msg: "Notice was deleted successfully" });
});
