import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import PhoneInput from 'react-phone-number-input';
import BgSendMoney from '../../../Assets/Send Money/background2.jpg';
import DBUserData from '../../Hooks/UserData/DBUserData';
import swal from 'sweetalert';
import toast from 'react-hot-toast';
import axios from 'axios';
import Loading from '../../SharedCompo/Loading';


const SendMoney = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [value, setValue] = useState();
  const [userData] = DBUserData([]);

  const onSubmit = data => {
    const userId = userData?._id;
    const sendTo = userData?.phoneNumber;
    const sendAmount = data.sendAmount;


    const newData = { ...data, sendTo: sendTo }
    // add by ashraf
    const url = `http://localhost:4000/sendMoney/${userId}`;
    axios.put(url, newData)
      .then(response => {
        console.log(response);
        swal(`Done `, `Total ${sendAmount} Successfully send`, "success");
        reset();
        setValue('');
        <Loading />
      })
      .catch(error => {
        toast.error(`${error?.response?.data?.error}`)
      });

  };

  return (

    <div className='grid items-center justify-items-center justify-center lg:py-20 py-6'>
      <div className='grid items-center justify-center  justify-items-center rounded-md bg-white lg:px-20 py-5'>
        <h2 className='text-center text-secondary font-bold pt-6 text-4xl'>Send Money</h2>
        <form className=' my-[10px]'
          onSubmit={handleSubmit(onSubmit)}>
          <div className="grid lg:grid-cols-2 gri-cols-1 gap-10">
            <div className="grid grid-row-2">
              <div class="form-control">
                <label class="label">
                  <span class="label-text">From</span>
                </label>
                <PhoneInput
                  className='input border-primary'
                  placeholder="Enter phone number"
                  value={userData?.phoneNumber}
                  readOnly
                />
              </div>
            </div>

            <div className="grid grid-row-2">
              <div class="form-control">
                <label class="label">
                  <span class="label-text ">Send To</span>
                </label>
                <PhoneInput
                  className='input border-primary'
                  placeholder="Enter phone number"
                  international
                  defaultCountry="BD"
                  value={value}
                  onChange={setValue}
                  {...register("sendFrom", {
                    required: {
                      value: true,
                      message: 'Phone Number is required'
                    }
                  })}
                />
              </div>
            </div>

            <div className="grid">
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Amount</span>
                </label>
                <input
                  placeholder="Sending amount $"
                  class="input border-primary"
                  {...register("sendAmount", {
                    required: {
                      value: true,
                      message: 'Please Type Your Amount'
                    },
                    pattern: {
                      value: /^[0-9]+$/,
                      message: 'Provide Valid Amount'
                    }
                  })}
                />
                <label class="label">
                  {errors.sendAmount?.type === 'required' && <span class="label-text-alt text-red-500">{errors.sendAmount.message}</span>}
                  {errors.sendAmount?.type === 'pattern' && <span class="label-text-alt text-red-500">{errors.sendAmount.message}</span>}
                </label>
              </div>
            </div>

            <div class="form-control">
              <label class="label">
                <span class="label-text ">Reference</span>
              </label>
              <input
                type="text"
                placeholder="Write Something"
                className="input border-primary"
                {...register("Reference", {
                  required: {
                    value: true,
                    message: 'Reference is required'
                  },
                  pattern: {
                    value: /^[0-9]+$/,
                    message: 'Only Number is allowed'
                  }
                })}
              />
              <label class="label">
                {errors.Reference?.type === 'required' && <span class="label-text-alt text-red-500">{errors.Reference.message}</span>}
                {errors.Reference?.type === 'pattern' && <span class="label-text-alt text-red-500">{errors.Reference.message}</span>}

              </label>
            </div>
          </div>
          <div className="lg:pt-10">
            <input className='input text-bold  w-full cursor-pointer text-white bg-secondary hover:bg-primary' type="submit" value="Submit" />
          </div>

        </form>
      </div>
    </div>
  );
};

export default SendMoney;