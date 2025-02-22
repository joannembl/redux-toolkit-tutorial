import { CartIcon } from '../icons';
import { useSelector } from 'react-redux';

const NavBar = () => {
    //console.log(useSelector((store) => {console.log(store)}));
    //const amount = useSelector((store) => store.cart.amount); //same as below 
    const {amount} = useSelector((store) => store.cart);

    return(
        <nav>
            <div className='nav-center'>
                <h3>redux toolkit</h3>
                <div className='nav-container'>
                    <CartIcon />
                    <div className='amount-container'>
                        <p className='total-amount'>{amount}</p>
                    </div>
                </div>
            </div>
        </nav>
    )
};

export default NavBar;