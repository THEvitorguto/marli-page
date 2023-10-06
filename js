    const images = ['cardapio.jpeg', 'lanche 1.jpg', 'lanche 2.jpg',
     'pasteis 1.jpg', 'pasteis 2.jpg', 'marmita.jpg', 'panqueca.jpg',
     'pc.jpg', 'refri.jpg' ,]; 
    let currentIndex = 0;

    const imageElement = document.getElementById('image');
    const prevButton = document.getElementById('btne');
    const nextButton = document.getElementById('btnd');

    prevButton.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      imageElement.src = images[currentIndex];
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % images.length;
        imageElement.src = images[currentIndex];
      });
