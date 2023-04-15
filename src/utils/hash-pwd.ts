import * as crypto from "crypto";

export const hashPwd = (p: string): string => {
    const hmac = crypto.createHmac('sha256', "adasd adas d21124148123!@#@!#!$%!@$!@ VQADASDAW!#@Z QE DWQD !@DASDQ#W!@EQWASD$$$$$$!@@S@S ");
    hmac.update(p);
    return hmac.digest('hex');
}
