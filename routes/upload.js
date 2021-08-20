const router = require("express").Router()
const uploadImage = require ("../middleware/uploadImage")
const uploadCtrl = require ("../controllers/uploadCtrl")

router.post('/upload_avatar', uploadImage, uploadCtrl.uploadAvatar )


module.exports = router