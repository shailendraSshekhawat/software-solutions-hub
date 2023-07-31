const form = document.querySelector('#form');
const modal = document.querySelector('#modal');
const modalCloseBtn = document.querySelector('#modal-close-btn');
const modalOpenBtn = document.querySelector('#modal-open-btn');

modalOpenBtn.addEventListener('click', (e) => {
  modal.classList.add('show-modal');
});

modalCloseBtn.addEventListener('click', (e) => {
  console.log('close');
  modal.classList.remove('show-modal');
});

const handleForm = async (e) => {
  e.preventDefault();

  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;
  const phone = document.querySelector('#phone').value;

  const data = {
    name,
    email,
    phone,
  };
  try {
    const res = await fetch('http://localhost:8000/api/form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const json = await res.json();
    console.log(json);
  } catch (error) {
    console.log(error);
  } finally {
    modalCloseBtn.click();
  }
};

form.addEventListener('submit', handleForm);
export default handleForm;
