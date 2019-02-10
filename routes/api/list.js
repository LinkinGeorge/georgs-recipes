const express = require('express');

const router = express.Router();

const checkAuth = require('../helpers/check-auth');
const Shoppinglist = require('../../models/shoppinglist');

const checkListAuth = (req, res, next) => {
  if (req.session.authenticated && req.session.listCode) {
    return next();
  }
  return res.sendStatus(401);
};

// Get Shopping List
router.get('/list/:name', checkListAuth, async (req, res) => {
  try {
    const list = await Shoppinglist.getByName(req.params.name);
    return res.json(list);
  } catch (error) {
    return res.send(error);
  }
});

// New Shopping List
router.post('/lists', checkAuth, async (req, res) => {
  try {
    const newList = new Shoppinglist({ ...req.body });
    const list = await Shoppinglist.addList(newList);
    return res.json(list);
  } catch (error) {
    return res.send(error);
  }
});

// Update Shopping List
router.put('/list/:name', checkListAuth, async (req, res) => {
  try {
    const updList = new Shoppinglist({ ...req.body });
    const newData = updList.toObject();
    delete newData._id;
    const list = await Shoppinglist.updateList(req.params.name, newData);
    return res.json(list);
  } catch (error) {
    return res.send(error);
  }
});

router.post('/list/:name', checkListAuth, async (req, res) => {
  try {
    if (!req.session.listCode) {
      return res.sendStatus(401);
    }
    const updated = await Shoppinglist.addItem(req.session.listCode, req.body.item);
    return res.json(updated);
  } catch (error) {
    return res.send(error);
  }
});

module.exports = router;