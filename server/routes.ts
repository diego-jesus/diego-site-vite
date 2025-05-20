import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactMessageSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate the request body
      const validatedData = contactMessageSchema.parse(req.body);
      
      // Store the contact message
      const message = await storage.createContactMessage(validatedData);
      
      // Return success response
      return res.status(201).json({
        message: "Mensagem recebida com sucesso",
        data: message
      });
    } catch (error: any) {
      if (error.name === 'ZodError') {
        return res.status(400).json({ 
          message: "Erro de validação", 
          errors: error.errors 
        });
      }
      
      return res.status(500).json({ 
        message: "Erro ao processar solicitação" 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
