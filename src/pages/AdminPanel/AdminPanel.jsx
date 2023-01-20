import React from 'react';
import './AdminPanel.scss';
import AdminNav from "./AdminNav";
import AxiosPages from "./AxiosPages";
import { useNavigate } from 'react-router-dom';

const AdminPanel = () => {
    const navigate = useNavigate();
    React.useEffect(() => {
        if (!localStorage.getItem("token")) {
          navigate("/");
        }
      }, []);

    React.useEffect(() => {
        document.title = `Admin Panel | Razer.com `;
    }, []);
    return (
        <>
        <AdminNav/>
            <AxiosPages/>
        </>
    );
};

export default AdminPanel;