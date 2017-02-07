import users from './users';
import messages from './messages';
import libraries from './libraries';

export default function services() {
  const app = this;

  app.configure(users);
  app.configure(libraries);
  app.configure(messages);
}
