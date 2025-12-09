const Koa = require('koa')
const mongoose = require('mongoose')
const Router = require('@koa/router'); //parse edip alıcam ilerleyen aşamada
const bodyparser = require('@koa/bodyparser') //parse edip alıcam ilerleyen aşamada
require('dotenv').config()//.envden okuma yapabileyim diye nodejs ile geliyor bu fakat kurulum gerekiyor tabiki 
const UserService = require('./services/UserService')
const app = new Koa()
const router = new Router.Router()//require ettiğimiz Router obje olarak geliyor fonksiyon olarak değil obje içindeki fonksiyonu çağırdık
app.use(bodyparser.bodyParser())//aynı şekilde obje dönüyor require içindeki bodyparrser fonksiyonunu çağırdım
//eğer gelen pakette json verisi varsa ctx.reques.body içerisine yazar

router.get('/', (ctx) => {
    ctx.body = {
        message: "İlk istek başarıyla alındı!",
        ad: 'abdulkadir',
        soyad: 'ivenc',
        yas: '20',
    }
    return ctx
})
router.post('/TakimGorevde', async (ctx) => {
    try {
        const sonuc = await UserService.KullaniciKaydi(ctx.request.body)
        ctx.status = 201
        ctx.body = {
            mesaj: "kayit basarili",
            data: sonuc
        }
    } catch (error) {
        console.log(error);
    }
})
app.use(router.routes())
app.use(router.allowedMethods())
const dbBaglantısı = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("db bağlantısı başarılı");
    } catch (error) {
        console.log(error);
    }
}
dbBaglantısı()

app.listen(3000, () => {
    console.log("3000 portunda sunucu çalışıyor!");
})