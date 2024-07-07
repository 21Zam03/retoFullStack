import { useEffect, useState } from 'react';
import '../styles/TablaJugadores.css'
import { Link } from 'react-router-dom';
import { URL_INFOFUTBOLISTA } from '../utils/constants';
import foto from '../images/image-profile.jpg'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

export default function TablaJugadores({ searchQuery }) {

    const [jugadores, setJugadores] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(5);
    const [totalPages, setTotalPages] = useState(0);

    const fetchJugadores = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(`http://localhost:8080/api/soccer_players?page=${page}&size=${size}`);
            
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            
            const data = await response.json();
            setJugadores(data.content); // `data.content` es donde se encuentra la lista de futbolistas
            setTotalPages(data.totalPages);
        } catch (error) {
            console.error('Error fetching data:', error);
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchJugadores(page, size);
    }, [page, size]);

    const handleNextPage = () => setPage(prevPage => prevPage + 1);
    const handlePrevPage = () => setPage(prevPage => (prevPage > 0 ? prevPage - 1 : 0));

    if (loading) {
        return <div>Cargando futbolistas...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    const pages = Array.from({ length: totalPages }, (_, index) => index);

    return (
        <div className='col-12 col-md-12 col-lg-8'>
            <div className='tabla'>
                {
                    jugadores.length > 0 ? (
                        <>
                            <table cellSpacing="10" cellPadding="10">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Nombre</th>
                                        <th>Apellido</th>
                                        <th>Fecha de Nacimiento</th>
                                        <th>Características</th>
                                        <th>Posición</th>
                                        <th>Ver info</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        jugadores.map((player, index) => (
                                            <tr key={index}>
                                                <td><img src={foto} /></td>
                                                <td>{player.name}</td>
                                                <td>{player.lastName}</td>
                                                <td>{player.birthdate}</td>
                                                <td>{player.features}</td>
                                                <td>{player.position.name}</td>
                                                <td><Link to={`${URL_INFOFUTBOLISTA}/${player.soccerPlayerId}`}>Info</Link></td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                            <div className='contenedor-botones'>
                                <button className={page === 0 ? "desactive" : "active"} onClick={handlePrevPage} disabled={page === 0}><FaArrowLeft color='white'/></button>
                                <div className='botonpages'>
                                    {pages.map((pageNumber, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setPage(pageNumber)}
                                            className={pageNumber === page ? 'active2' : 'desactive2'}
                                        >
                                            {pageNumber + 1}
                                        </button>
                                    ))}
                                </div>
                                <button className={page >= totalPages-1 ? "desactive" : "active"} onClick={handleNextPage} disabled={page >= totalPages -1}><FaArrowRight color="white"/></button>
                            </div>
                        </>

                    ) : (
                        <>
                            <div className='no_content'>
                                <p>No se encontraron resultados....</p>
                            </div>
                        </>
                    )
                }
            </div>
        </div>
    );
}