import React, { useEffect, useRef, useState } from 'react';
import Card from '../components/Card';
import '../styles/Home.css';
import useGetCards from '../hooks/useGetCards';
import Score from '../components/Score';
import Button from 'react-bootstrap/Button';
import ModalAlert from '../components/ModalAlert';
import Form from 'react-bootstrap/Form';
import useLocalStorage from '../hooks/useLocalStorage';

const Home = () => {
    const [firstCard, setFirstCard] = useState({});
    const [secondCard, setSecondCard] = useState({});
    const [unTurnedCardsCodes, setUnTurnedCardsCodes] = useState([]);
    const [disabledCards, setDisabledCards] = useState([]);
    const [points, setPoints] = useState(0);
    const [fouls, setFouls] = useState(0);
    const [ cards, loading, alterOrder ] = useGetCards();
    const [modalResultShow, setModalResultShow] = useState(false);
    const [modalInitShow, setModalInitShow] = useState(false);
    const [valueUser, setValue ] = useLocalStorage('user', null);
    const usernameRef = useRef();

    const flipCard = (code, name) => {
        if(firstCard.code === code && firstCard.name === name){
            return false;
        }
        if(!firstCard.code){
            setFirstCard({code, name});
        }else if(!secondCard.code){
            setSecondCard({code, name});
        }
        return true;
    }

    const checkForMatch = () => {
        if(firstCard.name && secondCard.name){
            (firstCard.name === secondCard.name) ? disableCards() : unFlipCards();
        } 
    }

    const unFlipCards = () => {
        setFouls(fouls+ 1);
        setUnTurnedCardsCodes([firstCard.code, secondCard.code]);
        resetCards();
    }

    const disableCards = () => {
        setPoints(points+1);
        setDisabledCards([...disabledCards, firstCard.code, secondCard.code]);
        resetCards();
        if(points+1 == 10){
            setModalResultShow(true);
        }
    }

    const resetCards = () => {
        setFirstCard({});
        setSecondCard({});
    }

    useEffect(() => {
        checkForMatch();
    }, [secondCard]);

    useEffect(() => {
        if(!valueUser){
            setModalInitShow(true);
        }
    }, []);

    const saveUsername = () => {
        console.log(usernameRef.current.value);
        setValue(usernameRef.current.value);
        setModalInitShow(false);
    }

    const newGame = () => {
        resetCards({});
        setDisabledCards([]);
        setUnTurnedCardsCodes([]);
        alterOrder(cards);
        setPoints(0);
        setFouls(0);
        setModalResultShow(false);
    }

    return (
        <div className='cards'>
            <Score points={points} fouls={fouls} username={valueUser}/>
           
            {loading 
                ? <h1 className='text-light'>Cargando...</h1>
                : 
                <div className='cards__container' data-testid="cards">
                {
                    cards.map((card, index) => 
                        <Card 
                            key={index}
                            code={index+1}
                            title={card.title}
                            image={card.url}
                            flipCard={flipCard}
                            unTurnedCardsCodes={unTurnedCardsCodes}
                            disabledCards={disabledCards}
                            data-testid="card-test"
                        />
                    )
                }
                </div>
            }
            
            <Button variant="primary" onClick={newGame}>
                Reiniciar
            </Button>

            <ModalAlert
                show={modalResultShow}
                onHide={newGame}
                title={'Felicitaciones'}
                children={
                    <h4>Finalizaste el juego con {fouls} errores</h4>
                }
                titleButton={'Volver a Jugar!'}
            />

            <ModalAlert
                show={modalInitShow}
                onHide={saveUsername}
                title={'Ingresa tu nombre!'}
                children={
                    <Form.Control type="text" placeholder="Nombre de usuario" ref={usernameRef}/>
                }
                titleButton={'Jugar!'}
            />
        </div>
    );
}

export default Home;