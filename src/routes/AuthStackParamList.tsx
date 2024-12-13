export type AuthStackParamList = {
    WelcomeScreen: undefined;
    LoginScreen: undefined;
    MailConfirmationScreen: undefined;
    NewAccountScreen: undefined;
    MainPageScreen: undefined;
    ProfileScreen: undefined;
    PatientsScreen: undefined;
    CalendarScreen: undefined;
    TreatmentListScreen: undefined;
    TreatmentDetailsScreen: {
      treatment: {
          nombre_tratamiento: string;
          medico: string;
          fecha_inicio: string;
          fecha_fin: string;
      };
    };
  };
  