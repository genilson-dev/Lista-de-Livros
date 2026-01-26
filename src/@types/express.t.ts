declare global { // Extensão do namespace Express
  namespace Express { // Extensão do namespace Express 
    interface Request { // Extensão da interface Request
      userId?: string; // Adiciona a propriedade userId opcional
    }
  }
}

export { };
