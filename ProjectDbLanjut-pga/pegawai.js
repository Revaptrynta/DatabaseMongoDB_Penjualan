const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/db-penjualan');

const pegawaiSchema = new mongoose.Schema({
    id_pegawai : String,
    nama_pegawai: String,
    tlpn_pegawai: String,
    email_pegawai: String,
    alamat_pegawai: String,
});

const pegawai = mongoose.model("pegawai",pegawaiSchema);

const pegawai1 = new pegawai({
    id_pegawai : "PG01",
    nama_pegawai: "Julmin",
    tlpn_pegawai: "081234567890",
    email_pegawai: "julminnnn@gmail.com",
    alamat_pegawai: "Jl. Ancol Selatan 2, Sunter Agung, Jakarta Utara",
});

const pegawai2 = new pegawai({
    id_pegawai : "PG02",
    nama_pegawai: "Fadhil Wicaksono",
    tlpn_pegawai: "081344567890",
    email_pegawai: "wicaksonodhil@gmai.com",
    alamat_pegawai: "Jln Pondok Kopi, Jakarta Timur",
});

const pegawai3 = new pegawai({
    id_pegawai : "PG03",
    nama_pegawai: "Sadrul Kalam",
    tlpn_pegawai: "081235678900",
    email_pegawai: "sadrulk@gmail.com",
    alamat_pegawai: "Jln Duren Sawit, Jakarta Timur",
});

const pegawai4 = new pegawai({
    id_pegawai : "PG04",
    nama_pegawai: "Reva Putri",
    tlpn_pegawai: "081236567890",
    email_pegawai: "revaputri@gmail.com",
    alamat_pegawai: "Jln Pegangsaan, Jakarta Utara",
});

const pegawai5 = new pegawai({
    id_pegawai : "PG05",
    nama_pegawai: "Putra Jaya",
    tlpn_pegawai: "082234556776",
    email_pegawai: "jayasiputra@gmail.com",
    alamat_pegawai: "Jln penggilingan, Jakarta Timur",
});

pegawai.insertMany([pegawai1, pegawai2, pegawai3, pegawai4, pegawai5], function (error){
    if (error) {
        console.log(error);
    }else {
        console.log("Berhasil disimpan");
        mongoose.connection.close()
    }
});