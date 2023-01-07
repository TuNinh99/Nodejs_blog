const Course = require('../models/Course.js');

class SiteController {
    //[GET] /
    home(req, res) {
        // res.render('home');
        Course.find({}, (err, courses) => {
            if (!err) {
                res.json(courses);
                return;
            }
            res.status(400).json({ error: 'ERROR!!!' });
        });
    }

    //[GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
