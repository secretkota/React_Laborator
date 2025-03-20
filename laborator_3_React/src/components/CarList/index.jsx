import React from 'react'

import cars from "../../cars.json"
import Modal from '../Modal';
import { Btn } from '../Hero/Hero.styled';


const CarList = () => {
    const [selectedCar, setSelectedCar] = React.useState(null);
    const [modalIsopen, setModalIsOpen] = React.useState(false)

    const handleClick = (car) => {
        setModalIsOpen(true);
        setSelectedCar(car);

    }

    const handleClose = () => { }

    return (
        <>
            <div>
                {cars.map((car, index) => (
                    <div key={index} onClick={() => handleClick(car)}>
                        <img src={car.image} alt="112" />
                    </div>
                ))}

                {selectedCar && (
                    <>
                        <Modal
                            isOpen={modalIsopen}
                            onClose={() => setModalIsOpen(false)}
                        >
                            <h2>{selectedCar.name}</h2>
                            <img src={selectedCar.image} alt="112" />
                        </Modal>
                    </>
                )
                }
            </div>
        </>

    )
}

export default CarList