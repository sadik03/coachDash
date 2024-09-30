import React from 'react'
import { CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react'

const FitnessData = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Fitness Data football</strong>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Here is a breakdown of various fitness metrics and performance data.
            </p>

            <h6>Workout Plan:</h6>
            <ul>
              <li>Monday: Cardio - 30 mins running</li>
              <li>Tuesday: Strength Training - Upper Body</li>
              <li>Wednesday: Rest Day</li>
              <li>Thursday: HIIT - 45 mins session</li>
              <li>Friday: Strength Training - Lower Body</li>
            </ul>

            <h6>Calories Burned:</h6>
            <ul>
              <li>Monday: 400 kcal</li>
              <li>Tuesday: 500 kcal</li>
              <li>Wednesday: 200 kcal</li>
              <li>Thursday: 600 kcal</li>
              <li>Friday: 550 kcal</li>
            </ul>

            <h6>Progress Tracking:</h6>
            <ul>
              <li>Weight: 72kg</li>
              <li>Body Fat Percentage: 15%</li>
              <li>Goal: Build Muscle</li>
            </ul>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default FitnessData
