const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, 
  auth: {
    user: "phestalise@gmail.com",
    pass: "tltj jrnu kbwd oppj",
  },
});

const mailOptions = {
  from: "Alunos <phestalise@gmail.com>",
  to: "projetocoder@gmail.com",
  subject: 'Bazar Vintage',
  html: '<h1> Olá</h1><p>Tudo bem? Espero que sim. Recebemos a sua solicitação de compra dos produtos selecionados. Para finalizar a compra, entre em contato com 11999999999. Muito obrigado. </p>',
  text: 'Olá, Tudo bem? Espero que sim. Recebemos a sua solicitação de compra dos produtos selecionados. Para finalizar a compra, entre em contato com 11999999999. Muito obrigado.'
};

transporter.sendMail(mailOptions)
.then(() => {
  console.log('Email enviado com sucesso!');
})
.catch((err) => {
  console.log('Erro ao enviar email:', err);
});
