import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';
import Loading from '../SharedCompo/Loading';
import axios from 'axios';
import swal from 'sweetalert';
import SweetSuccessTost from '../SharedCompo/SweetTost/SweetSuccessTost';
import DBUserData from '../Hooks/UserData/DBUserData';

const AddMoneyModal = ({ banks, setBanks }) => {
    const { _id, bankName } = banks;
    const [user, loading] = useAuthState(auth);
    const [userData, setUserData] = DBUserData([]);
    const userId = userData._id;

    const handelAddMoney = event => {
        event.preventDefault();
        //const accountNumber = event.target.account.value;
        //console.log(accountNumber);

        if (loading) {
            return <Loading />
        }

        const addMoney = {
            banksId: _id,
            banks: bankName,
            accountName: user.email,
            accountNumber: event.target.account.value,
            transferredAmount: event.target.amount.value,
            reference: event.target.reference.value,
            transactionType: 'addMoney'
        }



        fetch(`https://afternoon-wave-69445.herokuapp.com/addMoney/${userId}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addMoney)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setBanks(null)
                swal({
                    icon: "success",
                    text: "Deposit Successful"
                });
            })
        fetch('https://afternoon-wave-69445.herokuapp.com/transaction_history', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addMoney)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setBanks(null)
            })

    }

    return (
        <div>
            <input type="checkbox" id="add-money-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="add-money-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-2xl text-center">Add Money from : <span className='text-orange-600'>{bankName} </span> </h3>

                    <form onSubmit={handelAddMoney}
                        className='grid grid-cols-1 gap-5 justify-items-center mt-5'>

                        <input type="text" name='name' disabled value={user?.displayName || ''} className='input input-bordered w-full max-w-xs font-bold' />

                        <input type="Number" name='account' placeholder='Enter Account Number' className='input input-bordered w-full max-w-xs' />

                        <input type="Number" name='amount' placeholder='Enter your Amount' className='input input-bordered w-full max-w-xs' />

                        <input type="text" name='reference' placeholder='Enter Reference' className='input input-bordered w-full max-w-xs' />

                        <input type="submit" value="Add Money" className="btn btn-secondary w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddMoneyModal;