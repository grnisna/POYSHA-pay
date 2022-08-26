import React, { useEffect, useState } from 'react';

const Qus = () => {
    const [questions, setQuestions] = useState([])
    console.log(questions);
    useEffect(() => {
        fetch("http://localhost:5000/faq")
            .then(res => res.json())
            .then(data => setQuestions(data))
    }, [])
    return (
        <div>
            <h2 className='text-2xl py-3 grid justify-center bg-primary text-white'>Frequently Asking Question</h2>
            {
                questions.map(question => <div

                    tabindex="0" class="collapse collapse-plus border border-base-100 bg-base-100 rounded-box"
                >
                    <div className="collapse-title text-xl text-white font-medium bg-secondary hover:bg-primary ">
                        <h2>{question.ques}</h2>
                    </div>
                    <div className="collapse-content font-sans text-lg">
                        <p>{question.ans}</p>
                    </div>

                </div>)
            }

        </div>
    );
};

export default Qus;