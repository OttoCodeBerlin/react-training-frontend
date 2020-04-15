import 'bootstrap/dist/css/bootstrap.min.css'

import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

export default class SignupPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isVisible: false,
      email: '',
      password: '',
      nationality: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit = function (e) {
    e.preventDefault()
    if (this.state.email.length > 0) this.setState({ isVisible: true })
  }

  handleChange = function (e) {
    e.preventDefault()
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    return (
      <div style={{ margin: '20px' }}>
        <Form noValidate onSubmit={this.handleSubmit}>
          <Form.Row>
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>Email</Form.Label>
              <Form.Control
                style={{ marginBottom: '10px' }}
                required
                type="email"
                name="email"
                value={this.state.email}
                placeholder="Email..."
                onChange={(e) => this.handleChange(e)}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>

              <Form.Label>Password</Form.Label>
              <Form.Control
                style={{ marginBottom: '10px' }}
                name="password"
                type="password"
                value={this.state.password}
                placeholder="Password..."
                onChange={(e) => this.handleChange(e)}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>

              <Form.Label>Nationality</Form.Label>
              <Form.Control
                as="select"
                name="nationality"
                value={this.state.nationality}
                onChange={(e) => this.handleChange(e)}
              >
                <option>Germany</option>
                <option>United States</option>
                <option>Cuba</option>
                <option>France</option>
                <option>...</option>
              </Form.Control>
            </Form.Group>
          </Form.Row>

          <Button type="submit">Sign Up</Button>
        </Form>
        {this.state.isVisible && (
          <div>
            <hr />
            <p>
              Hello {this.state.name}. Your email address is: {this.state.email} and this email address is correct.
            </p>
          </div>
        )}
      </div>
    )
  }
}
