import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "ad6f4f1cad17eb",
    pass: "5a3a513dde052f"
  }
});

export class NodemailerMaisAdapter implements MailAdapter{
  async sendMail({subject, body}: SendMailData) {
    await transport.sendMail({
        from: "João Souza <joao.souza@feedget.com>",
        to: "Equipe feedget <feedget@feedget.com>",
        subject,
        html: body,
    });
  }
}