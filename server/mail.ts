const fs = require('fs')
const handlebars = require('handlebars')

const layout = fs.readFileSync(`${__dirname}/views/mail/layouts/default.handlebars`, 'utf8')
const readFile = name => {
  const content = fs.readFileSync(`${__dirname}/views/mail/${name}`, 'utf8')
  return layout.replace('[[CONTENT]]', content)
}
const getTemplate = name => handlebars.compile(readFile(name))

const mail = {
  FROM: 'Grow2 <noreply@grow2.com.au>',
  TO: 'contact@adminoh.com',
  welcome: {
    subject: name => `Grow2 registration`,
    text: getTemplate('welcome.txt'),
    html: getTemplate('welcome.handlebars'),
  },
  invite: {
    subject: `Adminoh invite`,
    text: getTemplate('invite.txt'),
    html: getTemplate('invite.handlebars'),
  },
  minvite: {
    subject: `Adminoh invite`,
    text: getTemplate('minvite.txt'),
    html: getTemplate('minvite.handlebars'),
  },
  resetPassword: {
    subject: `Adminoh reset password`,
    text: getTemplate('reset-password.txt'),
    html: getTemplate('reset-password.handlebars'),
  },
  downgrade: {
    subject: 'Downgrade Subscription Plan Request',
    text: getTemplate('downgrade-plan.txt'),
    html: getTemplate('downgrade-plan.handlebars')
  },
  subscribers: {
    subject: 'New Registration to Adminoh',
    text: getTemplate('subscribers.txt'),
    html: getTemplate('subscribers.handlebars')
  },
  registration: {
    text: getTemplate('registration2admin.txt'),
    html: getTemplate('registration2admin.handlebars')
  },
  inviteCourse: {
    text: getTemplate('inviteCourseUser.txt'),
    html: getTemplate('inviteCourseUser.handlebars')
  }
}

export default mail
