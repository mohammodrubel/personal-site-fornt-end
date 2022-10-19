const { useEffect, useState } = require("react")

const useExtraInformation = (user)=>{
    const [information,setInformation]=useState('')

    useEffect(()=>{
        const email = user?.user?.email
        const currentUser = {"user":email}
            if(email){
                fetch(`https://portfolio-dnvt.onrender.com/webuser/user/${email}`,{
                    method:'put',
                    headers:{
                        'contnet-type':'application/json'
                    },
                    body:JSON.stringify(currentUser)
                })
                .then(res => res.json())
                .then(data => console.log(data))
            }
    },[user])
    return [information]
}



export default useExtraInformation