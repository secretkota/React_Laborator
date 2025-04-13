import { useEffect, useState } from 'react'
import { Btn, Main, Subtitle, Title } from './Hero.styled'
import heroBg from "../../assets/img/back_image.jpg"

import data from '../../assets/data/data'


/**
 * компонент Hero, который отображает заголовок, подзаголовок и кнопку.
 * Контент меняется каждые 5 секунд, перебирая массив данных.
 * 
 * @component
 * @returns {JSX.Element} Компонент hero-секции с автосменой контента.
 */
export default function Hero() {
    /**
     *текущий индекс данных, которые показываются в hero-секции.
     * @type {[number, Function]}
     */
    const [currentInfo, setCurrentInfo] = useState(0);
    
    /**
     * При монтировании компонента запуск интервала,
     * который обновляет currentInfo каждые 5 секунд.
     */
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

        // Очистка интервал при размонтировании компонента.
        return () => clearInterval(timer)
    }, [])

    return (
        <>
            <Main bgImg={heroBg}>
                <Title>{data[currentInfo].title}</Title>
                <Subtitle>{data[currentInfo].subtitle}</Subtitle>
                <Btn>
                    {data[currentInfo].btnText}
                </Btn>
            </Main>
        </>
    )
}
