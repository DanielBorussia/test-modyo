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
    const cards = useGetCards();
    const [modalShow, setModalShow] = useState(false);

    const flipCard = (code, name) => {
        console.log("seleccionaste el "+ name);
       if(firstCard.code == code && firstCard.name == name){
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
        setPoints(points+1);
        setDisabledCards([...disabledCards,firstCard.code, secondCard.code]);
        resetCards();
    }

    const resetCards = () => {
        setFirstCard({});
        setSecondCard({});
    }

    useEffect(() => {
        checkForMatch();
    }, [secondCard]);

   

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
            <Button variant="primary" onClick={() => setModalShow(true)}>
                    Launch vertically centered modal
            </Button>
            <ModalAlert
                show={modalShow}
                onHide={() => setModalShow(false)}
                title={'Felicitaciones'}
                children={
                    <p>Has ganado con {fouls} movimientos</p>
                }
            />
        </div>
    );
}

export default Home;