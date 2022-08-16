import React from 'react';
import { useForm } from 'react-hook-form';

const ImageUpload = () => {
    const { register } = useForm();

    return (
        <div className='mx-20'>
            <h2>Upload Your Image</h2>
            <form>
                <input type="file"
                    className='w-full max-w-xs'
                    {...register("image", {
                        required: {
                            value: true,
                            message: 'Image is required'
                        }
                    })}
                />
                <input className='btn btn-outline btn-success w-full max-w-xs' type="submit" value="Add" />
            </form>
        </div>
    );
};

export default ImageUpload;