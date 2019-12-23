const router = require('express').Router();
const verify = require('../middleware/verify')

const BugsController = require('../controllers/BugsController')

router.get('/', verify, BugsController.getBugs)
router.get('/:bugId', verify, BugsController.getBugByNumber)
router.post('/', verify, BugsController.createBug)

router.patch('/:bugId', verify, BugsController.updateBug)
router.patch('/:bugId/close', verify, BugsController.toggleBugOpenClose({ state: false }))
router.patch('/:bugId/open', verify, BugsController.toggleBugOpenClose({ state: true }))

router.patch('/:bugId/labels', BugsController.addLabel)
router.delete('/:bugId/labels/:name', BugsController.deleteLabel)

module.exports = router;