// import { FormData } from '../components/ContactForm';

export function sendEmail(data: FormData) {
    // console.log(data);
    const apiEndpoint = '/api/email';
  
    fetch(apiEndpoint, {
      method: 'POST',
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((response) => {
        // console.log(response.message);
        // alert(response.message);
      })
      .catch((err) => {
        // console.log(err, data);
        // alert(err);
      });
  }