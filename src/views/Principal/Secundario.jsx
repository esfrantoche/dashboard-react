import React, { Component } from "react";
// react component for creating dynamic tables
import ReactTable from "react-table";
import { Card, CardBody, CardHeader, CardTitle, CardFooter, Col, Row, Table } from "reactstrap";
import { Bar } from "react-chartjs-2";
//import Moment from 'react-moment';

import { PanelHeader, CardCategory } from "components";

import {
  chartsPrincipal3
} from "variables/reportes";

const dataTable = [
  ["Cojutepeque", "25-Jun", "8:35", "Persona Natural", "00:16:18", "0", "colecturia en linea", "00:05:56", "c", "0:00:00", "00:00:00", "0:22:14", "8:57", "5", "6", "Pago cheque"],
  ["Cojutepeque", "25-Jun", "8:16", "Persona Natural", "00:16:36", "0", "retiro ahorro ", "00:02:13", "c", "0:00:00", "00:00:00", "0:18:49", "8:34", "6", "4", ""],
  ["Cojutepeque", "25-Jun", "8:37", "Persona Natural", "00:20:04", "0", "retiro ahorro", "00:02:17", "c", "0:00:00", "00:00:00", "0:22:21", "8:59", "7", "4", ""],
  ["Cojutepeque", "25-Jun", "8:39", "Empresa", "00:19:50", "0", "deposito manual", "00:02:13", "ue", "0:00:04", "00:00:00", "0:22:07", "9:01", "8", "1", ""],
  ["Cojutepeque", "25-Jun", "8:41", "Empresa", "00:19:52", "0", "remesa cuenta corriente", "00:03:57", "c", "0:00:00", "00:00:00", "0:23:49", "9:04", "9", "3", ""],
  ["Cojutepeque", "25-Jun", "8:42", "Persona Natural", "00:19:40", "0", "retiro ahorro", "00:02:15", "c", "0:00:00", "00:00:00", "0:21:55", "9:03", "10", "1", ""],
  ["Cojutepeque", "25-Jun", "8:45", "Persona Natural", "00:22:40", "0", "retiro ahorro", "00:02:55", "c", "0:00:00", "00:00:00", "0:25:35", "9:10", "9", "3", ""],
  ["Cojutepeque", "25-Jun", "8:48", "Persona Natural", "00:23:12", "0", "retiro ahorro", "00:02:57", "c", "0:00:00", "00:00:00", "0:26:09", "9:14", "8", "3", ""],
  ["Cojutepeque", "25-Jun", "8:52", "Persona Natural", "00:22:16", "0", "remesa familiar", "00:02:13", "c", "0:00:00", "00:00:00", "0:24:42", "9:16", "9", "3", ""],
  ["Cojutepeque", "25-Jun", "8:55", "Persona Natural", "00:21:10", "0", "abono tc", "00:02:53", "c", "0:00:00", "00:00:00", "0:24:23", "9:19", "7", "3", ""],
  //["", "", "", "", "", "", "", "", "", "", ""],
  ["Cojutepeque", "25-Jun", "8:58", "Persona Natural", "00:22:26", "0", "remesa familiar", "00:01:52", "c", "0:00:00", "00:00:00", "0:24:08", "9:22", "5", "3", ""]
];

const dataTableSummary = [
  ["CAJAS", "00:15:00", "00:19:00", "00:00:00", "00:19:20"],
  ["", "00:00:00", "00:00:03", "00:00:00", "00:00:02"],
  ["", "00:02:02", "00:04:46", "00:00:00", "00:06:47"],
  ["PLATAFORMA", "00:12:40", "00:48:10", "-", "00:48:10"],
  ["", "00:00:00", "00:15:20", "-", "00:15:20"],
  ["", "00:03:17", "00:24:54", "-", "00:28:10"]
];

