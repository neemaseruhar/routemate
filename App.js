import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './components/Home';
import { Contacts } from './components/Contacts';
import { ProductList } from './components/ProductList';
import { ProductDetails } from './components/ProductDetails';
import './App.css';
import {Routes,Route} from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import {PageNotFound} from './components/PageNotFound';

function App() {
  return (
 <div>
    <Header />
    <main>
      
      <Routes>
        <Route path='/' element={<Home />}> Home</Route>
        <Route path='Contacts' element={<Contacts />}>Contacts</Route>
        <Route path='/ProductDetails' element={<ProductDetails />}>ProductDetails</Route>
        <Route path='ProductList/:id' element={<ProductList />}>ProductList</Route>
        <Route path='/admin' element={<Navigate to='/Contacts' /> } />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </main>
    <Footer />
 </div>
  );
}

export default App;
