const db = require("../data/db");

module.exports = {
  addNotice,
  findAllNotices,
  findNoticeByID,
  removeNoticeByID,
  updateNotice,
};

async function addNotice(notice) {
  return await db("notices").insert(notice);
}

async function findAllNotices() {
  return await db("notices");
}

async function findNoticeByID(id) {
  console.log(id);
  return await db("notices").where({ id: id }).first();
}

async function removeNoticeByID(id) {
  return await db("notices").where({ id: id }).del();
}

async function updateNotice(id, changes) {
  return await db("notices")
    .where({ id: id })
    .update(changes)
    .then(() => {
      return findNoticeByID(id);
    });
}
