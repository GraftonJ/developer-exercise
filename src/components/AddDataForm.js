import React, { useState } from 'react'
import {
  Row,
  Col,
  Button,
  Form
 } from 'react-bootstrap'

export const AddDataForm = props => {
  const initialFormState = { id: null, name: '', oneTime: '', monthly: '', }

  const [data, setData] = useState(initialFormState)

  const handleInputChange = event => {
    console.log(event.target)
    const { name, value } = event.target
    setData({...data, [name]: value})
  }



  return (
      <Form>
        <Row className="input-field">
          <Col sm={{ span: 2, offset: 1}} className="input-field">
            <Form.Control as="select">
              <option value="choose" disabled={false}>Select Type</option>
              <option value="revenue">Revenue</option>
              <option value="expense">Expense</option>
            </Form.Control>
          </Col>
          <Col sm={3} className="input-field">
            <Form.Control
              type="text"
              name="name"
              placeholder="Name"
              value={data.name}
              onChange={handleInputChange}
            />
          </Col>
          <Col sm={2} className="input-field">
            <Form.Control
              type="number"
              name="oneTime"
              placeholder="One-Time Amount"
              step="0.01"
              min="0"
              value={data.oneTime}
              onChange={handleInputChange}
            />
          </Col>
          <Col sm={2} className="input-field">
            <Form.Control
              type="number"
              name="monthly"
              placeholder="Monthly Amount"
              step="0.01"
              min="0"
              value={data.monthly}
              onChange={handleInputChange}
            />
          </Col>
          <Col sm={1} className="add-form-button">
            <Button type="submit">
              Add
            </Button>
          </Col>
        </Row>
      </Form>
  )
}

export default AddDataForm
