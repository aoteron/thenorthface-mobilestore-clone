

export const setLocalStorageData = (key: string, data: unknown): void => {
    try {
        const jsonData = JSON.stringify(data);
        localStorage.setItem(key, jsonData);
    } catch (error) {
        console.error('Error al setear datos en localStorage:', error);
    }
};

export const getLocalStorageData = (key: string): unknown | null => {
    try {
        const jsonData = localStorage.getItem(key);
        if (!jsonData) return null;

        return JSON.parse(jsonData);
    } catch (error) {
        console.error('Error al obtener datos del localStorage:', error);
        return null;
    }
};