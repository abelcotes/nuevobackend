(function () {
    let mongoose = require('mongoose');

    let Schema = mongoose.Schema;

    let ProductSchema = new Schema({
        code: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        price: {
            type: String,
            required: true
        },
        state: {
            type: String,
            required: true
        },
       
    });

    module.exports = mongoose.model('productos', ProductSchema);
})();