
import Cart from "./components/Cart"
import Courses from "./components/Courses"
import {  useState } from "react";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

const [carts,setCarts] = useState([]);
const [remainingCredit,setRemainingCredit] = useState([20]);
const [totalCredit,setTotalCredit] = useState([0]);
const [totalAmount,setAmount] = useState([]);

const handleAddToCart = course =>{
  const isExist = carts.find(item => item.id == course.id)

    let count = course.credit;
    let amount = course.price;
    if(isExist){
      return toast("Already Booked"); 
    }else{
      carts.forEach(item =>{
        count += item.credit,
        amount += item.price

    });
      const totalRemaining = 20-count;
      const newCart = [...carts,course];
      
      if(count > 20){
       return toast("You can't take more than 20 credit");
      }else{
        setTotalCredit(count);
        setRemainingCredit(totalRemaining);
        setCarts(newCart);
        setAmount(amount);
      }    
    }  
};
  return (
    <div className="bg-slate-100">
        <div className='max-w-screen-xl mx-auto'>
      <div>
          <h1 className="text-3xl text-center font-bold py-5">Course Registration</h1>  
      </div>
      <div className='flex flex-col md:flex-row pb-10'>
          <div className='w-full md:w-9/12 '>
          <Courses handleAddToCart={handleAddToCart}></Courses>
              
          </div>
          <div className='w-full md:w-3/12'>
              <Cart 
              carts={carts} 
              totalCredit={totalCredit} 
              remainingCredit={remainingCredit} 
              totalAmount={totalAmount}>
              </Cart>
          </div>
      </div> 
    </div>
    <ToastContainer></ToastContainer>
    </div>
  )
}

export default App
