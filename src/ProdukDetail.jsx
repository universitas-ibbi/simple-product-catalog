import data from "./data.json";
import { useParams  } from "react-router-dom";

export default function ProdukDetail(){
    const {id} = useParams();

    const produk = data.find((item) => item.id === parseInt(id));
    return (
        <>
            <h1>Detail Produk {produk.nama_produk}</h1>
            <p>Jenis: {produk.jenis}</p>
            <p>Harga: Rp. {produk.harga}</p>
        </>
    )
}