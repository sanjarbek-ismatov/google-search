import React,{ useState } from "react";
import './style/style.css';
import Profile from './images/profile.jpg';
function Search(){
    const [search, setSearch] = useState();
    function fetchData(){
        const api = 'AIzaSyBbFGoK91L85xUu9ONymejA1ecQPAVN8gM';
        let url = `https://www.googleapis.com/customsearch/v1?key=${api}&cx=344518b235096fb90&q=${search}`;
        if (search !== ''){
            fetch(url)
            .then(response => response.json())
            .then(data => console.log(data))
        }
    }
    return (
        <>
            <header>
                <div className="header">
                    <div className="header-nav">
                        <a href="https://mail.google.com/mail/&ogbl" target='_blank'>Gmail</a>
                        <a href="https://www.google.co.uz/imghp?hl=uz&ogbl" target="_blank">Pochta</a>
                        <svg>
                        <path d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"></path>
                        </svg>
                        <img className="profile-image" src={Profile} />
                    </div>
                </div>
                 {/* <input type='text' onChange={({target}) => setSearch(target.value)} onKeyPress={(e) => {
                    if (e.key === 'Enter'){
                        fetchData()
                    }
                }} />  */}
            </header>
        </>
    )
}
export default Search;