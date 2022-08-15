import { useEffect, useState } from "react"

const useToken = user => {
    const [token, setToken] = useState('');
    

    useEffect(() => {

        const email = user?.user?.email;
        const runningUser = { email: email };
       console.log(email);
        if (email) {
            fetch(`https://aqueous-cove-84612.herokuapp.com/user/${email}`, {
                method: 'PUT',
                headers: { 'content-type': 'application/json', },
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

    return [token];
}

export default useToken;