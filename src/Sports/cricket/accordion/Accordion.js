import React from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CAccordion,
  CAccordionBody,
  CAccordionHeader,
  CAccordionItem,
} from '@coreui/react'

const SportsAccordion = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Sports Data</strong>
          </CCardHeader>
          <CCardBody>
            <CAccordion activeItemKey={1}>
              {/* Cricket Section */}
              <CAccordionItem itemKey={1}>
                <CAccordionHeader>Cricket</CAccordionHeader>
                <CAccordionBody>
                  <strong>Cricket Data:</strong>
                  <ul>
                    <li>Teams: India, Australia, England</li>
                    <li>Upcoming Matches: India vs Australia - Oct 3, 2024</li>
                    <li>Top Players: Virat Kohli, Steve Smith</li>
                  </ul>
                </CAccordionBody>
              </CAccordionItem>

              {/* Football Section */}
              <CAccordionItem itemKey={2}>
                <CAccordionHeader>Football</CAccordionHeader>
                <CAccordionBody>
                  <strong>Football Data:</strong>
                  <ul>
                    <li>Teams: Manchester United, Barcelona, PSG</li>
                    <li>Upcoming Matches: PSG vs Barcelona - Oct 5, 2024</li>
                    <li>Top Players: Lionel Messi, Kylian Mbappé</li>
                  </ul>
                </CAccordionBody>
              </CAccordionItem>

              {/* Basketball Section */}
              <CAccordionItem itemKey={3}>
                <CAccordionHeader>Basketball</CAccordionHeader>
                <CAccordionBody>
                  <strong>Basketball Data:</strong>
                  <ul>
                    <li>Teams: Lakers, Celtics, Warriors</li>
                    <li>Upcoming Matches: Lakers vs Warriors - Oct 10, 2024</li>
                    <li>Top Players: LeBron James, Stephen Curry</li>
                  </ul>
                </CAccordionBody>
              </CAccordionItem>
            </CAccordion>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default SportsAccordion
