import express  from "express";
import nodemailer from "nodemailer";
import { NodemailerMaisAdapter } from "./adapters/nodemailer/nodemailerMailAdapter";
import { prisma } from "./prisma";
import { PrismaFeedbackRepository } from "./repositories/prisma/PrismaFeedbackRepository";
import { SubmitFeedbackUseCase } from "./use-cases/SubmitFeedback-Usecases";

export const  routes = express.Router();

routes.post("/feedbacks", async (req, res) => {

  const { type, comment, screenshot } = req.body;
  
  const prismaFeedbackRepository = new PrismaFeedbackRepository();
  const nodemailerMailAdapter = new NodemailerMaisAdapter();
  
  const submitFeedbackUseCase= new SubmitFeedbackUseCase(
    prismaFeedbackRepository,
    nodemailerMailAdapter
  )

  const feedback = await submitFeedbackUseCase.execute({
    type,
    comment,
    screenshot,
  })

  return res.status(201).send();
});