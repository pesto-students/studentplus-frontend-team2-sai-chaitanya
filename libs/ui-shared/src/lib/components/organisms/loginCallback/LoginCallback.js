import { LoginCallback as OktaCallback } from '@okta/okta-react';
import Result from '../../molecules/result';

const LoginCallback = () => {
  return (
    <OktaCallback
      errorComponent={Result}
    >
      LoginCallback
    </OktaCallback>
  );
};

export default LoginCallback;
