document.addEventListener('DOMContentLoaded', () => {
    const searchQueryInput = document.getElementById('searchQuery');
    const searchButton = document.getElementById('searchButton');

    function getWeatherData(cityName) {
        const apiKey = 'YOUR_API_KEY'; // API anahtarınızı buraya ekleyin
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&lang=tr&appid=${apiKey}`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(result => displayResult(result))
            .catch(error => console.error('Hava durumu verisi alınırken hata oluştu:', error));
    }

    function displayResult(result) {
        const cityElement = document.querySelector('.city');
        cityElement.innerText = `${result.name}, ${result.sys.country}`;

        const now = new Date();
        const dateElement = document.querySelector('.date');
        dateElement.innerText = dateBuilder(now);

        const hourElement = document.querySelector('.hour');
        hourElement.innerText = getHour(now);

        const tempElement = document.querySelector('.temp');
        tempElement.innerText = `${Math.round(result.main.temp)}°C`;

        const descElement = document.querySelector('.description');
        descElement.innerText = `${result.weather[0].description}`;

        const minmaxElement = document.querySelector('.temprange');
        minmaxElement.innerText = `${Math.round(result.main.temp_min)}°C / ${Math.round(result.main.temp_max)}°C`;

        const humidityElement = document.querySelector('.humidity');
        humidityElement.innerText = `Nem : ${result.main.humidity}%`;

        const windElement = document.querySelector('.wind');
        windElement.innerText = `Rüzgar : ${result.wind.speed}m/s N`;
    }

    function dateBuilder(d) {
        const months = ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"];
        const days = ["Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi", "Pazar"];

        const day = days[d.getDay()];
        const date = d.getDate();
        const month = months[d.getMonth()];
        const year = d.getFullYear();

        return `${day} ${date} ${month} ${year}`;
    }

    function getHour(h) {
        const hour = h.getHours();
        const minute = h.getMinutes();
        return `${hour}:${minute}`;
    }

    searchQueryInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            getWeatherData(searchQueryInput.value);
        }
    });

    searchButton.addEventListener('click', () => {
        getWeatherData(searchQueryInput.value);
    });

    // Sayfa yüklendiğinde 'Çorum' şehri için hava durumu verisini al
    getWeatherData('Çorum');
});
