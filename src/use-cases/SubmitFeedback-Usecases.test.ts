import { SubmitFeedbackUseCase } from "./SubmitFeedback-Usecases";

//Spies -> Vão assegurar que uma função foi chamada. Por exemplo na chamada de uma função de envio de dados para o banco de dados, essa "função espiã" irá aseegurar que a função foi chamada, mas não pode assegurar que os dados foram realmente salvos no banco de dados.

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

const SubmitFeedback = new SubmitFeedbackUseCase(
  { create: createFeedbackSpy },
  { sendMail: sendMailSpy }
)

describe('Submit feedback', () => {
  it('Should be able to submit a feedback', async () => {
    await expect(SubmitFeedback.execute({
      type: 'BUG',
      comment: 'example comment',
      screenshot: 'data:image/png;base64',
    })).resolves.not.toThrow();

    expect(createFeedbackSpy).toHaveBeenCalled();
    expect(sendMailSpy).toHaveBeenCalled();
  });

  it('Should not be able to submit a feedback without a type', async () => {
    await expect(SubmitFeedback.execute({
      type: '',
      comment: 'example comment',
      screenshot: 'data:image/png;base64',
    })).rejects.toThrow();
  });

  it('Should not be able to submit a feedback without a comment', async () => {
    await expect(SubmitFeedback.execute({
      type: 'BUG',
      comment: '',
      screenshot: 'data:image/png;base64',
    })).rejects.toThrow();
  });

  it('Should not be able to submit a feedback without a valid format', async () => {
    await expect(SubmitFeedback.execute({
      type: 'BUG',
      comment: 'example comment',
      screenshot: 'test.jpg',
    })).rejects.toThrow();
  });
});