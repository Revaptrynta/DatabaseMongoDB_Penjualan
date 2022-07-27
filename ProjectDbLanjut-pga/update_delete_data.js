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

var barang_id = "62de1143531c2e02079cbc28";
barang.findByIdAndUpdate(barang_id,
    {nama_barang: "Pulpen Joyko"},
    function(error){
    if (error) {
        console.log(error);
    }else {
            console.log("Berhasil diupdate");
            mongoose.connection.close()
        } 
    }
);
