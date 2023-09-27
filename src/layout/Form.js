

import React, { useState } from 'react';

function Form() {
  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    streetAddress: '',
    streetAddressLine2: '',
    city: '',
    stateProvince: '',
    postalZipCode: '',
    phoneNumber: '',
  });

  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    if (formData.firstName.trim() === '') {
      newErrors.firstName = 'This field is required';
      valid = false;
    } else {
      newErrors.firstName = '';
    }

    if (formData.lastName.trim() === '') {
      newErrors.lastName = 'This field is required';
      valid = false;
    } else {
      newErrors.lastName = '';
    }

    if (formData.streetAddress.trim() === '') {
      newErrors.streetAddress = 'This field is required';
      valid = false;
    } else {
      newErrors.streetAddress = '';
    }

    if (formData.streetAddressLine2.trim() === '') {
      newErrors.streetAddressLine2 = 'This field is required';
      valid = false;
    } else {
      newErrors.streetAddressLine2 = '';
    }

    if (formData.city.trim() === '') {
      newErrors.city = 'This field is required';
      valid = false;
    } else {
      newErrors.city = '';
    }

    if (formData.stateProvince.trim() === '') {
      newErrors.stateProvince = 'This field is required';
      valid = false;
    } else {
      newErrors.stateProvince = '';
    }

    if (formData.postalZipCode.trim() === '') {
      newErrors.postalZipCode = 'This field is required';
      valid = false;
    } else {
      newErrors.postalZipCode = '';
    }

    if (formData.phoneNumber.trim() === '') {
      newErrors.phoneNumber = 'Phone Number is required';
      valid = false;
    } else {
      newErrors.phoneNumber = '';
    }

    setErrors(newErrors);
    return valid;
  };

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

    // Очищаем ошибку при изменении значения поля
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: '',
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log('Form Data:', formData);
    } else {
      console.log('Form is not valid');
    }
  };

  return (
    <div className="form">
      <div className="form__container">
        <div className='form__logo'>
          <img src='https://media.licdn.com/dms/image/C560BAQEhDhmzV5gHww/company-logo_200_200/0/1519876265538?e=2147483647&v=beta&t=P59Vw3I9smG4nC9rY1c00SAv8kFYneYpJXhlMGPL42A' alt="Studio Logo" />
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className='form__input_wrapper'>
            <div>
              <h2 className='sure'>Full Name</h2>
            </div>
            <div className='form__name'>
              <div className={`form__name_wrap ${errors.firstName ? 'error' : ''}`}>
                <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} />
                <label htmlFor="firstName">First Name</label>
                {errors.firstName && <span className="error-text">{errors.firstName}</span>}
              </div>

              <div className={`form__name_wrap ${errors.lastName ? 'error' : ''}`}>
                <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} />
                <label htmlFor="lastName">Last Name</label>
                {errors.lastName && <span className="error-text">{errors.lastName}</span>}
              </div>
            </div>
            <div>
              <h2 className='sure'>Address</h2>
            </div>
            <div className='form__address'>
              <div className={`form__address_wrap ${errors.streetAddress ? 'error' : ''}`}>
                <input type="text" id="streetAddress" name="streetAddress" value={formData.streetAddress} onChange={handleChange} />
                <label htmlFor="streetAddress">Street Address</label>
                {errors.streetAddress && <span className="error-text">{errors.streetAddress}</span>}
              </div>
              <div className={`form__address_wrap mt-30 ${errors.streetAddressLine2 ? 'error' : ''}`}>
                <input type="text" id="streetAddressLine2" name="streetAddressLine2" value={formData.streetAddressLine2} onChange={handleChange} />
                <label htmlFor="streetAddressLine2">Street Address Line 2</label>
                {errors.streetAddressLine2 && <span className="error-text">{errors.streetAddressLine2}</span>}
              </div>
              <div className='flex form__address_row mt-30'>
                <div className={`form__address_wrap ${errors.city ? 'error' : ''}`}>
                  <input type="text" id="city" name="city" value={formData.city} onChange={handleChange} />
                  <label htmlFor="city">City</label>
                  {errors.city && <span className="error-text">{errors.city}</span>}
                </div>
                <div className={`form__address_wrap ${errors.stateProvince ? 'error' : ''}`}>
                  <input type="text" id="stateProvince" name="stateProvince" value={formData.stateProvince} onChange={handleChange} />
                  <label htmlFor="stateProvince">State / Province</label>
                  {errors.stateProvince && <span className="error-text">{errors.stateProvince}</span>}
                </div>
              </div>
              <div className={`form__address_wrap mt-30 ${errors.postalZipCode ? 'error' : ''}`}>
                <input type="text" id="postalZipCode" name="postalZipCode" value={formData.postalZipCode} onChange={handleChange} />
                <label htmlFor="postalZipCode">Postal / Zip Code</label>
                {errors.postalZipCode && <span className="error-text">{errors.postalZipCode}</span>}
              </div>
            </div>
            <div>
              <h2 className='sure'>Phone Number</h2>
            </div>
            <div className='form__number '>
              <div className={`form__address_wrap w-50 ${errors.phoneNumber ? 'error' : ''}`}>
                <input type="text" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} placeholder='(000) 000-0000' />
                {errors.phoneNumber && <span className="error-text">{errors.phoneNumber}</span>}
              </div>
            </div>
            <div>
              <h2>E-mail</h2>
            </div>
            <div className='form__mail'>
              <div className={`form__address_wrap w-50 ${errors.email ? 'error' : ''}`}>
                <input type="text" id="email" name="email" value={formData.email} onChange={handleChange} placeholder='ex: email@yahoo.com' />
                <label htmlFor="email">example@example.com</label>
                {errors.email && <span className="error-text">{errors.email}</span>}
              </div>
            </div>
          </div>
          
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Form;
