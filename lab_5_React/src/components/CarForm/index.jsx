/**
 * Компонент CarForm
 * 
 * React-компонент, отображающий форму для создания новой записи о машине.
 * Использует библиотеку `react-hook-form` для управления формой и валидации.
 * После успешной отправки данных вызывает API для создания машины и сбрасывает форму.
 * 
 * @component
 * @example
 * return (
 *   <CarForm />
 * )
 */

import React from 'react'
import { useForm } from 'react-hook-form'

import api from '../../assets/api/cars';
import {
  FormContainer,
  Form,
  Inputtext,
  LabelText,
  Textareatext,
  ErrorText,
  SubmitButton
} from './CarForm.styled';

export default function CarForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm()

  /**
   * Обработчик отправки формы.
   * Отправляет данные о машине на сервер и сбрасывает форму при успехе.
   *
   * @async
   * @function
   * @param {Object} data - Данные машины, введённые в форму.
   * @param {string} data.name - Название бренда машины.
   * @param {string} data.price - Цена машины.
   * @param {string} data.description - Описание машины.
   * @param {string} data.image - Ссылка на изображение машины.
   * @param {string} data.max_speed - Максимальная скорость машины.
   * @param {number} data.likes - Количество лайков (по умолчанию: 0, поле отключено).
   */
  const onSubmit = async (data) => {
    try {
      const car = await api.createCar(data)
      console.log("Машина успешно создана", car)
      reset()
    } catch (error) {
      console.error("Ошибка при создании машины:", error)
    }
  }

  return (
    <>
      <FormContainer>
        <h1>Форма машины</h1>
        <p>Все поля обязательны для заполнения</p>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <LabelText htmlFor="name">Бренд</LabelText>
          <Inputtext type="text" id="name" {...register("name", { required: true })} />
          {errors.name && <ErrorText>Это поле обязательно</ErrorText>}

          <LabelText htmlFor="price">Цена</LabelText>
          <Inputtext type="number" id="price" {...register("price", { required: true })} />
          {errors.price && <ErrorText>Это поле обязательно</ErrorText>}

          <LabelText htmlFor="description">Описание</LabelText>
          <Textareatext id="description" {...register("description", { required: true })}></Textareatext>
          {errors.description && <ErrorText>Это поле обязательно</ErrorText>}

          <LabelText htmlFor="image">Изображение</LabelText>
          <p>URL</p>
          <Inputtext type="text" id="image" {...register("image", { required: true })} />
          {errors.image && <ErrorText>Это поле обязательно</ErrorText>}

          <LabelText htmlFor="max_speed">Максимальная скорость</LabelText>
          <Inputtext type="number" id="max_speed" {...register("max_speed", { required: true })} />
          {errors.max_speed && <ErrorText>Это поле обязательно</ErrorText>}

          <LabelText htmlFor="likes">Лайки</LabelText>
          <Inputtext
            type="text"
            id="likes"
            value={0}
            disabled
            {...register("likes", { required: true })}
          />

          <SubmitButton type="submit">Отправить</SubmitButton>
        </Form>
      </FormContainer>
    </>
  )
}
