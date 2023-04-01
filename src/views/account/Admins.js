import React, { useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormInput,
  CFormLabel,
  CRow,
  CTable,
  CTableBody,
  CTableCaption,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import { Form, Space, Table, Tag, Button, Input, Select } from 'antd'
import CIcon from '@coreui/icons-react'
import { cilHistory, cilPlus, cilSearch, cilTrash, cilXCircle } from '@coreui/icons'

const { Option } = Select

const layout = {
  labelCol: {
    span: 3,
  },
  wrapperCol: {
    span: 16,
  },
}

const Tables = () => {
  const [form] = Form.useForm()

  const onFinish = (values) => {
    console.log(values)
  }

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a href="www.qq.com">{text}</a>,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? 'geekblue' : 'green'
            if (tag === 'loser') {
              color = 'volcano'
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            )
          })}
        </>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <a href="www.qq.com">Invite {record.name}</a>
          <a href="www.qq.com">Delete</a>
        </Space>
      ),
    },
  ]
  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sydney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
  ]

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows)
    },
    getCheckboxProps: (record) => ({
      disabled: record.name === 'Disabled User',
      name: record.name,
    }),
  }

  const [selectionType, setSelectionType] = useState('checkbox')

  return (
    <CRow>
      <CCol>
        <CCard className="mb-2">
          <CCardBody>
            <CRow>
              <CCol xs={4}>
                <CRow>
                  <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
                    <Form.Item name="username" label="用户名: ">
                      <Input />
                    </Form.Item>
                    <CButton type="button" color="primary" size="sm">
                      <CIcon icon={cilSearch}></CIcon> 查 询
                    </CButton>
                    <CButton type="button" color="link" size="sm">
                      <CIcon icon={cilHistory}></CIcon> 重 置
                    </CButton>
                  </Form>
                </CRow>
              </CCol>
              <CCol xs={4}></CCol>
              <CCol xs={4}></CCol>
            </CRow>
          </CCardBody>
        </CCard>
        <CCard>
          <CCardBody>
            <CRow className="mb-3">
              <CCol>
                <CButton type="button" color="primary" size="sm">
                  <CIcon icon={cilPlus}></CIcon> 新 增
                </CButton>
                <CButton type="button" color="dark" size="sm">
                  <CIcon icon={cilXCircle}></CIcon> 停 用
                </CButton>
                <CButton type="button" color="danger" size="sm">
                  <CIcon icon={cilTrash}></CIcon> 删 除
                </CButton>
              </CCol>
            </CRow>
            <Table
              rowSelection={{
                type: selectionType,
                ...rowSelection,
              }}
              columns={columns}
              dataSource={data}
            />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Tables
