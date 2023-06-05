import React from "react";
import { Pagination } from "@mui/material";

function Paginacion() {
    return (
        <Pagination style={{width:'25%', margin: '30px auto' }} count={10} variant="outlined" color="primary" />
    );
}

export default Paginacion;

