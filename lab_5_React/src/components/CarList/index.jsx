import React, { useEffect } from 'react'
import api from '../../assets/api/cars';
import { List, Item, Image, TextParking } from './CarList.styled'

//import cars from "../../assets/data/cars.json"
import Modal from '../Modal';
import bgImg from "../../assets/img/back_image.jpg"
import { useNavigate } from 'react-router';
import LoadingSpinner from '../../assets/img/loader.svg';

const CarList = () => {
    const navigate = useNavigate()

    const [loading, setLoading] = React.useState(true)
    const [error, setError] = React.useState(null)
    const [cars, setCars] = React.useState([])
    const [selectedCar, setSelectedCar] = React.useState(null)
    const [modalIsOpen, setModalIsOpen] = React.useState(false)

    /**
   * Открывает модальное окно с подробной информацией о выбранной машине.
   * 
   * @param {Object} car - Объект машины, на которую кликнули.
   */

    const handleClick = (cars) => {
        setModalIsOpen(true)
        setSelectedCar(cars)
    }

  /**
   * Получает список машин с сервера при монтировании компонента.
   * Устанавливает состояние загрузки и обрабатывает возможные ошибки.
   */

    useEffect(() => {
        setLoading(true);
        setError(null);

        const fetchCars = async () => {
            try {
                const data = await api.getCars()
                setCars(data)
            } catch (error) {
                setError(error)
            } finally {
                setLoading(false)
            }
        }

        fetchCars();
    }, [])

    return (
        <>

            <List bgImg={bgImg}>
                <TextParking>Our Parking:</TextParking>
                {/* {cars.map((car, index) => (
                    <Item key={index} onClick={() => handleClick(car)}>
                        <Image src={car.image} alt="image none" />
                    </Item>
                ))} */}
                {loading && <img src={LoadingSpinner} alt="Loading..." />}
                {!loading && cars.map((data, index) => (
                    <Item key={index} onClick={() => handleClick(cars[index])}>
                        <Image src={data.image} alt="image none" />
                    </Item>
                ))}
                {error && <p>Error: {error.message}</p>}
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
