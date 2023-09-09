import React, { useState } from 'react'
import { CButton, CCard, CCardBody, CCol, CRow } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilHistory, cilPlus, cilSearch, cilTrash, cilXCircle } from '@coreui/icons'

const Tables = () => {
  return (
    <CRow>
      <CCol>
        <CCard className="mb-2">
          <CCardBody></CCardBody>
        </CCard>
        <CCard>
          <CCardBody>
            <CRow className="mb-3">
              <CCol>
                <CButton type="button" color="primary">
                  <CIcon icon={cilPlus}></CIcon> 新 增
                </CButton>
                <CButton type="button" color="dark">
                  <CIcon icon={cilXCircle}></CIcon> 停 用
                </CButton>
                <CButton type="button" color="danger">
                  <CIcon icon={cilTrash}></CIcon> 删 除
                </CButton>
              </CCol>
            </CRow>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Tables
