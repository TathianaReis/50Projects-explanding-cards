const imgList = document.querySelectorAll('.panel');

console.log(imgList);

imgList.forEach((img) => {
  img.addEventListener('click', function (e) {
    removeActive();
    img.classList.add('active');
  });
});

const removeActive = () => {
  imgList.forEach((img) => {
    img.classList.remove('active');
  });
};
