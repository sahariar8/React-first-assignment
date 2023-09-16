import PropTypes from 'prop-types'


const Cart = ({carts,totalCredit,remainingCredit,totalAmount}) => {

    return (
        <div className="md:ml-5 ">
            <div className="card bg-base-100 shadow-xl">
                <div className="px-5 pt-5">
                    <h2 className="text-base font-bold text-info">Credit Hour Remaining {remainingCredit} hr</h2>
                    <hr className="mt-2 border-2" />
                </div>
                <div className="pl-5">
                    <p className="pt-2 text-lg font-bold mb-2">Course Name</p>
                    {
                carts.map(cart => (
                    <li key="id" className='list-decimal mb-2 text-sm text-slate-400 font-semibold'>{cart.title}</li>
                ))
                    }
                </div>
                <div className="px-5">
                    <hr/>
                    <p className="py-3 font-semibold text-slate-600" >Total Credit Hour : {totalCredit}</p>
                    <hr />
                    <p className="pt-2 font-semibold text-slate-600 mb-2">Total Price : {totalAmount} USD</p>
                </div>
                </div>
            
        </div>
    );
};

Cart.propTypes = {
    carts: PropTypes.array.isRequired,
    totalCredit: PropTypes.number,
    remainingCredit: PropTypes.number,
    totalAmount: PropTypes.number
    
}
export default Cart;