const addButton = (icon, onClick) => {
  const buttonContainers = document.getElementsByClassName('right-buttons');
  Array.from(buttonContainers).forEach((buttonContainer) => {
    const button = document.createElement('button');
    button.innerHTML = `
    <svg class="icon icon-${icon}">
      <use xlink:href="#icon-${icon}"></use>
    </svg>
    `;
    button.addEventListener('click', onClick);
    buttonContainer.appendChild(button);
  });
};

export default (buttons) => {
  buttons.forEach((button) => {
    addButton(button.icon, button.onClick);
  });
};