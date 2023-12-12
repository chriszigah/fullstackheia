const Payment = require("../models/payment");
var randomToken = require("random-token");

// To be moved to auth

var moment = require("moment");

exports.createPayment = async (req, res, next) => {
  try {
    const id = randomToken(32);

    const { description, startdate, enddaate, amount, department } = req.body;

    const newPayment = {
      description,
      startdate,
      enddaate,
      amount,
      department,
    };

    const payment = await Payment.add(newPayment);

    return res.status(201).json(user);
  } catch (e) {
    res
      .status(500)
      .json({ msg: "SERVER ERROR - SOMETHING WENT WRONG", error: e.message });
  }
};

exports.getAllPayments = async (req, res, next) => {
  try {
    const dbPayments = await Payment.findAll();
    res.status(200).json(dbPayments);
  } catch (e) {
    res
      .status(500)
      .json({ msg: "SERVER ERROR - SOMETHING WENT WRONG", error: e.message });
  }
};

exports.gPaymentByID = async (req, res, next) => {
  try {
    const { id } = req.params;
    const dbPayment = await Payment.findById(id);
    dbPayment === undefined
      ? res.status(404).json({ msg: `Payment with id ${id} not found` })
      : res.status(200).json(dbPayment);
  } catch (e) {
    res
      .status(500)
      .json({ msg: "SERVER ERROR - SOMETHING WENT WRONG", error: e.message });
  }
};

exports.updatePaymentByID = async (req, res, next) => {
  try {
    const { id } = req.params;
    const changes = req.body;
    const dbPayment = await Payment.update(id, changes);
    dbPayment === undefined
      ? res.status(404).json({ msg: `Payment with id ${id} not found` })
      : res.status(200).json(dbPayment);
  } catch (e) {
    res
      .status(500)
      .json({ msg: "SERVER ERROR - SOMETHING WENT WRONG", error: e.message });
  }
};

exports.deletePaymentByID = async (req, res, next) => {
  try {
    const { id } = req.params;
    const delPayment = await Payment.remove(id);
    delPayment === undefined
      ? res.status(404).json({ msg: `Payment with id ${id} not found` })
      : res.status(400).json({ msg: "Payment was deleted successfully" });
  } catch (e) {
    res
      .status(500)
      .json({ msg: "SERVER ERROR - SOMETHING WENT WRONG", error: e.message });
  }
};
