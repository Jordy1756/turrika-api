if (process.env.NODE_ENV !== "production") {
    try {
        process.loadEnvFile();
    } catch (error) {
        console.warn("No se pudo cargar el archivo .env:", error.message);
    }
}

export const { CONNECTION_STRING_DB, PORT, NODE_ENV } = process.env;
