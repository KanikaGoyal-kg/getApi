import React from 'react';

const GetAPI = () => {
    const request = new XMLHttpRequest();
    request.open("Get", "https://jsonplaceholder.typicode.com/users");
    request.send();
    request.onload = () => {
        console.log(request, "huduyds");
        if(request.status===200){
          console.log(JSON.parse(request.response))
        } else {
            <p>API is not hit</p>
        }
    }


    return (
        <>
        <p>{request}</p>

        </>
            )
}

export default GetAPI;