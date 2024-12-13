import React, { createContext, useContext, ReactNode } from 'react';
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://healthy-age-backend.onrender.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

interface Treatment {
  medico: string;
  nombre_tratamiento: string;
  id_usuario: string;
  fecha_inicio: string;
  fecha_fin: string;
}

interface Medicine {
  id_medicamento: string;
  nombre_medicamento: string;
}

interface Medication {
  id_tratamiento: string;
  id_medicamento: string;
  fecha_inicio: string;
  hora_inicio: string;
  fecha_fin: string;
  intervalo: number;
  tipo_intervalo: string;
  dosis: number;
  unidad: string;
  via_administracion: string;
  existencia_actual: number;
  recordatorio: number;
  limite_recordatorio: number;
}

interface ApiContextType {
  // Treatments
  obtainTreatmentById: (id_usuario: string) => Promise<Treatment[]>;
  registerTreatment: (treatmentData: Treatment) => Promise<void>;
  deleteTreatment: (treatment_id: string) => Promise<void>;
  editTreatment: (treatment_id: string, treatmentData: Treatment) => Promise<void>;

  // Medicines
  obtainMedicineById: (id_medicamento: string) => Promise<Medicine>;
  registerMedicine: (medicineData: Medicine) => Promise<Medicine>;
  deleteMedicine: (id_medicamento: string) => Promise<void>;
  editMedicine: (id_medicamento: string, medicineData: Medicine) => Promise<void>;

  // Medications
  obtainMedicationById: (id_medicacion: string) => Promise<Medication>;
  registerMedication: (medicationData: Medication) => Promise<void>;
  deleteMedication: (id_medicacion: string) => Promise<void>;
  editMedication: (id_medicacion: string, medicationData: Partial<Medication>) => Promise<void>;
}

const ApiContext = createContext<ApiContextType>({
  // Treatments
  obtainTreatmentById: async () => Promise.resolve([]),
  registerTreatment: async () => Promise.resolve(),
  deleteTreatment: async () => Promise.resolve(),
  editTreatment: async () => Promise.resolve(),

  // Medicines
  obtainMedicineById: async () => Promise.resolve({ id_medicamento: '', nombre_medicamento: '' }),
  registerMedicine: async () => Promise.resolve({id_medicamento: '', nombre_medicamento: '' }),
  deleteMedicine: async () => Promise.resolve(),
  editMedicine: async () => Promise.resolve(),

  // Medications
  obtainMedicationById: async () =>
    Promise.resolve({
      id_tratamiento: '',
      id_medicamento: '',
      fecha_inicio: '',
      hora_inicio: '',
      fecha_fin: '',
      intervalo: 0,
      tipo_intervalo: '',
      dosis: 0,
      unidad: '',
      via_administracion: '',
      existencia_actual: 0,
      recordatorio: 0,
      limite_recordatorio: 0,
    }),
  registerMedication: async () => Promise.resolve(),
  deleteMedication: async () => Promise.resolve(),
  editMedication: async () => Promise.resolve(),
});

interface ApiServiceProps {
  children: ReactNode;
}

const ApiServices: React.FC<ApiServiceProps> = ({ children }) => {
  const obtainTreatmentById = async (id_usuario: string): Promise<Treatment[]> => {
    try {
      const response = await api.get(`/tratamientos/usuario/${id_usuario}`);
      return response.data;
    } catch (error) {
      console.error('Error al obtener lista de tratamientos:', error);
      throw error;
    }
  };

  const registerTreatment = async (treatmentData: Treatment) => {
    try {
      await api.post('/tratamientos', treatmentData);
    } catch (error) {
      console.error('Error al registrar tratamiento:', error);
      throw error;
    }
  };

  const deleteTreatment = async (treatment_id: string) => {
    try {
      await api.delete(`/tratamientos/${treatment_id}`);
    } catch (error) {
      console.error('Error al eliminar el tratamiento:', error);
      throw error;
    }
  };

  const editTreatment = async (treatment_id: string, treatmentData: Treatment) => {
    try {
      await api.put(`/tratamientos/${treatment_id}`, treatmentData);
    } catch (error) {
      console.error('Error al editar tratamiento:', error);
      throw error;
    }
  };

  const obtainMedicineById = async (id_medicamento: string): Promise<Medicine> => {
    try {
      const response = await api.get(`/medicamento/${id_medicamento}`);
      return response.data;
    } catch (error) {
      console.error('Error al obtener medicamento:', error);
      throw error;
    }
  };

  const registerMedicine = async (medicineData: Medicine): Promise<Medicine> => {
    try {
        const to_send = {
            nombre_medicamento: medicineData.nombre_medicamento,
        };
        const response = await api.post('/medicamentos', to_send);
        console.log(response.data); // Asegúrate de que response.data contiene id_medicamento
        return response.data; // Devuelve el medicamento registrado
    } catch (error) {
        console.error('Error al registrar medicamento:', error);
        throw error;
    }
};

  const deleteMedicine = async (id_medicamento: string) => {
    try {
      await api.delete(`/medicamento/${id_medicamento}`);
    } catch (error) {
      console.error('Error al eliminar medicamento:', error);
      throw error;
    }
  };

  const editMedicine = async (id_medicamento: string, medicineData: Medicine) => {
    try {
      await api.put(`/medicamento/${id_medicamento}`, medicineData);
    } catch (error) {
      console.error('Error al editar medicamento:', error);
      throw error;
    }
  };

  const obtainMedicationById = async (id_medicacion: string): Promise<Medication> => {
    try {
      const response = await api.get(`/medicaciones/${id_medicacion}`);
      return response.data;
    } catch (error) {
      console.error('Error al obtener medicación:', error);
      throw error;
    }
  };

  const registerMedication = async (medicationData: Medication) => {
    try {
      const to_send = {
        id_tratamiento: medicationData.id_tratamiento,
        id_medicamento: medicationData.id_medicamento,
        fecha_inicio: medicationData.fecha_inicio,
        hora_inicio: medicationData.hora_inicio,
        fecha_fin: medicationData.fecha_fin,
        intervalo: medicationData.intervalo,
        tipo_intervalo: medicationData.tipo_intervalo,
        dosis: medicationData.dosis,
        unidad: medicationData.unidad,
        via_administracion: medicationData.via_administracion,
        existencia_actual: medicationData.existencia_actual,
        recordatorio: medicationData.recordatorio,
        limite_recordatorio: medicationData.limite_recordatorio,
      }
      console.log(to_send);
      await api.post('/medicaciones', to_send);
    } catch (error) {
      console.error('Error al registrar medicación:', error);
      throw error;
    }
  };

  const deleteMedication = async (id_medicacion: string) => {
    try {
      await api.delete(`/medicaciones/${id_medicacion}`);
    } catch (error) {
      console.error('Error al eliminar medicación:', error);
      throw error;
    }
  };

  const editMedication = async (id_medicacion: string, medicationData: Partial<Medication>) => {
    try {
      await api.put(`/medicaciones/${id_medicacion}`, medicationData);
    } catch (error) {
      console.error('Error al editar medicación:', error);
      throw error;
    }
  };

  return (
    <ApiContext.Provider
      value={{
        obtainTreatmentById,
        registerTreatment,
        deleteTreatment,
        editTreatment,
        obtainMedicineById,
        registerMedicine,
        deleteMedicine,
        editMedicine,
        obtainMedicationById,
        registerMedication,
        deleteMedication,
        editMedication,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};

export const useApi = () => useContext(ApiContext);

export default ApiServices;
