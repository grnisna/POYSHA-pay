import React, { useRef, useState } from 'react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';
import DBUserData from '../../Hooks/UserData/DBUserData';
import './SettingDemo.css';

const SettingDemo = () => {
  const { register, formState: { errors }, handleSubmit, reset } = useForm();
  const imageStorageKey = '5fbcdb5a428c028af61f3741571ad322';
  const inputRef = useRef(null);
  const [imagesUrl, setImagesUrl] = useState([]);
  const latestImgUrl = imagesUrl[imagesUrl.length - 1];

  const [userData] = DBUserData();
  const userEmail = (userData.email);







  const handleClick = () => {
    // 👇️ open file input box on click of other element
    inputRef.current.click();
  };

  const handleFileChange = event => {
    const imageFile = event.target.files && event.target.files[0];
    if (!imageFile) {
      return;
    }

    //  reset file input
    event.target.value = null;
    // console.log('Image', imageFile);
    //  is now empty
    // console.log(event.target.files);

    // can still access file object here
    // console.log(imageFile);
    // console.log(imageFile.name);

    const formData = new FormData();
    formData.append('image', imageFile);
    const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
    fetch(url, {
      method: 'POST',
      body: formData
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          const img = data.data.url;
          const userimage = {
            name: data.name,
            img: img
          }


          fetch('https://powerful-basin-90376.herokuapp.com/userimage', {
            method: 'POST',
            headers: {
              'content-type': 'application/json',

            },
            body: JSON.stringify(userimage)
          })
            .then(res => res.json())
            .then(uploaded => {
              if (uploaded.uploadedId) {

                reset();
              }
            })
        }
      })
  };

  // get IMAGES URL FROM MONGODB 
  useEffect(() => {
    fetch('https://powerful-basin-90376.herokuapp.com/userimage')
      .then(res => res.json())
      .then(data => {
        // swal(`successfully Uploaded New Photo`);
        setImagesUrl(data);
      })
  }, []);

  const onSubmit = async data => {

    const updatedName = { name: data.name }
    fetch(`http://localhost:5000/user/${userEmail}`, {
      method: 'PUT',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(updatedName)
    })
      .then(res => res.json())
      .then(data => {
        swal({
          icon: "success",
          text: "Updated successfully"
        });
        reset();
      })
  }





  return (
    <div className='flex justify-center items-center gap-5'>

      <div className='left-side card shadow-xl'>
        <div className='m-10'>
          <h1 className='font-bold text-4xl  '>Account Setting</h1>
        </div>
        <div className='m-10'>
          <h2 className='font-bold text-xl '>Profile Detils</h2>
          <div class="flex   gap-5 mt-10">


            <div className=' w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2' >

              < img className='w-20 h-16 rounded-full' src={latestImgUrl?.img} alt="" />

            </div>



            <div>
              <div className='flex justify center items-center gap-3'>
                <button onClick={handleClick} className='btn text-primary'>Upload Profile Photo</button>
                <button className='btn text-primary'>Remove</button>
              </div>
              <p className='paragraph'>amar soner bangla ami tomay valobasi chirodin tomar akash tomar batas</p>
            </div>
          </div>

        </div>
        {/*  ************** INPUT file *********************/}
        <div>
          <input
            style={{ display: 'none' }}
            ref={inputRef}
            type="file"
            onChange={handleFileChange}
          />
        </div>
        {/*  ************** INPUT file *********************/}


        <div className='FormSection mt-[-75px] ml-5'>
          <form onSubmit={handleSubmit(onSubmit)} className='flex justify-center items-center gap-14 w-full'>
            <div>
              <label className="label ">
                <span className="label-text font-bold">User Name</span>
              </label>
              <input
                type="text"
                placeholder="Update Name"
                className="input input-bordered w-full inputField "
                {...register("name", {
                  required: {
                    value: true,
                    message: 'Name is Required'
                  }
                })}
              />
            </div>
            <div>
              <label className="label ">
                <span className="label-text font-bold"></span>
              </label>
              <input className='mt-4 bg-white hover:bg-secondary text-secondary hover:text-white  transition duration-500 rounded-md shadow-sm p-3 w-full font-semibold cursor-pointer' type="submit" value="UPDATED" />
            </div>
          </form>
        </div>
      </div>

      <div className="right-side">
        <div>
          <div class="card w-96 bg-base-100 shadow-xl">
            <div class="card-body">
              <h2 class="card-title">Change Password</h2>
              <p className='text-[#bbb]'>Your can  parmanently removed or temporally freeze your account </p>
              <div class="card-actions justify-end">
                <button class="btn btn-primary w-full">Change password</button>
              </div>
            </div>
          </div>
          <div class="card w-96 bg-base-100 shadow-xl mt-10">
            <div class="card-body">
              <h2 class="card-title">Close Account</h2>
              <p className='text-[#bbb]'>Your can  parmanently removed or temporally freeze your account </p>
              <div class="card-actions justify-end">
                <button class="btn btn-primary w-full">Close Account</button>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>


  );
};

export default SettingDemo;