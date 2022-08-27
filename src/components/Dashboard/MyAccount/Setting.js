import React from 'react';
import ImageUpload from '../../Pages/HomePage/ImageUpload';
import UserImages from '../../Pages/HomePage/UserImages';
import SettingDemo from './SettingDemo';

const Setting = () => {
    return (
        <div>
            
            <ImageUpload></ImageUpload>
            <UserImages></UserImages>
            <SettingDemo/>
        </div>
    );
};

export default Setting;