import '../../src/styles/Inicio.css';
import TablaJugadores from './TablaJugadores';

export default function Inicio() {
    return (
        <div className='container-fluid componente-inicio'>
            <div className='row justify-content-evenly inicio-fila-1'>
                <h1 className='titulo'>Lista de Futbolistas</h1>
            </div>
            <div className='row justify-content-evenly inicio-fila-1'>
                <TablaJugadores/>
            </div>
        </div>
    );
}