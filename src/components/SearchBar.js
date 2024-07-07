import { useState } from "react";
import '../styles/SearchBar.css';
import { AiOutlineSearch } from 'react-icons/ai';

export default function SearchBar({onSearch}) {
    const [searchQuery, setSearchQuery] = useState('');

    const handleChangeText = (text) => {
        setSearchQuery(text.target.value);
        onSearch(text.target.value);
    };

    return (
        <div className="col-12 col-md-12 col-lg-8 contenedor-buscador">
            <input placeholder="Buscar jugadores del todo el mundo" onChange={handleChangeText} value={searchQuery} className="buscador"/>
            <button className="boton"><AiOutlineSearch /></button>
        </div>
    );
}