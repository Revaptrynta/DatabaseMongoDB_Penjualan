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

const kertas = new barang({
    id_barang : 0001,
    nama_barang: "Kertas HVS",
    satuan: "lembar",
    stok: 5000,
    harga: 500,
});

const spidol = new barang({
    id_barang : 0002,
    nama_barang: "Spidol",
    satuan: "pcs",
    stok: 500,
    harga: 7000,
});

const pulpen = new barang({
    id_barang : 0003,
    nama_barang: "Pulpen Kenko",
    satuan: "pcs",
    stok: 300,
    harga: 5000,
});

const penggaris = new barang({
    id_barang : 0004,
    nama_barang: "Penggaris",
    satuan: "pcs",
    stok: 250,
    harga: 3500,
});

const amplop = new barang({
    id_barang : 0005,
    nama_barang: "Amplop",
    satuan: "lembar",
    stok: 1000,
    harga: 1000,
});

const map = new barang({
    id_barang : 0006,
    nama_barang: "Map",
    satuan: "lembar",
    stok: 1000,
    harga: 2500,
});

const tinta = new barang({
    id_barang : 0007,
    nama_barang: "Tinta Spidol",
    satuan: "botol",
    stok: 300,
    harga: 15000,
});

barang.insertMany([kertas,spidol,pulpen,penggaris,amplop,map,tinta], function (error){
    if (error) {
        console.log(error);
    }else {
        console.log("Berhasil disimpan");
        mongoose.connection.close()
    }
});