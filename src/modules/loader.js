const loader = () => {
  let inputDiv = document.getElementsByClassName('load');
  for (let index = 0; index < inputDiv.length; index++) {
    const element = inputDiv[index];
    if (element.className.includes('hidden')) {
      element.classList.remove('hidden')
      element.className += ' inline-block'
    } else {
      element.classList.remove('inline-block')
      element.className += ' hidden'
    }
  }
}

export default loader;