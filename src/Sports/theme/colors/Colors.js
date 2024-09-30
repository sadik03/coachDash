import React, { useState } from 'react'
import { CRow, CCol, CCard, CCardHeader, CCardBody } from '@coreui/react'

const AttendanceView = ({ name, status, date }) => {
  return (
    <table className="table w-100">
      <tbody>
        <tr>
          <td className="text-body-secondary">Name:</td>
          <td className="font-weight-bold">{name}</td>
        </tr>
        <tr>
          <td className="text-body-secondary">Status:</td>
          <td className="font-weight-bold">{status}</td>
        </tr>
        <tr>
          <td className="text-body-secondary">Date:</td>
          <td className="font-weight-bold">{date}</td>
        </tr>
      </tbody>
    </table>
  )
}

const AttendanceRecord = ({ className, name, status, date }) => {
  return (
    <CCol xs={12} sm={6} md={4} xl={2} className="mb-4">
      <div className={className} style={{ paddingTop: '75%' }}></div>
      <AttendanceView name={name} status={status} date={date} />
    </CCol>
  )
}

const Attendance = () => {
  const attendanceData = [
    { name: 'John Doe', status: 'Present', date: '2023-09-30' },
    { name: 'Jane Smith', status: 'Absent', date: '2023-09-30' },
    { name: 'Alice Brown', status: 'Late', date: '2023-09-30' },
    // Add more records as needed
  ]

  return (
    <CCard className="mb-4">
      <CCardHeader>Attendance Records</CCardHeader>
      <CCardBody>
        <CRow>
          {attendanceData.map((record, index) => (
            <AttendanceRecord
              key={index}
              className={
                record.status === 'Present'
                  ? 'bg-success'
                  : record.status === 'Absent'
                    ? 'bg-danger'
                    : 'bg-warning'
              }
              name={record.name}
              status={record.status}
              date={record.date}
            />
          ))}
        </CRow>
      </CCardBody>
    </CCard>
  )
}

export default Attendance
