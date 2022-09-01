import React, { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Container,
  FormGroup,
  InputGroup,
  InputGroupText,
  Form,
  Label,
  Input,
} from "reactstrap";
import { validatePassword } from "../../utils/validatePassword";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { history } from "../../history";
import { Helmet } from "react-helmet";

const Login = () => {
  const [visiblePassword, setVisiblePassword] = useState(false);
  const viewPassword = () => {
    setVisiblePassword(!visiblePassword);
  };

  function handleClick() {
    history.push("/home");
  }
  return (
    <>
      <Helmet>
        <title>BoilerPlate - Login</title>
      </Helmet>
      <Container fluid>
        <Card className="main-div mb-0 highlight-card">
          <CardHeader>
            <CardTitle className="mb-0">Login</CardTitle>
          </CardHeader>
          <CardBody>
            <Form>
              <FormGroup className="form-group">
                <Label for="username">
                  Username <span className="required">*</span>
                </Label>
                <Input
                  type="text"
                  id="username"
                  name="username"
                  placeholder="e.g. Akash"
                  className="form-control"
                  autoComplete="off"
                />
              </FormGroup>
              <FormGroup className="form-group">
                <Label for="password">
                  Password <span className="required">*</span>
                </Label>
                <InputGroup>
                  <Input
                    type={visiblePassword ? "text" : "password"}
                    validate={validatePassword}
                    id="password"
                    name="password"
                    placeholder={
                      visiblePassword ? "e.g. Abcd@123" : "e.g. ********"
                    }
                    className="form-control"
                    autoComplete="off"
                  />
                  <InputGroupText>
                    {visiblePassword ? (
                      <FaEye
                        size="15"
                        className="pointer"
                        onClick={viewPassword}
                      />
                    ) : (
                      <FaEyeSlash
                        size="15"
                        className="pointer"
                        onClick={viewPassword}
                      />
                    )}
                  </InputGroupText>
                </InputGroup>
              </FormGroup>
              <Button
                type="button"
                className="btn-cu-lg"
                color="primary"
                onClick={handleClick}
              >
                Submit
              </Button>
            </Form>
          </CardBody>
        </Card>
      </Container>
    </>
  );
};

export default Login;
