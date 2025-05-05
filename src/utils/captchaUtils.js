export const generateCaptchaText = (length, charMap = '') => {
    let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

    switch (charMap) {
        case 'upper':
            charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
            break;
        case 'lower':
            charset = "abcdefghijklmnopqrstuvwxyz0123456789";
            break;
        case 'numbers':
            charset = "0123456789";
            break;
        case 'special_char':
            charset = "~`!@#$%^&*()_+-=[]{}\\|:'<>,.?/";
            break;
    }

    let captcha = '';
    for (let i = 0; i < length; i++) {
        captcha += charset.charAt(Math.floor(Math.random() * charset.length));
    }

    return captcha;
};
