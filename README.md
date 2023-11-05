# [STAYSAVVY](https://staysavvy.vercel.app/)

> Introduction

This app is designed to allow users to search for accommodations, calculate the distance between their starting point and destination, and provide an estimate of expenses including transportation costs. This enables users to book accommodations within their budget.

> Key features

- Searching for accommodation by keywords
- displaying search results along with their locations using Mapbox
- calculating fuel costs and cute moon dark mode toggle on nav bar.

> Project Mockups

![main-page](./img/staysavvy.png)
![home-page](./img/mockup-home.png)
![other-page](./img/mockup-pages.png)

> Production Tools

- VS Code : It provides an intuitive interface, efficient code editing capabilities
- HTML : Create the necessary structure for embedding Js libraries
- CSS : Style HTML elements, customize the appearance of the map markers, map controls and flatpicker
- SASS : Allowing variables, nesting, mixins which which enhance the maintainability and organization of CSS
- Javascript : Create functionality and interaction between elements. Handle data manipulation or visualization.
- Javascript libraries

1. Swiper : It implemented as whole page silder in HTML. Slide moves only certain events occurs, which makes a website interactive.
2. Mapbox : In this project two mapbox were used. One served the purpose of showcasing filtered results, while the other was utilized for measuring distances and calculating transportation costs.
3. Flatpicker(datepicker) : I chose to use this library because it offers one of the most customizable datepickers available. By making the input element a div instead of a traditional input field, I was able to style it more efficiently and create visually appealing web applications

> Code Snippets

Calculate the route fuel cost using Mapbox custom dirictions API

```javascript
mapbox.on("click", function (e) {
  // Get the clicked destination coordinates
  const startingPoint = e.lngLat;

  // Set the destination point coordinates
  customDirections.setOrigin(startingPoint);
  customDirections.setDestination(
    LocationOfPlace[accommodationIndex].coordinates
  );

  // Event listener for the 'route' event fired when the route is calculated
  customDirections.on("route", function (event) {
    let meters = event.route[0].distance;
    let kilometers = (meters / 1000).toFixed(2);
    let fuelCostPerKm = 0.21;
    let cost = Math.floor(kilometers * fuelCostPerKm);

    // Display the distance and cost
    routeCost.classList.add("active");
    routeCost.innerHTML = `
            <p>Distance: ${kilometers} km</p>
            <p>Cost(one-way): $${cost}</p>
            <button id="calculate-budget">Calculate Total Budget</button>
        `;
    onewayTransportCost = cost;
    const calculateBudget = document.getElementById("calculate-budget");
    calculateBudget.addEventListener("click", function () {
      EstimateBudget();
    });
  });
});
```

> Key Takeaways

- Experience in Utilizing multiple JS libraries has made me confident in customizing the libraries to be more dynamic.
- I have learned valuable tips for enhancing user experience, such as using box shadows to make product boxes stand out
- My skill set extends to Handling complex JavaScript functions capable of addressing a wide range of use cases.
