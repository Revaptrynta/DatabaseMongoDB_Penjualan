const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/db-penjualan');

const transaksiSchema = new mongoose.Schema({
    id_transaksi : String,
    nama_barang: String,
    tgl_transaksi: Date,
    jumlah: Number,
    harga_jual: Number,
    total: Number,
});

const transaksi = mongoose.model("transaksi",transaksiSchema);

const Reva = new transaksi({
    id_transaksi : "TR01",
    nama_barang: "Penggaris",
    tgl_transaksi: '2022-06-20',
    jumlah: 2,
    harga_jual: 4500 ,
    total: 9000,
});

const Julmin = new transaksi({
    id_transaksi : "TR02",
    nama_barang: "Pulpen",
    tgl_transaksi: '2022-06-29 ',
    jumlah: 5,
    harga_jual: 6000 ,
    total: 30000,
});

const Fadhil = new transaksi({
    id_transaksi : "TR03",
    nama_barang: "Kertas HVS",
    tgl_transaksi: '2022-06-27 ',
    jumlah: 30,
    harga_jual: 650 ,
    total: 19500,
});

const Sadrul = new transaksi({
    id_transaksi : "TR04",
    nama_barang: "Tinta Spidol",
    tgl_transaksi: '2022-06-26 ',
    jumlah: 2 ,
    harga_jual: 15000,
    total: 30000,
});

const Putri = new transaksi({
    id_transaksi : "TR05",
    nama_barang: "Map",
    tgl_transaksi: '2022-06-23 ',
    jumlah: 10 ,
    harga_jual: 3000 ,
    total: 30000,
});

transaksi.insertMany([Reva, Julmin, Fadhil, Sadrul, Putri], function (error){
    if (error) {
        console.log(error);
    }else {
        console.log("Berhasil disimpan");
        mongoose.connection.close()
    }
});