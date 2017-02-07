import memoize from 'lru-memoize';
import { createValidator, required, email, match } from 'utils/validation';

const registerValidation = createValidator({
  email: [required, email],
  password: required
});
export default memoize(10)(registerValidation);
