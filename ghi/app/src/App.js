import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import SalesPersonForm from './salesPersonForm';
import SalesPeopleList from './salesPeopleList';
import CustomerForm from './customerForm';
import CustomerList from './customerList';
import SaleList from './salesList';
import SaleHistory from './salesHistory';
import VehicleModelForm from './vehicleModelForm';
import ModelList from './ModelList';
import CarList from './CarList';
import CarForm from './CarForm';
import NewSale from './newSale';





function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="salespeople">
            <Route path='' element={<SalesPeopleList />} />
            <Route path="new" element={<SalesPersonForm />} />
          </Route>
          <Route path="customers">
            <Route path='' element={<CustomerList />} />
            <Route path="new" element={<CustomerForm />} />
          </Route>
          <Route path="sales">
            <Route path='' element={<SaleList />} />
            <Route path="new" element={<NewSale />} />
            <Route path="history" element={<SaleHistory />} />
          </Route>
          <Route path="models">
            <Route path='' element={<ModelList />} />
            <Route path="new" element={<VehicleModelForm />} />
          </Route>
          <Route path="automobiles">
            <Route path='' element={<CarList />} />
            <Route path="new" element={<CarForm />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
