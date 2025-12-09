const User = require('../models/User')

const TumKullanicilar = async () => {
    return await User.find()
}

const KullaniciBul = async (id) => {
    return await User.findById(id)
}
const KullaniciKaydet = async (bilgiler) => {
    const newUSer = new User(bilgiler)
    return await newUSer.save()
}
module.exports = { TumKullanicilar, KullaniciBul, KullaniciKaydet }