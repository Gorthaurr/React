const shema = require('pg-promise')


const TokenSchema = new shema({
    user: {type: shema.Types.ObjectId, ref: 'User'},
    refreshToken: {type: Boolean, required: true},

})

model.export = model('User', UserSchema)