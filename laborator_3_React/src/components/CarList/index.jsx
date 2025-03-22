import React from 'react'

import { List, Item, Image, TextParking} from './CarList.styled'

import cars from "../../assets/data/cars.json"
import Modal from '../Modal';
import bgImg from "../../assets/img/back_image.jpg"



const CarList = () => {
    const [selectedCar, setSelectedCar] = React.useState(null);
    const [modalIsopen, setModalIsOpen] = React.useState(false)

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
                <>
                    <Modal
                        isOpen={modalIsopen}
                        onClose={() => setModalIsOpen(false)}
                    >
                            <h2>{selectedCar.name}</h2>
                            <list><img src={selectedCar.image} alt="112" /></list>
                        </Modal>
                    </>
                )}
        </>
    )
}

export default CarList