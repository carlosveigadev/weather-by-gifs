function openModal(data) {
  console.log(data.avgtemp_c)
  let myModal = document.createElement('div');
  myModal.setAttribute('id', 'myModal');
  myModal.classList.add('modal');
  document.body.appendChild(myModal);
  let modalContent = document.createElement('div');
  modalContent.classList.add('modal-content')
  myModal.appendChild(modalContent);
  let closeButton = document.createElement('span');
  closeButton.classList.add('close');
  closeButton.innerHTML = '&times;';
  modalContent.appendChild(closeButton);
  let paragraph = document.createElement('p');
  paragraph.innerText = data.avgtemp_c;
  modalContent.appendChild(paragraph);

}

export default openModal;