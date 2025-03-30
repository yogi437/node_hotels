const mongoose = require('mongoose');

const MenuSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    category: {
        type: String,
        enum: ['starter', 'main course', 'dessert', 'beverage'],
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    description: {
        type: String,
        default: "No description available",
        trim: true
    },
    isAvailable: {
        type: Boolean,
        default: true
    },
  
});

const Menu = mongoose.model('Menu', MenuSchema);
module.exports = Menu;
