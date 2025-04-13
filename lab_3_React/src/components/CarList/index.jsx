import React from 'react'

import { List, Item, Image, TextParking } from './CarList.styled'

import cars from "../../assets/data/cars.json"
import Modal from '../Modal';
import bgImg from "../../assets/img/back_image.jpg"

/**
 * компонент CarList, который отображает список автомобилей.
 * Когда пользователь кликает по любому автомобилю из списка, появится модальное окно с подробной информацией об этом автомобиле.
 * 
 * @component
 * @returns {JSX.Element} Компонент списка автомобилей с возможностью просмотра деталей в модальном окне.
 */
const CarList = () => {
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
                    onClose={() => setModalIsOpen(false)}
                >
                    <h2>{selectedCar.name}</h2>
                    <ul>
                        <li><img src={selectedCar.image} alt={selectedCar.name} /></li>
                    </ul>
                </Modal>
            )}
        </>
    )
}

export default CarList
