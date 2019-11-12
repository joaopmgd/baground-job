// import Mail from '../lib/Mail';
import Queue from '../jobs/RegistrationMail';

export default {
  async store(req, res) {
    const { name, email, password } = req.body;

    const user = {
      name,
      email,
      password,
    };

    // 1)
    // Enviar email, sendMail retorna uma promise, entao vai ser executada async
    // Await ele roda sincronamente, mas utiliza recursos da nossa aplicação alem da demora
    // Sem await ele vai rodar rapido mas ainda com recursos do app e nao saberemos se deu certo
    // await Mail.sendMail({
    //   from: 'Queue Test <queue@queuetest.com.br>',
    //   to: `${name} <${email}>`,
    //   subject: 'Cadastro de usuário',
    //   html: `Olá, ${name}, seja bem vindo à plataforma!`,
    // });

    // 2)
    // Adicionar job RegistrationMail na fila
    await Queue.add('RegistrationMail', { user });

    return res.json(user);
  },
};
