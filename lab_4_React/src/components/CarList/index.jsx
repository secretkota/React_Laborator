import React, { useEffect } from 'react'

import { List, Item, Image, TextParking } from './CarList.styled'

import cars from "../../assets/data/cars.json"
import Modal from '../Modal';
import bgImg from "../../assets/img/back_image.jpg"
import { useNavigate, useParams } from 'react-router';

/**
 * компонент CarList, который отображает список автомобилей.
 * Когда пользователь кликает по любому автомобилю из списка, появится модальное окно с подробной информацией об этом автомобиле.
 * 
 * @component
 * @returns {JSX.Element} Компонент списка автомобилей с возможностью просмотра деталей в модальном окне.
 */
const CarList = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    /**
     * выбранный автомобиль в состоянии selectedCar.
     * @type {[Object|null, Function]}
     */
    const [selectedCar, setSelectedCar] = React.useState(null);

    /**
     * Проверка открыто ли модальное окно.
     * @type {[boolean, Function]}
     */
    const [modalIsOpen, setModalIsOpen] = React.useState(false)

    /**
     * Когда пользователь кликает по автомобилю, открывается модалка и сохраняется выбранный автомобиль в состояние.
     * @param {Object} car - Автомобиль, по которому кликнули.
     */
    const handleClick = (car) => {
        setModalIsOpen(true);
        setSelectedCar(car);
    }

    useEffect(() => {
        if (id) {
            const carId = Number(id);
            if (isNaN(carId)) {
                navigate('/404');
                return;
            }

            const foundCar = cars.find(car => car.id === carId);
            if (foundCar) {
                setSelectedCar(foundCar);
                setModalIsOpen(true);
            } else {
                navigate('/404');
            }
        }
    }, [id, navigate]);

    return (
        <>

            <List bgImg={bgImg}>
                <TextParking>Our Parking:</TextParking>
                {cars.map((car, index) => (
                    <Item key={index} onClick={() => handleClick(car)}>
                        <Image src={car.image} alt="image none" />
                    </Item>
                ))}
            </List>

            {selectedCar && (
                <Modal
                isOpen={modalIsOpen}
                onClose={() => {
                    setModalIsOpen(false)
                    navigate('/carList')
                }}
            >
                    <h2>{selectedCar.name}</h2>
                    <ul>
                        <li><img src={selectedCar.image} alt={selectedCar.name} /></li>
                        <li><p>Description:</p>{selectedCar.description}</li>
                        <li><p>Max-speed:</p>{selectedCar.max_speed}</li>
                        <li><p>Price:</p>{selectedCar.price}</li>
                        <li><p>Likes:</p>{selectedCar.likes}</li>
                    </ul>
                </Modal>
            )}
        </>
    )
}

export default CarList
