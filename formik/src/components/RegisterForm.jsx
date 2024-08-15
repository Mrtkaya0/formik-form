
import React from 'react';
import { useFormik } from 'formik';
import { RegisterFormChemas } from '../schemas/RegisterFormChemas';

const RegisterForm = () => {
  const submit = (values,action) => {
    setTimeout(()=> {
      action.resetForm();
    },2000)

  }

    const {values, errors, handleChange, handleSubmit} = useFormik({
        initialValues: {
          email: '',
          age: '',
          password:'',
          confirmPassword:'',
          term:''
        },
        validationSchema:RegisterFormChemas,
        onSubmit : submit

      });
  return (
    <div>
        <form onSubmit={handleSubmit}>
           <div>
           <label>Email</label>
            <input type="text" id='email' placeholder='Email Giriniz'
            value={values.email}
            onChange={handleChange}
            />
            {errors.email && <p className='input-error'>{errors.email}</p>}
            </div>
            <div>
             <label>Yaş</label>
            <input type="number" id='age' placeholder='Yaşınızı Giriniz'
            value={values.age}
            onChange={handleChange}
            />
            {errors.age && <p className='input-error'>{errors.age}</p>}
           </div>
           <div>
             <label>Şifre</label>
            <input type="password" id='password' placeholder='Şifrenizi Giriniz'
            value={values.password}
            onChange={handleChange}
            />
            {errors.password && <p className='input-error'>{errors.password}</p>}
           </div>
           <div>
             <label>Şifre Tekrarı</label>
            <input type="password" id='confirmPassword' placeholder='Şifrenizi Tekrar Giriniz'
            value={values.confirmPassword}
            onChange={handleChange}
            />
            {errors.confirmPassword && <p className='input-error'>{errors.confirmPassword}</p>}
           </div>
           <div>
            <div style={{display:'flex', flexDirection:'row', alignItems:'flex-start', justifyContent:'flex-start'
            }}>
            <input style={{width:'50px', height:'12px', alignItems:'center', }} type="checkbox" id='term'
            value={values.term}
            onChange={handleChange}
            />
             <label>Kullanıcı Sözleşmesini Giriniz</label>
            </div>
            {errors.term && <p className='input-error'>{errors.term}</p>}

           </div>
           <button type='submit'>Kaydet</button>
        </form>
    </div>
  )
}

export default RegisterForm