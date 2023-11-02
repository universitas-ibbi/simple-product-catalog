import { Link } from 'react-router-dom'
// buat komponen dalam file tersendiri
// export default berfungi untuk mengexport function
// agar bisa dipakai di file lain
export default function Produk(props){
    return  <li><Link to={`detail/${props.id}`}>
        {props.nama_produk}</Link></li>
}