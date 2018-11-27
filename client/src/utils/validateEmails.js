export default (emails='') => {
    const emailRegExp = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

    const invalidEmails = emails
        .split(',')
        .map(email => email.trim())
        .filter(email => {
            return emailRegExp.test(email) === false;
        });
    if (invalidEmails.length) {
        return `These emails are invalid: ${invalidEmails}`;
    }
    return;
};