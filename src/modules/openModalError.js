const openModalError = () => {
  const myModal = document.createElement('div');
  myModal.setAttribute('id', 'myModal');
  myModal.className += 'modal';
  document.body.appendChild(myModal);
  const modalContent = document.createElement('div');
  modalContent.className += 'modal-content';
  myModal.appendChild(modalContent);
  const paragraph = document.createElement('p');
  paragraph.innerHTML = 'I am sorry, we had a problem trying to fetch the data from the API, refresh the page and try again later =D.';
  paragraph.className += 'text-2xl font-bold text-red-500 m-5';
  modalContent.appendChild(paragraph);
};

export default openModalError;