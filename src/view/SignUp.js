import React, { Fragment } from 'react';

import ButtonGroup from '@atlaskit/button/button-group';
import LoadingButton from '@atlaskit/button/loading-button';
import Button from '@atlaskit/button/standard-button';
import { Checkbox } from '@atlaskit/checkbox';
import TextField from '@atlaskit/textfield';

import Form, {
  CheckboxField,
  ErrorMessage,
  Field,
  FormFooter,
  HelperMessage,
  ValidMessage,
} from '@atlaskit/form';

function SignUp () {
    return(
        <div
    style={{
      display: 'flex',
      width: '400px',
      maxWidth: '100%',
      margin: '0 auto',
      flexDirection: 'column',
    }}
  >
    <Form
      onSubmit={(data) => {
        console.log('form data', data);
        return new Promise((resolve) => setTimeout(resolve, 2000)).then(() =>
          data.username === 'error' ? { username: 'IN_USE' } : undefined,
        );
      }}
    >
      {({ formProps, submitting }) => (
        <form {...formProps}>
          <Field
            name="username"
            label="Tên đăng nhập"
            isRequired
            defaultValue=""
          >
            {({ fieldProps, error }) => (
              <Fragment>
                <TextField autoComplete="off" {...fieldProps} />
                {!error && (
                  <HelperMessage>
                    Sử dụng chữ cái, số, ký tự.
                  </HelperMessage>
                )}
                {error && (
                  <ErrorMessage>
                    Tên đăng nhập đã tồn tại, thử lại.
                  </ErrorMessage>
                )}
              </Fragment>
            )}
          </Field>
          <Field
            name="password"
            label="Mật khẩu"
            defaultValue=""
            isRequired
            validate={(value) =>
              value && value.length < 8 ? 'TOO_SHORT' : undefined
            }
          >
            {({ fieldProps, error, valid, meta }) => {
              return (
                <Fragment>
                  <TextField type="password" {...fieldProps} />
                  {error && !valid && (
                    <HelperMessage>
                       Sử dụng ít nhất 8 ký tự với số, chữ cái và ký tự
                    </HelperMessage>
                  )}
                  {error && (
                    <ErrorMessage>
                      Mật khẩu phải lớn hơn 8 ký tự.
                    </ErrorMessage>
                  )}
                  {valid && meta.dirty ? (
                    <ValidMessage>Mật khẩu tốt!</ValidMessage>
                  ) : null}
                </Fragment>
              );
            }}
          </Field>
          
          <FormFooter>
            <ButtonGroup>
              <Button appearance="subtle">Cancel</Button>
              <LoadingButton
                type="submit"
                appearance="primary"
                isLoading={submitting}
              >
                Đăng ký
              </LoadingButton>
            </ButtonGroup>
          </FormFooter>
        </form>
      )}
    </Form>
  </div>
    );
}
export default SignUp;