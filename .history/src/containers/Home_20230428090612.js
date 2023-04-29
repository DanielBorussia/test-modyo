import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import '../containers/Home.css';
import useGetCards from '../hooks/useGetCards';
import Score from '../components/Score';
import Button from 'react-bootstrap/Button';
import ModalAlert from '../components/ModalAlert';
import Form from 'react-bootstrap/Form';

const Home = () => {
    const [firstCard, setFirstCard] = useState({});
    const [secondCard, setSecondCard] = useState({});
    const [unFlippedCards, setUnFlippedCards] = useState([]);
    const [disabledCards, setDisabledCards] = useState([]);
    const [points, setPoints] = useState(0);
    const [fouls, setFouls] = useState(0);
    const {alterOrder, cards} = useGetCards();
    const [modalResultShow, setModalResultShow] = useState(false);
    const [modalInitShow, setModalInitShow] = useState(false);
    const [username, setUsername] = useState(localStorage.getItem('username'));

    const flipCard = (code, name) => {
        console.log("seleccionaste el "+ name);
        if(firstCard.code == code && firstCard.name == name){
            console.log("false");
            return false;
        }
        if(!firstCard.code){
            console.log("***registro de primer animal");
            setFirstCard({code, name});
        }else if(!secondCard.code){
            console.log("***registro de segundo animal");
            setSecondCard({code, name});
        }
        return true;
    }

    const checkForMatch = () => {
        console.log("consultamos si coindicen");
        console.log("primera ",firstCard);
        console.log("segunda ",secondCard);
     
        if(firstCard.name && secondCard.name){
            (firstCard.name == secondCard.name) ? disableCards() : unFlipCards();
        } 
    }

    const unFlipCards = () => {
        setFouls(fouls+ 1);
        setUnFlippedCards([firstCard.code, secondCard.code]);
        resetCards();
    }

    const disableCards = () => {
        console.log("COINCIDEN");
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
        if(!username){
            setModalInitShow(true);
        }
    }, []);

    const saveUsername = () => {
        localStorage.setItem('username', username);
        setModalInitShow(false);
    }

    const newGame = () => {
        resetCards({});
        setDisabledCards([]);
        setUnFlippedCards([]);
        alterOrder(cards);
        setPoints(0);
        setFouls(0);
        setModalResultShow(false);
    }

    return (
        <div className='cards'>
            <Score points={points} fouls={fouls} username={username}/>
            <div className='cards__container'>
                {
                    cards.map((card, index) => 
                        <Card 
                            key={index}
                            code={index}
                            title={card.title}
                            image={card.url}
                            flipCard={flipCard}
                            unFlippedCards={unFlippedCards}
                            disabledCards={disabledCards}
                        />
                    )
                }
            </div>
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
                    <Form.Control type="text" placeholder="Nombre de usuario" onChange={(e)=> setUsername(e.target.value)}/>
                }
                titleButton={'Jugar!'}
            />
        </div>
    );
}

export default Home;