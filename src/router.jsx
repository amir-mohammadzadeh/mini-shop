
import NotFound from "./components/404-Page/NotFound";
import About from "./components/About/About";
import CartPage from "./components/CartPage/CartPage";
import HomeMain from "./components/Home/HomeMain";
import Login from "./components/Login/Login";
import Payment from "./components/PaymentPage/Payment";
import PrivateRoute from "./components/Private/PrivateRoute";
import ProductDetailes from "./components/ProductDetails/ProductDetailes";
import ProductList from "./components/Products/ProductList";

export const router = [
    {path:'/mini-shop/' , element: <HomeMain   /> },
    {path:'/products/*', element: <ProductList   /> },
    {path:'/login', element: <Login /> },
    {path:'/about', element: <About /> },
    {path:'/shopping-cart', element: <CartPage /> },
    {path:'/productDetailes/:productID', element:  <ProductDetailes /> },
    {path:'/payment', element:  <PrivateRoute > <Payment  /> </PrivateRoute>},
    {path:'*', element:  <NotFound /> },
]