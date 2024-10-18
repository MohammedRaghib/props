import './App.css';
import Cars from './Cars';
import toyota from './Images/toyota.jpg';
import lambo from './Images/lambo.jpg';
import subaru from './Images/subaru.png';
import toyota_s from './Images/toyota_s.jpg';

function App() {
  const cars = [
    {
      name: 'Camry',
      make: 'Toyota',
      color: 'Gray',
      year: 2022,
      img: toyota
    },
    {
      name: 'Temarario',
      make: 'Lamborghini',
      color: 'Dark blue',
      year: 2020,
      img: lambo
    },
    {
      name: 'Outback',
      make: 'Subaru',
      color: 'Gray',
      year: 2019,
      img: subaru
    },
    {
      name: 'Sienta',
      make: 'Toyota',
      color: 'Purple',
      year: 2021,
      img: toyota_s
    }
  ]
  return (
    <div class="App">
      {cars.map((car, index) => (
        <Cars key={index} Car_data={car}/>
      ))}
    </div>
  );
}

export default App;
