// export const getSavedCityIds = () => {
//     const savedCityIds = localStorage.getItem('saved_cities')
//       ? JSON.parse(localStorage.getItem('saved_cities'))
//       : [];
  
//     return savedCityIds;
//   };
  
//   export const saveCityIds = (cityIdArr) => {
//     if (cityIdArr.length) {
//       localStorage.setItem('saved_cities', JSON.stringify(cityIdArr));
//     } else {
//       localStorage.removeItem('saved_cities');
//     }
//   };
  
//   export const removeCityId = (cityId) => {
//     const savedCityIds = localStorage.getItem('saved_cities')
//       ? JSON.parse(localStorage.getItem('saved_cities'))
//       : null;
  
//     if (!savedCityIds) {
//       return false;
//     }
  
//     const updatedSavedCityIds = savedCityIds?.filter((savedCityId) => savedCityId !== cityId);
//     localStorage.setItem('saved_cities', JSON.stringify(updatedSavedCityIds));
  
//     return true;
//   };