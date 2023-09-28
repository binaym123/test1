import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

function FormHook() {
  const { register, handleSubmit, formState: { errors }, formState } = useForm({
    mode: 'onBlur',
    defaultValues: {
      firstName: '',
      lastName: '',
      streetAddress: '',
      streetAddressLine2: '',
      city: '',
      stateProvince: '',
      postalZipCode: '',
      phoneNumber: '',
    }
  });
  const onSubmit = data => console.log(data);
  // console.log(errors);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    streetAddress: '',
    streetAddressLine2: '',
    city: '',
    stateProvince: '',
    postalZipCode: '',
    phoneNumber: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log('Form Data:', formData);
  // };

  return (
    <div className="form">
      <div className="form__container">
        <div className='form__logo'>
          <img src='https://media.licdn.com/dms/image/C560BAQEhDhmzV5gHww/company-logo_200_200/0/1519876265538?e=2147483647&v=beta&t=P59Vw3I9smG4nC9rY1c00SAv8kFYneYpJXhlMGPL42A' alt="Studio Logo" />
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='form__input_wrapper'>
            <div>
              <h2 className='sure'>Full Name</h2>
            </div>
            <div className='form__name'>
              <div className="form__name_wrap">
                <input 
                  type="text" 
                  id="firstName" 
                  name="firstName"
                  {...register('firstName', {
                    required: 'Поле не заполнено',
                  })}
                />
                <label htmlFor="firstName">First Name</label>
                {errors.firstName && 
                  <span className="error-text">{errors.firstName.message}
                </span>}
              </div>

              <div className="form__name_wrap">
                <input 
                  type="text" 
                  id="lastName" 
                  name="lastName" 
                  {...register('lastName', {
                    required: 'Поле не заполнено',
                  })}
                />
                <label htmlFor="lastName">Last Name</label>
                {errors.lastName && 
                  <span className="error-text">{errors.lastName.message}
                </span>}
              </div>
            </div>
            <div>
              <h2 className='sure'>Address</h2>
            </div>
            <div className='form__address'>
              <div className="form__address_wrap">
                <input 
                  type="text" 
                  id="streetAddress" 
                  name="streetAddress" 
                  {...register('streetAddress', {
                    required: 'Поле не заполнено',
                  })}
                />
                <label htmlFor="streetAddress">Street Address</label>
                {errors.streetAddress && 
                  <span className="error-text">{errors.streetAddress.message}
                </span>}
              </div>
              <div className="form__address_wrap mt-30">
                <input type="text" id="streetAddressLine2" name="streetAddressLine2" 
                {...register('streetAddressLine2', {
                  required: 'Поле не заполнено',
                })}
                />
                <label htmlFor="streetAddressLine2">Street Address Line 2</label>
                {errors.streetAddressLine2 && 
                  <span className="error-text">{errors.streetAddressLine2.message}
                </span>}
              </div>
              <div className='flex form__address_row mt-30'>
                <div className="form__address_wrap">
                  <input 
                    type="text" 
                    id="city" 
                    name="city" 
                    {...register('city', {
                      required: 'Поле не заполнено',
                    })}
                  />
                  <label htmlFor="city">City</label>
                  {errors.city && 
                    <span className="error-text">{errors.city.message}
                  </span>}
                </div>
                <div className="form__address_wrap">
                  <input 
                    type="text" 
                    id="stateProvince" 
                    name="stateProvince" 
                    {...register('stateProvince', {
                      required: 'Поле не заполнено',
                    })}
                  />
                  <label htmlFor="stateProvince">State / Province</label>
                  {errors.stateProvince && 
                    <span className="error-text">{errors.stateProvince.message}
                  </span>}
                </div>
              </div>
              <div className="form__address_wrap mt-30">
                <input 
                  type="text" 
                  id="postalZipCode" 
                  name="postalZipCode" 
                  {...register('postalZipCode', {
                    required: 'Поле не заполнено',
                  })}
                />
                <label htmlFor="postalZipCode">Postal / Zip Code</label>
                {errors.postalZipCode && 
                  <span className="error-text">{errors.postalZipCode.message}
                </span>}
              </div>
            </div>
            <div>
              <h2 className='sure'>Phone Number</h2>
            </div>
            <div className="form__number ">
            <div className="form__address_wrap w-50">
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                placeholder="(000) 000-0000"
                {...register('phoneNumber', {
                  required: 'Поле не заполнено',
                  pattern: {
                    value: /^[0-9]+$/,
                    message: 'Номер телефона может содержать только цифры',
                  },
                })}
              />
              {errors.phoneNumber && (
                <span className="error-text">{errors.phoneNumber.message}</span>
              )}
            </div>
            </div>
            <div>
              <h2>E-mail</h2>
            </div>
            <div className="form__mail">
              <div className="form__address_wrap w-50">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="ex: email@yahoo.com"
                  {...register('email', {
                    // required: 'Поле не заполнено',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Введите корректный адрес электронной почты',
                    },
                  })}
                />
                {errors.email && (
                  <span className="error-text">{errors.email.message}</span>
                )}
              </div>
            </div>
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default FormHook;
