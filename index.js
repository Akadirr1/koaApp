const Koa = require('koa')
const Router = require('@koa/router');
const bodyparser = require('@koa/bodyparser')
require('dotenv').config()//.envden okuma yapabileyim diye nodejs ile geliyor bu fakat kurulum gerekiyor tabiki 
const app = new Koa()
const router = new Router.Router()//require ettiğimiz Router obje olarak geliyor fonksiyon olarak değil obje içindeki fonksiyonu çağırdık
app.use(bodyparser.bodyParser())//aynı şekilde obje dönüyor require içindeki bodyparrser fonksiyonunu çağırdım


router.get('/', (ctx) => {
    ctx.body = {
        message: "İlk istek başarıyla alındı!",
        ad: 'abdulkadir',
        soyad: 'ivenc',
        yas: '20',
    }
})
router.post('/TakimGorevde', (ctx) => {
    ctx.body= ctx.request.body
})
app.use(router.routes())
app.use(router.allowedMethods())

app.listen(3000, () => {
    console.log("3000 portunda sunucu çalışıyor!");
})