import nodemailter from 'nodemailer';
import mailConfig from '../../config/mail';

export default nodemailter.createTransport(mailConfig);
