declare global {
    namespace NodeJS {
      interface ProcessEnv {
        FRONTEND_URL: string;
        DB_CONNECTION: string;
        PORT?: string;
      }
    }
  }
  
  // If this file has no import/export statements (i.e. is a script)
  // convert it into a module by adding an empty export statement.
  export {}