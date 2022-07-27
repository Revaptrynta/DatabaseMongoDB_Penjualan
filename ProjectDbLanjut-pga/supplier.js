const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/db-penjualan');

const supplierSchema = new mongoose.Schema({
    id_supplier : Number,
    nama_supplier: String,
    tlpn_supplier: String,
    alamat : String,
});

const supplier = mongoose.model("supplier",supplierSchema);

const supplier1 = new supplier({
    id_supplier : 201,
    nama_supplier: "PT. SUMBER KERTAS",
    tlpn_supplier: "021-2345678",
    alamat : "Jln Tipar Cakung Jakarta Utara",
});

const supplier2 = new supplier({
    id_supplier : 202,
    nama_supplier: "PT. SNOWMAN BOARDMARKER",
    tlpn_supplier: "021-1235432",
    alamat : "Jln Pondok Kopi Jakarta Timur",
});

const supplier3 = new supplier({
    id_supplier : 203,
    nama_supplier: "PT. SUMBER KARYA",
    tlpn_supplier: "021-2356657",
    alamat : "Jln Duren Sawit Jakarta Timur",
});

supplier.insertMany([supplier1, supplier2, supplier3], function (error){
    if (error) {
        console.log(error);
    }else {
        console.log("Berhasil disimpan");
        mongoose.connection.close()
    }
});