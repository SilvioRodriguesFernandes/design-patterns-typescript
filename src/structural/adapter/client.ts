import { EmailValidatorClassAdapter } from './validation/email-validator-class-adapter';
import { emailValidatorFnAdapter } from './validation/email-validator-fn-adapter';
import {
  EmailValidatorFnProtocol,
  EmailValidatorProtocol,
} from './validation/email-validator-protocol';

function validaEmailClass(
  emailValidator: EmailValidatorProtocol,
  email: string,
): void {
  if (emailValidator.isEmail(email)) {
    console.log(`${email} é um email válido! (CLASS)`);
  } else {
    console.log(`${email} é um email inválido! (CLASS)`);
  }
}

function validaEmailFn(
  emailValidator: EmailValidatorFnProtocol,
  email: string,
): void {
  if (emailValidator(email)) {
    console.log(`${email} é um email válido! (FN)`);
  } else {
    console.log(`${email} é um email inválido! (FN)`);
  }
}

const emailClass = 'anna@test.com';
validaEmailClass(new EmailValidatorClassAdapter(), emailClass);

const emailFn = 'camila@test.com';
validaEmailFn(emailValidatorFnAdapter, emailFn);
