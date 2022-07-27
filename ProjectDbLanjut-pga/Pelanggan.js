const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/db-penjualan');

const pelangganSchema = new mongoose.Schema({
    id_pelanggan : Number,
    nama_plgn: String,
    jenis_kelamin: String,
    alamat: String,
    telepon_plgn: String,
});

const pelanggan = mongoose.model("pelanggan",pelangganSchema);

const Reva = new pelanggan({
    id_pelanggan : 01,
    nama_plgn: "Reva Putriyanita",
    jenis_kelamin: "Perempuan",
    alamat: "Jln Tipar Cakung Jakarta Utara",
    telepon_plgn: "089622686423",
});

const Julmin = new pelanggan({
    id_pelanggan : 02,
    nama_plgn: "Berkat Julmin Waruwu",
    jenis_kelamin: "Laki - Laki",
    alamat: "Jln Pegangsaan Jakarta Utara",
    telepon_plgn: "0834256754378",
});

const Fadhil = new pelanggan({
    id_pelanggan : 03,
    nama_plgn: "Fadhil Wicaksono",
    jenis_kelamin: "Laki - Laki",
    alamat: "Jln Pondok Kopi Jakarta Timur",
    telepon_plgn: "082156786543",
});

const Sadrul = new pelanggan({
    id_pelanggan : 04,
    nama_plgn: "Sadrul kalam putra jaya Waruwu",
    jenis_kelamin: "Laki - Laki",
    alamat: "Jln Duren Sawit Jakarta Timur",
    telepon_plgn: "082156786543",
});

const Putri = new pelanggan({
    id_pelanggan : 05,
    nama_plgn: "Putri Lestari",
    jenis_kelamin: "Perempuan",
    alamat: "Jln penggilingan Jakarta Timur",
    telepon_plgn: "08856789765",
});

pelanggan.insertMany([Reva, Julmin, Fadhil, Sadrul, Putri], function (error){
    if (error) {
        console.log(error);
    }else {
        console.log("Berhasil disimpan");
        mongoose.connection.close()
    }
});