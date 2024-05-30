import React, { useContext } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import AboutUs from './pages/AboutUs'
import Products from './pages/Products'
import BlogPage from './pages/BlogPage'
import OurTeam from './pages/OurTeam'
import ContactUs from './pages/ContactUs'
import FAQ from './pages/FAQ'
import Login from './pages/Login'
import NotFoundPage from './pages/NotFoundPage'
import DetailsPage from './pages/DetailsPage'
import { CartProvider } from 'react-use-cart'
import Cart from './pages/Cart'
import { WishlistProvider } from 'react-use-wishlist'
import Wishlist from './pages/Wishlist'
import { ModeContext, ModeProvider } from './context/ModeContext'
import { LanguageProvider } from './context/LanguageContext'
import Checkout from './pages/Checkout'
import Complete from './pages/Complete'
import AddBlog from './pages/admin/update/AddBlog'
import Dashboard from './pages/admin/Dashboard'
import EditBlog from './pages/admin/update/EditBlog'
import BlogPageDetails from './pages/BlogPageDetails'
import Register from './pages/Register'
import Error from './pages/Error'


const Main = () => {
    const [mode] = useContext(ModeContext);
    return (
        <div className={mode}>
            <WishlistProvider>
                <CartProvider>
                    <Header />
                    <Routes>
                        <Route path='/' element={<Home />}></Route>
                        <Route path='aboutus' element={<AboutUs />}></Route>
                        <Route path='products' element={<Products />}></Route>
                        <Route path='blogpage' element={<BlogPage />}></Route>
                        <Route path='ourteam' element={<OurTeam />}></Route>
                        <Route path='contactus' element={<ContactUs />}></Route>
                        <Route path='faq' element={<FAQ />}></Route>
                        <Route path='cart' element={<Cart />}></Route>
                        <Route path='wishlist' element={<Wishlist />}></Route>
                        <Route path='login' element={<Login />}></Route>
                        <Route path='*' element={<NotFoundPage />}></Route>
                        <Route path='products/:url' element={<DetailsPage />}></Route>
                        <Route path='checkout' element={<Checkout />}></Route>
                        <Route path='complete' element={<Complete />}></Route>
                        <Route path='/dashboard/addblog' element={<AddBlog />}></Route>
                        <Route path='/dashboard/edit/:id' element={<EditBlog />}></Route>
                        <Route path='/dashboard' element={<Dashboard />}></Route>
                        <Route path='blogpage/:url' element={<BlogPageDetails />}></Route>
                        <Route path='register' element={<Register />}></Route>
                        <Route path='error' element={<Error />}></Route>
                    </Routes>
                    <Footer />
                </CartProvider>
            </WishlistProvider>
        </div>
    )
}

const App = () => {
    return (
        <BrowserRouter>
            <LanguageProvider>
                <ModeProvider>
                    <Main />
                </ModeProvider>
            </LanguageProvider>
        </BrowserRouter>
    )
}

export default App;