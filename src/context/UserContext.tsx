import React, { createContext, useContext, useState, ReactNode } from 'react';
import axios from 'axios';

// Configuración de Axios
const api = axios.create({
  baseURL: 'https://healthy-age-backend.onrender.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Definición de la interfaz del usuario
interface User {
  nombre: string;
  correo: string;
  telefono: string;
  pin_seguridad: string;
  fecha_nacimiento: string;
  token_usuario: string;
  clave_api: string;
  rol: number;
  id_cuidador: string;
  id_usuario: string;
}

interface UserContextType {
  user: User;
  setUser: (userData: User) => void;
  registerUser: (userData: User) => Promise<void>;
  validateUser: (correo: string, pin_seguridad: string) => Promise<void>;
  loginUser: (correo: string, pin_seguridad: string) => Promise<User>;
}

// Proveer un usuario inicial vacío para evitar `null`
const initialUser: User = {
  nombre: '',
  correo: '',
  telefono: '',
  pin_seguridad: '',
  fecha_nacimiento: '',
  token_usuario: '',
  clave_api: '',
  rol: 0,
  id_cuidador: '',
  id_usuario: '',
};

const UserContext = createContext<UserContextType>({
  user: initialUser, // Usuario inicial vacío
  setUser: () => {}, // Función vacía
  registerUser: async () => Promise.resolve(),
  validateUser: async () => Promise.resolve(),
  loginUser: async () => Promise.resolve(initialUser),
});

interface UserProviderProps {
  children: ReactNode;
}

const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User>(initialUser);

  const registerUser = async (userData: User) => {
    try {
      console.log(userData);
      const response = await api.post('/usuarios', userData);
      console.log('Usuario registrado:', response.data);
    } catch (error) {
      console.error('Error al registrar el usuario:', error);
      throw error;
    }
  };

  const validateUser = async (correo: string, pin_seguridad: string) => {
    const to_send = {
      correo,
      pin_seguridad,
      codigo_confirmacion: 'S4bX87',
    };

    try {
      const response = await api.post('/usuarios/confirmacion-correo', to_send);
      console.log('Validación:', response.data);
    } catch (error) {
      console.error('Error al validar usuario:', error);
      throw error;
    }
  };

  const loginUser = async (correo: string, pin_seguridad: string): Promise<User> => {
    const to_send = {
      correo,
      pin_seguridad,
      codigo_confirmacion: 'S4bX87',
    };

    try {
      const response = await api.post('/usuarios/login', to_send);

      if (response.data) {
        const userData: User = response.data;
        setUser(userData);
        console.log(user);
        return userData;
      } else {
        throw new Error('Respuesta inesperada del servidor');
      }
    } catch (error) {
      console.error('Error al intentar iniciar sesión:', error);
      throw error;
    }
  };

  return (
    <UserContext.Provider value={{ user, setUser, registerUser, validateUser, loginUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
export const useUser = () => useContext(UserContext);
