import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCardImage,
  CCardText,
  CCardTitle,
  CCol,
  CRow,
} from '@coreui/react'

const FitnessCards = () => {
  const fitnessData = [
    {
      title: 'Strength Training',
      description: 'A full-body workout focused on strength building.',
      imageUrl: '/path-to-image/strength-training.jpg',
    },
    {
      title: 'Cardio Workout',
      description: 'A high-intensity cardio workout to boost endurance.',
      imageUrl: '/path-to-image/cardio.jpg',
    },
    {
      title: 'Yoga',
      description: 'A relaxing yoga session for flexibility and mindfulness.',
      imageUrl: '/path-to-image/yoga.jpg',
    },
    {
      title: 'Nutrition Plan',
      description: 'A balanced diet plan to complement your fitness goals.',
      imageUrl: '/path-to-image/nutrition.jpg',
    },
  ]

  return (
    <CRow>
      {fitnessData.map((item, index) => (
        <CCol xs={12} sm={6} lg={3} key={index}>
          <CCard className="mb-4">
            <CCardImage orientation="top" src={item.imageUrl} />
            <CCardBody>
              <CCardTitle>{item.title}</CCardTitle>
              <CCardText>{item.description}</CCardText>
              <CButton color="primary">Learn More</CButton>
            </CCardBody>
          </CCard>
        </CCol>
      ))}
    </CRow>
  )
}

export default FitnessCards
