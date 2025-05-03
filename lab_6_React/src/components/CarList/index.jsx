import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router';
import api from '../../api/cars';
import { List, Item, Image, TextParking, ImageModal, Modaltext, ButtonDel, ButtonEdit, FavoriteSection, FavoriteTitle, FavoriteList, FavoriteItem } from './CarList.styled'

import Modal from '../Modal';
import bgImg from "../../assets/img/back_image.jpg"
import LoadingSpinner from '../../assets/img/loader.svg';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../../store/favoriteCar/slice';


const CarList = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const favoriteCar = useSelector(state => state.favoriteCar)

    const [loading, setLoading] = React.useState(true)
    const [error, setError] = React.useState(null)
    const [cars, setCars] = React.useState([])
    const [selectedCar, setSelectedCar] = React.useState(null)
    const [modalIsOpen, setModalIsOpen] = React.useState(false)
    const [showDeleteBTN, setShowDeleteBTN] = React.useState(false)

    const handleFavorite = (cars) => {
        const isFavorite = favoriteCar.some(fav => fav.id === cars.id)
        if (isFavorite) {
            dispatch(removeFavorite(cars.id))
        } else {
            dispatch(addFavorite(cars))
        }
    }

    const handleClick = (cars) => {
        setModalIsOpen(true)
        setSelectedCar(cars)
    }

    const handleClickDelete = (id) => {
        deleteCar(Number(id))
    }

    const deleteCar = async (id) => {
        try {
            await api.deleteCar(id)
            setCars(cars.filter(car => car.id !== id))
            setModalIsOpen(false)
            navigate('/carList')
        } catch (error) {

        } finally {
            setLoading(false)
        }
    }


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

        const fetchCarById = async () => {
            try {
                const data = await api.getCarById(id)
                setSelectedCar(data)
                setModalIsOpen(true)

            } catch (error) {
                setError(error)
            } finally {
                setLoading(false)
            }
        }

        if (id) {
            fetchCarById();
            setSelectedCar(cars[0])
        } else {
            fetchCars();
        }
    }, [id])

    return (
        <>

            <List bgImg={bgImg}>
                <TextParking>Our Parking:</TextParking>
                {loading && <img src={LoadingSpinner} alt="Loading..." />}
                {!loading && cars.map((data, index) => (
                    <Item key={index} onClick={() => handleClick(cars[index])}>
                        <Image src={data.image} alt="image none" />
                    </Item>
                ))}
                {error && <p>Error: {error.message}</p>}
                <FavoriteSection>
                    <FavoriteTitle>Favorite cars:</FavoriteTitle>
                    <FavoriteList>
                        {favoriteCar.map(car => (
                            <FavoriteItem key={car.id}>
                                <Image src={car.image} alt={car.name} />
                                <p style={{ color: 'white' }}>{car.name}</p>
                            </FavoriteItem>
                        ))}
                    </FavoriteList>
                </FavoriteSection>
            </List>

            {selectedCar && (

                <Modal
                    isOpen={modalIsOpen}
                    onClose={() => {
                        setModalIsOpen(false)
                        navigate('/carList')
                        setShowDeleteBTN(false)
                    }}
                >
                    <Modaltext style={{ background: "#212020", color: "white" }}>
                        <h2>{selectedCar.name}</h2>
                        <ul>
                            <li><ImageModal src={selectedCar.image} alt={selectedCar.name} /></li>
                            <li><p>Description:</p>{selectedCar.description}</li>
                            <li><p>Max-speed:</p>{selectedCar.max_speed}</li>
                            <li><p>Price:</p>{selectedCar.price}</li>
                            <li><p>Likes:</p>{selectedCar.likes}</li>
                        </ul>
                    </Modaltext>
                    {showDeleteBTN && (
                        <ButtonDel onClick={() => {
                            handleClickDelete(id)
                            setShowDeleteBTN(false)
                        }}>Delete</ButtonDel>
                    )}
                    <ButtonEdit onClick={() => {
                        navigate(`/carList/${selectedCar.id}`)
                        setShowDeleteBTN(true)
                    }}>Edit</ButtonEdit>
                    <button onClick={() => {
                        handleFavorite(selectedCar)
                    }} >
                        {favoriteCar.some(fav => fav.id === selectedCar.id) ? "★ Удалить из избранного" : "☆ В избранное"}
                    </button>
                </Modal>
            )}
        </>
    )
}

export default CarList
