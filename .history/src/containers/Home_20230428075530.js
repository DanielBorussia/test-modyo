import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import '../containers/Home.css';
import useGetCards from '../hooks/useGetCards';
import Score from '../components/Score';
import Button from 'react-bootstrap/Button';
import ModalAlert from '../components/ModalAlert';

const Home = () => {
    const [firstCard, setFirstCard] = useState({});
    const [secondCard, setSecondCard] = useState({});
    const [unFlippedCards, setUnFlippedCards] = useState([]);
    const [disabledCards, setDisabledCards] = useState([]);
    const [points, setPoints] = useState(0);
    const [fouls, setFouls] = useState(0);
    const {alterOrder, cards} = useGetCards();
    const [modalShow, setModalShow] = useState(false);

    const flipCard = (code, name) => {
        console.log("seleccionaste el "+ name);
        if(firstCard.code == code && firstCard.name == name){
            return false;
        }
        if(!firstCard.code){
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
        console.log(disabledCards);
        console.log(unFlippedCards);
        if(firstCard.name && secondCard.name){
            (firstCard.name == secondCard.name) ? disableCards() : unFlipCards();
        } 
    }

    const unFlipCards = () => {
        setFouls(fouls+ 1);
        setUnFlippedCards([...unFlippedCards, firstCard.code, secondCard.code]);
        resetCards();
    }

    const disableCards = () => {
        setPoints(points+1);
        setDisabledCards([...disabledCards, firstCard.code, secondCard.code]);
        resetCards();
        if(points+1 == 10){
            setModalShow(true);
        }
    }

    const resetCards = () => {
        setFirstCard({});
        setSecondCard({});
    }

    useEffect(() => {
        checkForMatch();
    }, [secondCard]);

    const newGame = () => {
        resetCards({});
        setDisabledCards([]);
        setUnFlippedCards([]);
       // alterOrder(cards);
        setPoints(0);
        setFouls(0);
        setModalShow(false);
    }

    return (
        <div className='cards'>
            <Score points={points} fouls={fouls} />
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
                show={modalShow}
                onHide={newGame}
                title={'Felicitaciones'}
                children={
                    <h4>Finalizaste el juego con {fouls} movimientos</h4>
                }
            />
        </div>
    );
}

export default Home;