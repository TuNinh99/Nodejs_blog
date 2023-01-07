
const newsRouter = require("./news.route")
const siteRouter = require("./site.route")

function route(app) {
    // app.get('/news', (req, res) => {
    //     console.log(req.query)
    //     res.render('news')
    // })
    app.use("/news", newsRouter) //tương đương với đoạn code ở trên

    // app.get('/', (req, res) => {
    //     res.render('home')
    // })
    app.use("/", siteRouter) //tương đương với đoạn code ở trên
}

module.exports = route