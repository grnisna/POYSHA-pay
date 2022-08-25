import React from 'react';
import { useEffect, useState } from 'react';


const Questions = () => {
    const [questions, setQuestions] = useState([])
    useEffect(() => {
        fetch("questions.json")
            .then(res => res.json())
            .then(data => setQuestions(data))
    }, [])
    console.log(questions);
    return (
        <div>
            <h2 className='text-2xl py-3 grid justify-center bg-primary text-white'>Frequently Asking Question</h2>


            <div tabindex="1" class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div class="collapse-title text-xl text-white  font-medium bg-secondary hover:bg-primary">
                    <p>What type of phone must I have to use mobile banking?</p>
                </div>
                <div class="collapse-content font-sans text-lg">
                    <p>It works with any web-enabled phone device whose network allows secure SSL traffic.</p>
                </div>
            </div>
            <div tabindex="2" class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div class="collapse-title text-xl text-white  font-medium bg-secondary hover:bg-primary">
                    <p>What happens if I lose my mobile device?</p>
                </div>
                <div class="collapse-content font-sans text-lg">
                    <p>Contact your mobile provider immediately and notify the bank if you have concerns someone may access your account.  Your account data is not stored on your mobile devices, and cannot be accessed without your login credentials.  When you replace your device, simply edit your Mobile Settings in FirstNet and make any changes to the wireless provider and/or phone number if applicable.</p>
                </div>
            </div>
            <div tabindex="3" class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div class="collapse-title text-xl text-white  font-medium bg-secondary hover:bg-primary">
                    <p>Can i use any mobile device to access my accounts?</p>
                </div>
                <div class="collapse-content font-sans text-lg">
                    <p>Yes.  You can access your accounts via any mobile device that is web-enabled and allows secure SSL traffic.  The only difference is that text messages are sent to the phone number entered when enrolling for mobile banking, not necessarily the device from which you perform the transaction.</p>
                </div>
            </div>
            <div tabindex="4" class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div class="collapse-title text-xl text-white  font-medium bg-secondary hover:bg-primary">
                    <p>How do I sign up ?</p>
                </div>
                <div class="collapse-content font-sans text-lg">
                    <p>Consumer customers must have a FirstNet ID (enrolled in Online Banking) and must have registered their phone for mobile banking and have the mobile app downloaded. Click on “Mobile Deposit” icon to register, sign up the accounts you want to deposit to, and agree to the terms and conditions to begin using the program. Cash management users, please contact ebanking at 608-943-0150 for further information regarding this product.</p>
                </div>
            </div>
            <div tabindex="5" class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div class="collapse-title text-xl text-white  font-medium bg-secondary hover:bg-primary">
                    <p>Is it secure?</p>
                </div>
                <div class="collapse-content font-sans text-lg">
                    <p>Yes. Your personal information is safe with us. We use advanced encryption and monitoring technology. We secure your accounts with your unique FirstNet ID and password.We never store your personal banking information on your phone.You will be logged off from mobile banking after 10 minutes of inactivity or when your phone times out, whichever comes first.</p>
                </div>
            </div>
            <div tabindex="6" class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div class="collapse-title text-xl text-white  font-medium bg-secondary hover:bg-primary">
                    <p>How do I use mobile deposit?</p>
                </div>
                <div class="collapse-content font-sans text-lg">
                    <p>To use Mobile Deposit follow these steps: You will need to register first. Log into your Mobile Banking App. Click “Mobile Deposit” in the menu screen. Fill out the user registration screen and click “continue Select the account(s) you want to be able to deposit into. Read the Terms and Conditions. Click “Agree” then click “continue” You have now arrived at the registration status screen and are able to make deposits Click on Mobile Deposit in the Menu Screen On the Deposit Listing screen click on the “plus” sign to continue to make a deposit Scan the front of the check and follow the prompts to make sure the image is correct. Once the front is scanned, you will scan the back of the check. Enter the account number you want the deposit to go into and the amount of the check. Once completed, click “Deposit”. You will then have the option to complete the transaction, or deposit another item. Click “Done” when you have deposited all your items.</p>
                </div>
            </div>
            <div tabindex="7" class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div class="collapse-title text-xl text-white font-medium bg-secondary hover:bg-primary">
                    <p>Who Do I Call For Help?</p>
                </div>
                <div class="collapse-content font-sans text-lg">
                    <p>Please call +8801400960626. We're ready to help. If you're having technical issues with your phone or have questions about mobile data access or data charges on your phone bill, please contact the customer service department of your mobile service provider.</p>
                </div>
            </div>





            {/* <div>
                {
                    questions.map(question => <div

                        tabindex="1" class="collapse collapse-plus border border-base-100 bg-base-100 rounded-box"
                    >

                        <div className="collapse-title text-xl text-white font-medium bg-secondary hover:bg-primary ">
                            <h2>{question.ques}</h2>
                        </div>
                        <div className="collapse-content font-sans text-lg">
                            <p>{question.ans}</p>
                        </div>

                    </div>)
                }
            </div> */}

        </div>
    );
};

export default Questions;