const dataTablePlatMeasure = [
  ["Cojutepeque", "25-Jun", "9:30", "Persona Natural", "0:00:00", "0", "Actualizacion de datos", "0:15:21", "0:00:00", "0:15:21", "9:45", "", "2", ""],
  ["Cojutepeque", "25-Jun", "9:40", "Persona Natural", "0:00:00", "0", "Tarjeta de debito", "0:18:40", "0:00:00", "0:18:40", "9:58", "", "2", "Reposicion de tarjeta"],
  ["Cojutepeque", "25-Jun", "10:05", "Persona Natural", "0:00:00", "0", "Actualizacion de datos", "0:20:19", "0:00:00", "0:20:19", "10:25", "", "1", "CDE"],
  ["Cojutepeque", "25-Jun", "11:03", "Persona Natural", "0:00:00", "0", "Apertura de cuenta", "0:30:20", "0:00:00", "0:30:20", "11:33", "", "2", "Seguro de vida"]
];


class Secundario extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: dataTable.map((prop, key) => {
        return {
          id: key,
          sucursal: prop[0],
          fecha: prop[1],
          hora_arribo: prop[2],
          tipo_cliente: prop[3],
          total_cola: prop[4],
          cliente_fugado: prop[5],
          operacion: prop[6],
          tiempo_tot_tran: prop[7],
          cl_n_e: prop[8],
          tiempo_reg_us: prop[9],
          tiempo_ent_doc: prop[10],
          tiempo_ciclo: prop[11],
          hora_salida: prop[12],
          cant_cl_cola: prop[13],
          caja_atend: prop[14],
          observacion: prop[15]
        };
      }),
      dataSummary: dataTablePlatMeasure.map((prop, key) => {
        return {
          id: key,
          sucursal: prop[0],
          fecha: prop[1],
          hora_arribo: prop[2],
          tipo_cliente: prop[3],
          t_tot_cola: prop[4],
          cl_fugado: prop[5],
          operacion: prop[6],
          t_tot_trans: prop[7],
          t_ent_doc: prop[8],
          t_ciclo: prop[9],
          hora_salida: prop[10],
          cant_cl_cola: prop[11],
          esc_atend: prop[12],
          observacion: prop[13]
        };
      })
    };
  }
  render() {
    return (
      <div className="content">
        <PanelHeader
          content={
            <div className="header text-center">
              <h2 className="title">ANALISIS DE TIEMPOS SUCURSAL</h2>
              <p className="category">
                Cojutepeque
              </p>
            </div>
          }
        />
        <div className="content">
          <Row>
          <Col xs={12} md={6} className="ml-auto">
            <Card className="card-chart">
              <CardHeader>
                <CardCategory>Tabla Resumen</CardCategory>
                <CardTitle tag="h4">OPERACIONES DE CAJA Y PLATAFORMA</CardTitle>
              </CardHeader>
              <CardBody>
                <Table responsive>
                  <thead>
                    <th></th>
                    <th>Cola</th>
                    <th>transaccion</th>
                    <th>Registro</th>
                    <th>Ciclo</th>
                  </thead>
                  <tbody>
                    {dataTableSummary.map((prop, key) => {
                      if (key===0 || key === 3)
                        return [
                          <tr>
                            <th rowspan={3}>{prop[0]}</th>
                            <td>{prop[1]}</td>
                            <td>{prop[2]}</td>
                            <td>{prop[3]}</td>
                            <td>{prop[4]}</td>
                          </tr>
                        ]
                      else
                        return [
                          <tr>
                            <td>{prop[1]}</td>
                            <td>{prop[2]}</td>
                            <td>{prop[3]}</td>
                            <td>{prop[4]}</td>
                          </tr>
                        ]
                    })}
                  </tbody>
                </Table>
              </CardBody>
              <CardFooter>
              </CardFooter>
            </Card>
            <Card className="card-chart">
            </Card>
          </Col>
            <Col xs={12} md={6} className="ml-auto">
              <Card className="card-chart">
                <CardHeader>
                  <CardCategory>Grafico Resumen</CardCategory>
                  <CardTitle tag="h4">Ahuachapan</CardTitle>
                </CardHeader>
                <CardBody>
                  <div >
                    <Bar data={chartsPrincipal3.data} options={chartsPrincipal3.options} plugins={chartsPrincipal3.plugins}/>
                  </div>
                </CardBody>
                <CardFooter>
                </CardFooter>
              </Card>
              <Card className="card-chart">
              </Card>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={12}>
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Tabla operaciones de caja</CardTitle>
                </CardHeader>
                <CardBody>
                  <ReactTable
                    data={this.state.data}
                    filterable
                    columns={[
                      {
                        Header: "Sucursal",
                        accessor: "sucursal",
                        filterable: false
                      },
                      {
                        Header: "Fecha",
                        accessor: "fecha",
                        filterable: false
                      },
                      {
                        Header: "Hora de arribo",
                        accessor: "hora_arribo",
                        filterable: false
                      },
                      {
                        Header: "Tipo de Cliente",
                        accessor: "tipo_cliente",
                        filterable: false
                      },
                      {
                        Header: "T total cola",
                        accessor: "total_cola",
                        filterable: false
                      },
                      {
                        Header: "Cliente fugado",
                        accessor: "cliente_fugado",
                        filterable: false
                      },
                      {
                        Header: "Operacion",
                        accessor: "operacion",
                        filterable: false
                      },
                      {
                        Header: "Tiempo total de transaccion",
                        accessor: "tiempo_tot_tran",
                        filterable: false
                      },
                      {
                        Header: "C-Cliente, UN-Usuario nuevo, UE-Usuario excelente",
                        accessor: "cl_n_e",
                        filterable: false
                      },
                      {
                        Header: "Tiempo para completar registro de usuario",
                        accessor: "tiempo_reg_us",
                        filterable: false
                      },
                      {
                        Header: "Tiempo de entrega sol.document",
                        accessor: "tiempo_ent_doc",
                        filterable: false
                      },
                      {
                        Header: "Tiempo de ciclo",
                        accessor: "tiempo_ciclo",
                        filterable: false
                      },
                      {
                        Header: "Hora de salida",
                        accessor: "hora_salida",
                        filterable: false
                      },
                      {
                        Header: "Cantidad de clientes en cola",
                        accessor: "cant_cl_cola",
                        filterable: false
                      },
                      {
                        Header: "Caja que atendio",
                        accessor: "caja_atend",
                        filterable: false
                      },
                      {
                        Header: "Observacion",
                        accessor: "observacion",
                        filterable: false
                      }
                    ]}
                    defaultPageSize={10}
                    showPaginationTop={false}
                    showPaginationBottom
                    className="-striped -highlight"
                  />
                </CardBody>
              </Card>
            </Col>
            <Col xs={12} md={12}>
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Tabla operaciones de caja</CardTitle>
                </CardHeader>
                <CardBody>
                  <ReactTable
                    data={this.state.dataSummary}
                    filterable
                    columns={[
                      {
                        Header: "Sucursal",
                        accessor: "sucursal",
                        filterable: false
                      },
                      {
                        Header: "Fecha",
                        accessor: "fecha",
                        filterable: false
                      },
                      {
                        Header: "Hora de arribo",
                        accessor: "hora_arribo",
                        filterable: false
                      },
                      {
                        Header: "Tipo de Cliente",
                        accessor: "tipo_cliente",
                        filterable: false
                      },
                      {
                        Header: "T total cola",
                        accessor: "t_tot_cola",
                        filterable: false
                      },
                      {
                        Header: "Cliente fugado",
                        accessor: "cl_fugado",
                        filterable: false
                      },
                      {
                        Header: "Operacion",
                        accessor: "operacion",
                        filterable: false
                      },
                      {
                        Header: "Tiempo total de transaccion",
                        accessor: "t_tot_trans",
                        filterable: false
                      },
                      {
                        Header: "C-Cliente, UN-Usuario nuevo, UE-Usuario excelente",
                        accessor: "t_ent_doc",
                        filterable: false
                      },
                      {
                        Header: "Tiempo para completar registro de usuario",
                        accessor: "t_ciclo",
                        filterable: false
                      },
                      {
                        Header: "Tiempo de entrega sol.document",
                        accessor: "hora_salida",
                        filterable: false
                      },
                      {
                        Header: "Tiempo de ciclo",
                        accessor: "cant_cl_cola",
                        filterable: false
                      },
                      {
                        Header: "Hora de salida",
                        accessor: "esc_atend",
                        filterable: false
                      },
                      {
                        Header: "Cantidad de clientes en cola",
                        accessor: "observacion",
                        filterable: false
                      }
                    ]}
                    defaultPageSize={5}
                    showPaginationTop={false}
                    showPaginationBottom
                    className="-striped -highlight"
                  />
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Secundario;
