document.addEventListener('DOMContentLoaded', function () {

    function generateArray() {
        const GIFcount = 128
        const array = [];
        for (let i = 2; i <= GIFcount; i++) {
            array.push(i);
        }
        return array;
    }

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    function getRandomNumber() {
        return Math.floor(Math.random() * (90000 - 30000 + 1)) + 30000;
    }

    function printImages() {
        let Images = generateArray();
        Images = shuffleArray(Images);
        let index = 0;

        function newBackground() {
            const animeDiv = document.body;
            if (!animeDiv) return; // Если div пропал, прекращаем выполнение

            if (Images[index] == 17) {
                Images[index] = 18
            } 

            animeDiv.style.backgroundImage = 'url(https://nod365.github.io/tape/GIF/' + (Images[index] < 10 ? '0' : '') + Images[index] + '.gif)';
            
            index++;
            if (index === Images.length) {
                index = 0;
                Images = shuffleArray(Images);
            }
            setTimeout(newBackground, getRandomNumber());
        }

        newBackground();
    }

    printImages();

});
