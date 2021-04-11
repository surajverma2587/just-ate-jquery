const restaurants = [
  {
    id: "111",
    name: "Halo",
    address: "109 London Road, Stockport, SK7 4HH",
    phoneNumber: "0123 456 789",
    logoUrl:
      "https://d30v2pzvrfyzpo.cloudfront.net/uk/images/restaurants/50736.gif",
    cuisine: "Burgers",
    distance: 2.5,
    stars: 4.3,
    reviews: 350,
    discount: 10,
  },
  {
    id: "222",
    name: "Sagar Tandoori",
    address: "381 Buxton Road, Stockport, SK2 7EY",
    phoneNumber: "0123 456 111",
    logoUrl:
      "https://d30v2pzvrfyzpo.cloudfront.net/uk/images/restaurants/10230.gif",
    cuisine: "Indian",
    distance: 1.5,
    stars: 4.2,
    reviews: 1341,
  },
  {
    id: "333",
    name: "Chopstick House",
    address: "35 Wellington Road South, Stockport, SK1 3RP",
    phoneNumber: "0123 222 111",
    logoUrl:
      "https://d30v2pzvrfyzpo.cloudfront.net/uk/images/restaurants/10595.gif",
    cuisine: "Chinese",
    distance: 1.3,
    stars: 4.9,
    reviews: 2589,
  },
  {
    id: "444",
    name: "The Scotch Egg",
    address: "92 Wellington Road South, Stockport, SK1 3UH",
    phoneNumber: "0123 666 555",
    logoUrl:
      "https://d30v2pzvrfyzpo.cloudfront.net/uk/images/restaurants/120758.gif",
    cuisine: "Breakfast",
    distance: 4.5,
    stars: 3.2,
    reviews: 525,
  },
  {
    id: "555",
    name: "Ate Days A Week",
    address: "8 Vernon Street, Stockport, SK1 1TY",
    phoneNumber: "0123 222 333",
    logoUrl:
      "https://d30v2pzvrfyzpo.cloudfront.net/uk/images/restaurants/126030.gif",
    cuisine: "Fish & Chips",
    distance: 1.8,
    stars: 4.7,
    reviews: 5875,
  },
];

const getFilteredRestaurants = (searchTerm) => {
  const callback = (restaurant) => {
    const restaurantName = restaurant.name.toLowerCase();
    const searchTermLowerCase = searchTerm.toLowerCase();

    return restaurantName.startsWith(searchTermLowerCase);
  };
  return restaurants.filter(callback);
};

const onSearch = () => {
  const restaurantName = $("#search").val();
  const filteredRestaurants = getFilteredRestaurants(restaurantName);

  renderRestaurantCards(filteredRestaurants);
};

const renderRestaurantCards = (restaurants) => {
  const container = $("#restaurants-container");

  container.empty();

  const renderCard = (eachRestaurant) => {
    const card = `<div class="card text-center m-2" style="width: 18rem">
    <div class="card-header">
      <img
        src="${eachRestaurant.logoUrl}"
        class="img-thumbnail img-logo"
        alt="${eachRestaurant.name}"
      />
    </div>
    <div class="card-body">
      <h5 class="card-title">${eachRestaurant.name}</h5>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">
        ${eachRestaurant.address}
        </li>
        <li class="list-group-item">${eachRestaurant.phoneNumber}</li>
        <li class="list-group-item">${eachRestaurant.distance} miles</li>
        <li class="list-group-item fs-6 text-muted">
        ${eachRestaurant.stars} stars (${eachRestaurant.name} reviews)
        </li>
      </ul>
    </div>
  </div>`;
    container.append(card);
  };

  restaurants.forEach(renderCard);
};

const onLoad = () => {
  renderRestaurantCards(restaurants);
};

$("#search").on("input", onSearch);
$(document).ready(onLoad);
