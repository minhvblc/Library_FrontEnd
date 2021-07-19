import Button from "@atlaskit/button";
import TextField from "@atlaskit/textfield";
import '../css/LogIn.css';
import React from "react";
import Form, { Field } from "@atlaskit/form";

function Login() {
  return (
    <div
    style={{
      display: 'flex',
      width: '400px',
      maxWidth: '100%',
      margin: '0 auto',
      flexDirection: 'column',
      top:'50%',
    }}
    >
      <Form onSubmit={(data) => console.log("form data", data)}>
        {({ formProps }) => (
          <form {...formProps}>
            <Field
              id = "field"
              name="username"
              defaultValue=""
              label="Tên đăng nhập"
              isRequired
            >
              {({ fieldProps }) => <TextField id ="field" {...fieldProps} />}
            </Field>
            <Field name="password" defaultValue="" label="Mật khẩu" isRequired  id = "field">
              {({ fieldProps }) => <TextField type = "password" {...fieldProps} />}
            </Field>
            <Button type="submit" appearance="primary" id ="submit">
              Đăng nhập
            </Button>
          </form>
        )}
      </Form>
    </div>
  );
}

export default Login;
