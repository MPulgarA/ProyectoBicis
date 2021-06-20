var express = require('express');
var router = express.Router();
var bicicleta = require('../controllers/bicicleta');


router.get('/', bicicleta.bicicleta_list);

router.get('/create', bicicleta.bicicleta_create_get);
router.post('/create', bicicleta.bicicleta_create_post);

router.post('/:id/delete', bicicleta.bicicleta_delete_post);

router.get('/:id/update', bicicleta.bicicleta_update_get);
router.post('/:id/update', bicicleta.bicicleta_update_post);

module.exports = router;
