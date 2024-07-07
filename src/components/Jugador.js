import foto from '../images/image-profile.jpg';
import { useParams } from 'react-router-dom';
import '../styles/Jugador.css';
import { useState, useEffect } from 'react';

export default function Jugador() {
    const { idSoccerPlayer } = useParams();
    const [player, setPlayer] = useState();
    useEffect(() => {
        const fetchJugadores = async () => {
            try {
                const response = await fetch(`http://localhost:8080/api/soccer_players/${idSoccerPlayer}`);
                const data = await response.json();
                setPlayer(data);
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
            }
        };
        fetchJugadores();
    }, [idSoccerPlayer]);

    return (
        <div className='container-fluid componente-inicio'>
            <div className='row justify-content-evenly inicio-fila-1'>
                <h1 className='titulo'>{player ? player.name+" "+player.lastName : "Cargando..."}</h1>
            </div>
            <div className='row justify-content-evenly inicio-fila-1 contenedor-imagen-jugador'>
                <img src={foto} alt='imagen'/>
            </div>
            <div className='row justify-content-evenly inicio-fila-1'>
                <p>{player ? player.position.name : "Cargando..."}</p>
                <p>{player ? player.birthdate : "Cargando..."}</p>
                <p>{player ? player.features : "Cargando..."}</p>
            </div>
        </div>
    );
}