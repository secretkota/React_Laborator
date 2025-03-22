import { useEffect, useState } from 'react'
import { Btn, Main, Subtitle, Title } from './Hero.styled'
import heroBg from "../../assets/img/back_image.jpg"

import data from '../../assets/data/data'
import { Link } from 'react-router';

export default function Hero() {
    const [currentInfo, setCurrentInfo] = useState(0);
    
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentInfo((prevInfo) => {
                if (prevInfo < data.length - 1) {
                    return prevInfo + 1
                } else {
                    return 0
                }
            })
        }, 5000)

        return () => clearInterval(timer)
    }, [])

    return (
        <>
            <Main bgImg={heroBg}>
                <Title>{data[currentInfo].title}</Title>
                <Subtitle>{data[currentInfo].subtitle}</Subtitle>
                <Btn>{data[currentInfo].btnText}</Btn>
            </Main>
        </>
    )
}