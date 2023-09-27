import React, { useState } from 'react';

function Form() {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };

  return (
    <div className="form">
      <div className="form__container">
        <img src='https://media.licdn.com/dms/image/C560BAQEhDhmzV5gHww/company-logo_200_200/0/1519876265538?e=2147483647&v=beta&t=P59Vw3I9smG4nC9rY1c00SAv8kFYneYpJXhlMGPL42A' alt="Studio Logo" />
        
        <form onSubmit={handleSubmit}>
          <div className='form__input_wrapper'>
            <div>
              <h2 className='sure'>Full Name</h2>
            </div>
            <div className='form__name'>
              <div className="form__name_wrap">
                <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} />
                <label htmlFor="firstName">First Name</label>
              </div>
              <div className="form__name_wrap">
                <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} />
                <label htmlFor="lastName">Last Name</label>
              </div>
            </div>
            <div>
              <h2 className='sure'>Address</h2>
            </div>
            <div className='form__address'>
              <div className="form__address_wrap">
                <input type="text" id="streetAddress" name="streetAddress" value={formData.streetAddress} onChange={handleChange} />
                <label htmlFor="streetAddress">Street Address</label>
              </div>
              <div className="form__address_wrap mt-30">
                <input type="text" id="streetAddressLine2" name="streetAddressLine2" value={formData.streetAddressLine2} onChange={handleChange} />
                <label htmlFor="streetAddressLine2">Street Address Line 2</label>
              </div>
              <div className='flex form__address_row mt-30'>
                <div className="form__address_wrap">
                  <input type="text" id="city" name="city" value={formData.city} onChange={handleChange} />
                  <label htmlFor="city">City</label>
                </div>
                <div className="form__address_wrap">
                  <input type="text" id="stateProvince" name="stateProvince" value={formData.stateProvince} onChange={handleChange} />
                  <label htmlFor="stateProvince">State / Province</label>
                </div>
              </div>
              <div className="form__address_wrap mt-30">
                <input type="text" id="postalZipCode" name="postalZipCode" value={formData.postalZipCode} onChange={handleChange} />
                <label htmlFor="postalZipCode">Postal / Zip Code</label>
              </div>
            </div>
            <div>
              <h2 className='sure'>Phone Number</h2>
            </div>
            <div className='form__number '>
              <div className="form__address_wrap w-50">
                <input type="text" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} placeholder='(000) 000-0000' />
              </div>
            </div>
            <div>
              <h2>E-mail</h2>
            </div>
            <div className='form__mail'>
              <div className="form__address_wrap w-50">
                <input type="text" id="email" name="email" value={formData.email} onChange={handleChange} placeholder='ex: email@yahoo.com' />
                <label htmlFor="email">example@example.com</label>
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
