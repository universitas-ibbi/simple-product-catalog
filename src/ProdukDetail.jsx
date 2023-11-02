import data from "./data.json";
import { useParams,useNavigate  } from "react-router-dom";

export default function ProdukDetail(){
    const {id} = useParams();
    const navigate = useNavigate();

    const produk = data.find((item) => item.id === parseInt(id));
    return (
        <>
            <h1>Detail Produk {produk.nama_produk}</h1>
            <p>Jenis: {produk.jenis}</p>
            <p>Harga: Rp {produk.harga.toLocaleString('id-ID')}</p>
            <button onClick={()=>navigate(-1)}>Back</button>
        </>
    )
}