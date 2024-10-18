document.addEventListener('DOMContentLoaded', function() {
    const url="http://www.geoplugin.net/json.gp"
    fetch(url)
      .then(response => response.json())
      .then(data1 => {
      console.log(data1)
      console.log(data1.geoplugin_countryCode) //country code

      fetch(`https://date.nager.at/api/v3/publicholidays/2024/${data1.geoplugin_countryCode}`)

      .then(response => response.json())
            .then(data2 => {
                console.log(data2)

                const repeat = new Set();  // Set to store repeating dates

                data2.forEach(element => {
                    if (!repeat.has(element.date)) {  // If date hasn't been seen before
                        repeat.add(element.date);     // Add date to the Set
                
                        console.log(element.date);
                        console.log(element.name);

                        document.querySelector('ul').innerHTML +=`<li>${element.name} ${element.date}</li>`
                    }
                });
            })
    });
});
