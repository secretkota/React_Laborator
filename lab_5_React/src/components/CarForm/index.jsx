
import React from 'react'
import { useForm } from 'react-hook-form'
import { Navigate, useNavigate } from 'react-router';
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
  const Navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm()


  const onSubmit = async (data) => {
    try {
      await api.createCar(data)
      console.log("Машина успешно создана")
      reset() 
      Navigate('/carList')
    } catch (error) {
      console.log("Ошибка при создании машины")
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
          <Inputtext type="number" id="max_speed" maxLength={3}
          {...register("max_speed", { required: true, maxLength: 3 })} />
          {errors.max_speed && <ErrorText>Введите цифру, максимум 3 символа.</ErrorText>}

          <LabelText htmlFor="likes">Лайки</LabelText>
          <Inputtext
            type="text"
            id="likes"
            value={0}
            disabled
            {...register("likes")}
          />

          <SubmitButton type="submit">Отправить</SubmitButton>
        </Form>
      </FormContainer>
    </>
  )
}
