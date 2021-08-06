/**
 * Returns a message when the base route '/' is called
 */
const express = require('express');
const router = express.Router();
const AppConfig = require('../app.config');
const appConfig = new AppConfig();

/* GET base route. */
router.get('/', function(req, res, next) {
  res.json({message: `Events API Server. Version: ${appConfig.version}`});
});

router.get('/favicon.ico', (req, res) => res.status(204));

outer.post('/event/like/:id', async(req, res) => {
  try {
    const id = req.params.id;
    const body = {id};
    await axios.put(`${apiServer}/api/event/${id}/like`, {});
    res.redirect('/');
  } catch (e) {
    console.log('Error: ', e.message);
    renderError(res, e);
  }
});

router.post('/event/dislike/:id', async(req, res) => {
  try {
    const id = req.params.id;
    const body = {id};
    await axios.put(`${apiServer}/api/event/${id}/dislike`, {});
    res.redirect('/');
  } catch (e) {
    console.log('Error: ', e.message);
    renderError(res, e);
  }
});


module.exports = router;
