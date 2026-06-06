const ProductSchema = new mongoose.Schema({
    title: String,
    description: String,
    category: String,
    image: String,
    price: Number,
    stock: Number,
    featured: Boolean,
    createdAt: {
        type: Date,
        default: Date.now
    }
});