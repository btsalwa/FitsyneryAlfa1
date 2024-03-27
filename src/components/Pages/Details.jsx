import React, { useEffect, useState } from 'react';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const Details = () => {
    const [logindata, setLoginData] = useState([]);
    const history = useNavigate();
    const [show, setShow] = useState(false);
    const todayDate = new Date().toISOString().slice(0, 10);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const Birthday = () => {
        const getuser = localStorage.getItem("user_login");
        if (getuser && getuser.length) {
            const user = JSON.parse(getuser);
            setLoginData(user);

            const userbirth = user.find((el) => el.date === todayDate);

            if (userbirth) {
                setTimeout(() => {
                    handleShow();
                }, 3000);
            }
        }
    };

    const userlogout = () => {
        localStorage.removeItem("user_login");
        history("/");
    };

    useEffect(() => {
        Birthday();
    }, []);

    return (
        <>
            {logindata.length === 0 ? "error" :
                <>
                    <h1>Details page</h1>
                    <h1>{logindata[0].name}</h1>
                    <Button onClick={userlogout}>LogOut</Button>

                    {logindata[0].date === todayDate ?
                        <Modal open={show} onClose={handleClose}>
                            <div style={{ margin: 'auto', width: 400, backgroundColor: 'white', padding: 20 }}>
                                <h2 id="modal-title">{logindata[0].name} 😄</h2>
                                <p id="modal-description">Wish you many many happy returns of the day ! 🍰</p>
                                <Button variant="contained" onClick={handleClose}>Close</Button>
                                <Button variant="contained" onClick={handleClose}>Save Changes</Button>
                            </div>
                        </Modal> : ""}
                </>
            }
        </>
    )
};

export default Details;