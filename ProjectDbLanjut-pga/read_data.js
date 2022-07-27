const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/db-penjualan');

const barangSchema = new mongoose.Schema({
    id_barang : Number,
    nama_barang: String,
    satuan: String,
    stok : Number,
    harga_barang: Number,
});

const barang = mongoose.model("barang",barangSchema);

barang.find(function(error, barangs){
    if (error) {
        console.log(error);
    }else {
        console.log(barangs);
        mongoose.connection.close()
    }
});


