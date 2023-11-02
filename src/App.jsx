import data from "./data.json";
import Produk from "./Produk";

export default function App(){
    return (
        <ul>
            {data.map((item) => (
                <Produk 
                    key={item.id}
                    id={item.id}
                    nama_produk={item.nama_produk}
                />
            ))}
        </ul>
    )
}

