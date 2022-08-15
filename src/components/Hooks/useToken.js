import { useEffect, useState } from "react"

const useToken = user => {
    const [token, setToken] = useState('');
    console.log(user);

    useEffect(() => {

        const email = user?.user?.email;
        
        const runningUser = { email: email };
        if (email) {
            
            fetch(`https://powerful-basin-90376.herokuapp.com/user/${email}`, {
                method: 'PUT',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(runningUser)
            })
                .then(res => res.json())
                .then(data => {
                    const userToken = data.token;
                    localStorage.setItem('userToken', userToken);
                    setToken(userToken);
                })
        }

    }, [user]);

    return [token,setToken];
}

export default useToken;