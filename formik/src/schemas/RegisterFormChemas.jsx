import * as yup from 'yup';

export const RegisterFormChemas = yup.object().shape({
  email: yup.string().email('Geçerli email adresi giriniz').required('Email adresi zorunlu'),

  age: yup.number().positive('Lütfen doğru bir değer giriniz').integer('Tam sayı giriniz').required('Yaş girmek zorunludur'),

  password: yup.string().required('Şifre alanı zorunludur').min(8, 'Şifre en az 8 karakter olmalıdır'),

  confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Şifreler eşleşmiyor').required('Şifre tekrarı zorunludur'),
  
  term: yup.boolean().oneOf([true], 'Sözleşme onayı zorunludur')
});
