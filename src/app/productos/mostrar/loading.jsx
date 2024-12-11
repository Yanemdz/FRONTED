"use client"; // Esto indica que el componente debe renderizarse en el lado del cliente

export default function Cargando() {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
            backgroundColor: "##eba1ee" // Fondo rojo al estilo del logo de la F1
        }}>
            <div style={{
                width: "50px",
                height: "50px",
                border: "5px solid #444", // Color gris oscuro para el borde del spinner
                borderTop: "5px solid #ffffff", // Blanco para el borde superior
                borderRadius: "50%",
                animation: "spin 1s linear infinite",
                marginBottom: "20px"
            }}></div>
            <h1 style={{
               fontSize: "1.5em",
               color: "#ffffff", // Blanco para el texto
               fontFamily: "'Titillium Web', sans-serif",
               fontWeight: "700",
               textTransform: "uppercase",
               letterSpacing: "2px"
            }}>Cargando...</h1>

            <style jsx>{`
                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
            `}</style>
        </div>
    );
}