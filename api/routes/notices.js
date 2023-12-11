var express = require("express");
const router = express.Router();
const noticesController = require("../controllers/notices");

const {
  ensureAuthenticated,
  forwardAuthenticated,
} = require("../middlewares/auth");

// @route POST api/v1/notice
// @desc Create a new Notice
// @access Public

router.post("/add", noticesController.addNotice);

// @route GET api/notices
// @desc Fetch all users
// @access Private

router.get("/", noticesController.getAllNotices);

// @route GET api/v1/notice/:id
// @desc Get a notice by ID
// @access Private

router.get("/:noticeid", noticesController.getNoticeByID);

// @route PATCH api/v1/:id
// @desc update a lesson by ID
// @access Private
router.patch("/:id", noticesController.updateNoticeByID);

// @route DELETE api/v1/:id
// @desc delete a notice by ID
// @access Private

router.delete("/:id", noticesController.deleteNoticeByID);

module.exports = router;
