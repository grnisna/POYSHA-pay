import React from 'react';

const AddMoneyCard = ({ addMoney, setBanks }) => {
    const { img } = addMoney;
    return (

        // <button
        //     onClick={() =>setBanks(addMoney) }
        //     htmlFor="add-money-modal"
        //     style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}
        //     className='px-40 py-24 w-64 h-36 shadow-2xl'>
        //     {/* <img src={addMoney.img} alt="bank-card" className=' ' /> */}
        // </button>
        <label
            onClick={() => setBanks(addMoney)}
            htmlFor="add-money-modal"
            style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}
            className='px-40 py-24 lg:w-64 w-48 lg:h-36 h-24 shadow-2xl cursor-pointer'>
        </label>
    );
};

export default AddMoneyCard;