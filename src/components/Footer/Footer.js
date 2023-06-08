import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';

export default function LabelBottomNavigation() {
    return (
        <div style={{ backgroundColor: '#0097A7', position: 'absolute', width: '100%', height: '50px' }}>
            <BottomNavigation
                sx={{
                    width: '20vh',
                    height: '50px',
                    margin: 'auto',
                    borderRadius: '15px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
                showLabels // Utiliza la propiedad showLabels para mostrar las etiquetas de los elementos
            >
                <p
                    style={{
                        fontFamily: 'Leckerli One',
                        color: '#0097A7',
                        fontSize: '25px',
                        textAlign: 'center',
                        alignItems: 'center',
                        lineHeight: '50px',
                        margin: '0',
                    }}
                >
                    React Photos
                </p>
            </BottomNavigation>
        </div>
    );
}