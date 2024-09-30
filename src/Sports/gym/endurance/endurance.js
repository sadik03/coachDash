import React from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCarousel,
  CCarouselCaption,
  CCarouselItem,
  CCol,
  CRow,
} from '@coreui/react'

const Collapses = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Yoga Practices</strong>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Explore different yoga practices and their benefits.
            </p>
            <CCarousel controls indicators>
              <CCarouselItem>
                <CCarouselCaption className="d-block">
                  <h5>Mountain Pose (Tadasana)</h5>
                  <p>Improves posture, balance, and calm focus.</p>
                </CCarouselCaption>
              </CCarouselItem>
              <CCarouselItem>
                <CCarouselCaption className="d-block">
                  <h5>Downward Dog (Adho Mukha Svanasana)</h5>
                  <p>Stretches the body and relieves stress.</p>
                </CCarouselCaption>
              </CCarouselItem>
              <CCarouselItem>
                <CCarouselCaption className="d-block">
                  <h5>Warrior Pose (Virabhadrasana)</h5>
                  <p>Builds stamina and strengthens the legs.</p>
                </CCarouselCaption>
              </CCarouselItem>
            </CCarousel>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Collapses
