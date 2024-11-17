// SidebarMobileBase.tsx
import React, {useState} from "react";
import {BottomNavigation, BottomNavigationAction} from "@mui/material";
import {SidebarProps} from "./ISideBar";

import {useNavigate} from "react-router-dom";

const SidebarBaseMobile: React.FC<SidebarProps> = ({icons, labels, paths}) => {
    const [value, setValue] = React.useState('recents');
    const navigate = useNavigate();

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue); // Actualiza el valor seleccionado
        navigate(paths[newValue]); // Redirige a la ruta correspondiente
    };

    return (
        <BottomNavigation sx={{
            width: '100%', "& .Mui-selected": {
                color: "#29BD8A", // Color para el icono y el texto cuando está seleccionado
            },
        }} value={value} onChange={handleChange} showLabels>
            {icons.map((Icon, index) => (
                <BottomNavigationAction
                    key={index}
                    label={labels[index]}
                    value={index}
                    icon={<Icon/>}
                />
            ))}

        </BottomNavigation>
    );
};

export default SidebarBaseMobile;
