const userRepo = require('../repository/UserRepository')

const KullaniciKaydi = async (bilgiler) => {

    if (!bilgiler.Name || bilgiler.Name.length<3){
        throw new Error("İsim çok kısa yada boş!")
        
    }
    if(parseInt(bilgiler.Yas)<18){
        throw new Error("Yaş 18den küçük olamaz")
    }
    userRepo.KullaniciKaydet(bilgiler)
}
module.exports= {KullaniciKaydi}