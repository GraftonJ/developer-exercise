import React from 'react'
import {
  Button,
 } from 'react-bootstrap'

const ExpenseTable = props => (
  <table className="revenue-table">
    <thead>
      <tr>
        <th>Expenses</th>
      </tr>
      <tr>
        <th></th>
        <th>One-Time</th>
        <th>Monthly</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/*If there is revenue data, show that in the table*/}
      {props.expense.length > 0 ? (
        props.expense.map((expense, index) => (
          <tr key={index}>
            <td>{expense.name}</td>
            <td>${expense.oneTime}</td>
            <td>${expense.monthly}</td>
            <td><Button variant="danger">Delete</Button></td>
          </tr>
        ))
      )
      /*Else show "No Revenue Data"*/
      : (
          <tr>
            <td colSpan={3}>No Revenue Data</td>
          </tr>
        )
      }

    </tbody>
  </table>
)

export default ExpenseTable