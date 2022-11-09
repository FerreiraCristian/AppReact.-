import styled from 'styled-components';
import CartWidget from './CartWidget';

export const Navbar = () => {
    return(
        <>
         <NavContainer>
            <h2>Tienda <span>Logo</span></h2>
            <div>
                <a href='/'>Home</a>
                <a href='/'>Shop</a>
                <a href='/'>Contacto</a>
                <CartWidget/>
            </div>
         </NavContainer> 
        </>
    );
};

export default Navbar;

const NavContainer = styled.nav `
    h2{
        color: #a14bbb;
        font-weight: 400;
        span{
            font-weight: bold;
        }
    }
    padding: .4rem;
    background-color: #333;
    display: flex;
    align-items: center;
    justify-content: space-between;
    a {
        color: #bf65c7;
        text-decoration: none;
        margin-right: 1rem;
    }
`
