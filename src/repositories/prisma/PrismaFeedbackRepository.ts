import { prisma } from "../../prisma";
import { FeedbackCreateData, FeedbackRepository } from "../FeedbackRepository";

export class PrismaFeedbackRepository implements FeedbackRepository{
  async create({type, comment, screenshot }: FeedbackCreateData) {

    await prisma.feedback.create({
      data: {
          type,
          comment,
          screenshot
      }
      //Armazenando o conteúdo da requisição, para que seja possível retorná-lo no fim.
  })
  //Transformando a execução externa à tratativa de rotas em uma função assíncrona, fazemos com que o retorno só seja executado quando a operação for finalizada.

  }
}