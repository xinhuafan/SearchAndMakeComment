var app = require('koa')();
var router = require('koa-router')();


// router.get('/', function *(next) {
//     this.body = 'hello koa !'
// });

// router.get('/api', function *(next) {
//     this.body = 'test data'
// });
// router.get('/api/1', function *(next) {
//     this.body = 'test data 1'
// });
// router.get('/api/2', function *(next) {
//     this.body = 'test data 2'
// });

// start service and generate router


// homepage - ads (super promotion)
var homeAdData = require('./home/ad.js')
router.get('/api/homead', function *(next) {
    console.log('homepage - ads(super promotion)')
    this.body = homeAdData
});

// homepage - recommendation list
var homeListData = require('./home/list.js')
router.get('/api/homelist/:city/:page', function *(next) {
    console.log('homepage - recommendation list')
    
    // parameters
    const params = this.params
    const paramsCity = params.city
    const paramsPage = params.page

    console.log('current city: ' + paramsCity)
    console.log('current page: ' + paramsPage)

    this.body = homeListData
}); 

// search result - three parameters
var searchListData = require('./search/list.js')
router.get('/api/search/:page/:city/:category/:keyword', function *(next) {
    console.log('search result')

    // parameters
    const params = this.params
    const paramsPage = params.page
    const paramsCity = params.city
    const paramsCategory = params.category
    const paramsKeyword = params.keyword

    console.log('current page: ' + paramsPage)
    console.log('current city: ' + paramsCity)
    console.log('current category: ' + paramsCategory)
    console.log('keyword: ' + paramsKeyword)

    this.body = searchListData
});

// search result - two parameters
router.get('/api/search/:page/:city/:category', function *(next) {
    console.log('search result')

    // parameters
    const params = this.params
    const paramsPage = params.page
    const paramsCity = params.city
    const paramsCategory = params.category

    console.log('current page: ' + paramsPage)
    console.log('current city: ' + paramsCity)
    console.log('current category: ' + paramsCategory)

    this.body = searchListData
});

// details
const detailInfo = require('./detail/info.js')
router.get('/api/detail/info/:id', function *(next) {
    console.log('detail page')

    const params = this.params
    const id = params.id

    console.log('company id: ' + id)
    this.body = detailInfo
});

// detail page - comment
const detailComment = require('./detail/comment.js')
router.get('/api/detail/comment/:page/:id', function *(next) {
    console.log('detail page - comment')

    const params = this.params
    const page = params.page
    const id = params.id

    console.log('company id: ' + id)
    console.log('current page: ' + page)

    this.body = detailComment
})

// order list
const orderList = require('./orderlist/orderList.js')
router.get('/api/orderlist/:username', function *(next) {
    console.log('order list')

    const params = this.params
    const username = params.username
    console.log('username: ' + username)

    this.body = orderList
});

// submit comment
router.post('/api/submitComment', function *(next) {
    console.log('submit comment')

    // get parameters
    this.body = {
        errno: 0,
        msg: 'ok'
    }
});


app.use(router.routes())
   .use(router.allowedMethods());
console.log('hello')
app.listen(3000);