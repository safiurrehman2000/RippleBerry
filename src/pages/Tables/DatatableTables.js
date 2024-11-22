// src/components/filter.
import React, { useMemo, useState } from "react"
import PropTypes from "prop-types"

import { ColorPicker } from "@vtaits/react-color-picker"

import {
  Button,
  Input,
  Label,
  Modal,
  Form,
  Row,
  Toast,
  ToastHeader,
  ToastBody,
  FormGroup,
} from "reactstrap"
//import component
import Breadcrumbs from "../../components/Common/Breadcrumb"
import TableContainer from "../../components/Common/TableContainer"

function DatatableTables() {
  const [toast, setToast] = useState(false)
  const [modal_small, setmodal_small] = useState(false)
  const columns = useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Position",
        accessor: "position",
      },
      {
        Header: "Office",
        accessor: "office",
      },
      {
        Header: "Age",
        accessor: "age",
      },
      {
        Header: "Start date",
        accessor: "startDate",
      },
      {
        Header: "Salary",
        accessor: "salary",
      },
    ],
    []
  )
  const toggleToast = () => {
    setToast(!toast)
  }
  const data = [
    {
      name: "Jennifer Chang",
      position: "Regional Director",
      age: 28,
      office: "Singapore",
      startDate: "2010/11/14",
      salary: "$357,650",
    },
    {
      name: "Gavin Joyce",
      position: "Developer",
      age: 42,
      office: "Edinburgh",
      startDate: "2010/12/22",
      salary: "$92,575",
    },
    {
      name: "Angelica Ramos",
      position: "Chief Executive Officer (CEO)",
      age: 47,
      office: "London",
      startDate: "2009/10/09",
      salary: "$1,200,000",
    },
    {
      name: "Doris Wilder",
      position: "Sales Assistant",
      age: 23,
      office: "Sidney",
      startDate: "2010/09/20",
      salary: "$85,600",
    },
    {
      name: "Caesar Vance",
      position: "Pre-Sales Support",
      age: 21,
      office: "New York",
      startDate: "2011/12/12",
      salary: "$106,450",
    },
    {
      name: "Yuri Berry",
      position: "Chief Marketing Officer (CMO)",
      age: 40,
      office: "New York",
      startDate: "2009/06/25",
      salary: "$675,000",
    },
    {
      name: "Jenette Caldwell",
      position: "Development Lead",
      age: 30,
      office: "New York",
      startDate: "2011/09/03",
      salary: "$345,000",
    },
    {
      name: "Dai Rios",
      position: "Personnel Lead",
      age: 35,
      office: "Edinburgh",
      startDate: "2012/09/26",
      salary: "$217,500",
    },
    {
      name: "Bradley Greer",
      position: "Software Engineer",
      age: 41,
      office: "London",
      startDate: "2012/10/13",
      salary: "$132,000",
    },
    {
      name: "Gloria Little",
      position: "Systems Administrator",
      age: 59,
      office: "New York",
      startDate: "2009/04/10",
      salary: "$237,500",
    },
    {
      name: "Paul Byrd",
      position: "Chief Financial Officer (CFO)",
      age: 64,
      office: "New York",
      startDate: "2010/06/09",
      salary: "$725,000",
    },
    {
      name: "Michael Silva",
      position: "Marketing Designer",
      age: 66,
      office: "London",
      startDate: "2012/11/27",
      salary: "$198,500",
    },
    {
      name: "Tatyana Fitzpatrick",
      position: "Regional Director",
      age: 19,
      office: "London",
      startDate: "2010/03/17",
      salary: "$385,750",
    },
    {
      name: "Haley Kennedy",
      position: "Senior Marketing Designer",
      age: 43,
      office: "London",
      startDate: "2012/12/18",
      salary: "$313,500",
    },
    {
      name: "Charde Marshall",
      position: "SRegional Director",
      age: 36,
      office: "San Francisco",
      startDate: "2008/10/16",
      salary: "$470,600",
    },
    {
      name: "Quinn Flynn",
      position: "Support Lead",
      age: 22,
      office: "Edinburgh",
      startDate: "2013/03/03",
      salary: "$342,000",
    },
    {
      name: "Jena Gaines",
      position: "Office Manager",
      age: 30,
      office: "London",
      startDate: "2008/12/19",
      salary: "$90,560",
    },
    {
      name: "Sonya Frost",
      position: "Software Engineer",
      age: 23,
      office: "Edinburgh",
      startDate: "2008/12/13",
      salary: "$103,600",
    },
    {
      name: "Colleen Hurst",
      position: "Javascript Developer",
      age: 39,
      office: "San Francisco",
      startDate: "2009/09/15",
      salary: "$205,500",
    },
    {
      name: "Rhona Davidson",
      position: "Integration Specialist",
      age: 55,
      office: "Tokyo",
      startDate: "2010/10/14",
      salary: "$327,900",
    },
    {
      name: "Herrod Chandler",
      position: "Sales Assistant",
      age: 59,
      office: "San Francisco",
      startDate: "2012/08/06",
      salary: "$137,500",
    },
    {
      name: "Brielle Williamson",
      position: "Integration Specialist",
      age: 62,
      office: "New York",
      startDate: "2012/12/02",
      salary: "$372,000",
    },
    {
      name: "Airi Satou",
      position: "Accountant",
      age: 33,
      office: "Tokyo",
      startDate: "2008/11/28",
      salary: "$162,700",
    },
    {
      name: "Cedric Kelly",
      position: "Senior Javascript Developer",
      age: 22,
      office: "Edinburgh",
      startDate: "2012/03/29",
      salary: "$433,060",
    },
    {
      name: "Ashton Cox",
      position: "Junior Technical Author",
      age: 66,
      office: "San Francisco",
      startDate: "2009/01/12",
      salary: "$86,000",
    },
    {
      name: "Garrett Winters",
      position: "Accountant",
      age: 63,
      office: "Tokyo",
      startDate: "2011/07/25",
      salary: "$170,750",
    },
    {
      name: "Tiger Nixon",
      position: "System Architect",
      age: 61,
      office: "Edinburgh",
      startDate: "2011/04/25",
      salary: "$320,800",
    },
  ]
  function tog_small() {
    setmodal_small(!modal_small)
    removeBodyCss()
  }
  //meta title
  document.title = "Data Tables | Skote - React Admin & Dashboard Template"

  return (
    <div className="page-content">
      <div className="container-fluid">
        <Modal
          size="sm"
          isOpen={modal_small}
          toggle={() => {
            tog_small()
          }}
        >
          <div className="modal-header">
            <h5 className="modal-title mt-0" id="mySmallModalLabel">
              Add New Entry
            </h5>
            <button
              onClick={() => {
                setmodal_small(false)
              }}
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <h6 className="mb-4 card-title">Nested</h6>
            <Form className="outer-repeater">
              <div data-repeater-list="outer-group" className="outer">
                <div data-repeater-item className="outer">
                  <div className="mb-3">
                    <Label htmlFor="formname">Name : </Label>
                    <Input
                      type="text"
                      id="formname"
                      placeholder="Enter your Name..."
                      className="form-control"
                    />
                  </div>

                  <div className="inner-repeater mb-4"></div>

                  <div className="mb-3">
                    <Label className="d-block mb-3">Gender :</Label>
                    <div className="form-check form-check-inline">
                      <Input
                        type="radio"
                        id="customRadioInline1"
                        name="customRadioInline1"
                        className="form-check-input"
                      />
                      <Label
                        className="form-check-label"
                        htmlFor="customRadioInline1"
                      >
                        Male
                      </Label>
                    </div>
                    &nbsp;
                    <div className="form-check form-check-inline">
                      <Input
                        type="radio"
                        id="customRadioInline2"
                        name="customRadioInline1"
                        className="form-check-input"
                      />
                      <Label
                        className="form-check-label"
                        htmlFor="customRadioInline2"
                      >
                        Female
                      </Label>
                    </div>
                  </div>
                  <div className="mt-4">
                    <h5 className="font-size-14 mb-4">
                      <i className="mdi mdi-arrow-right text-primary mr-1"></i>{" "}
                      Form Checkboxes
                    </h5>
                    <div className="form-check mb-3">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="defaultCheck1"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="defaultCheck1"
                      >
                        Form Checkbox
                      </label>
                    </div>
                    <div className="form-check form-check-end mb-3">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="defaultCheck2"
                        defaultChecked
                      />
                      <label
                        className="form-check-label"
                        htmlFor="defaultCheck2"
                      >
                        Form Checkbox checked
                      </label>
                    </div>
                  </div>
                  <Row className="mb-3">
                    <label className="col-md-2 col-form-label">Select</label>
                    <div className="col-md-10">
                      <select className="form-control">
                        <option>Select</option>
                        <option>Large select</option>
                        <option>Small select</option>
                      </select>
                    </div>
                  </Row>
                  {/* <FormGroup className="mb-0">
                    <Label>Inline</Label>

                    <ColorPicker
                      saturationHeight={100}
                      saturationWidth={100}
                      value={colorCust}
                      onDrag={onDragCust}
                    />
                  </FormGroup> */}
                  <div className="d-flex flex-wrap gap-2">
                    <div>
                      <Button
                        type="button"
                        color="primary"
                        id="liveToastBtn"
                        onClick={toggleToast}
                      >
                        Add Entry
                      </Button>

                      <div
                        className="position-fixed top-0 end-0 p-3"
                        style={{ zIndex: "1005" }}
                      >
                        <Toast isOpen={toast}>
                          <ToastHeader toggle={toggleToast}>
                            Reactstrap
                          </ToastHeader>
                          <ToastBody>Entry added</ToastBody>
                        </Toast>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Form>
          </div>
        </Modal>
        <Breadcrumbs title="Tables" breadcrumbItem="Data Tables" />
        <div className="text-end">
          <button
            type="button"
            onClick={() => {
              tog_small()
            }}
            className="btn btn-success "
            data-toggle="modal"
            data-target=".bs-example-modal-sm"
          >
            Add
          </button>
        </div>
        {/* <Table columns={columns} data={data} /> */}
        <TableContainer
          columns={columns}
          data={data}
          isGlobalFilter={true}
          isAddOptions={false}
          customPageSize={10}
          className="custom-header-css"
        />
      </div>
    </div>
  )
}
DatatableTables.propTypes = {
  preGlobalFilteredRows: PropTypes.any,
}

export default DatatableTables
