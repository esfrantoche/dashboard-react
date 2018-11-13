import React, { Component } from "react";
// react component for creating dynamic tables
import ReactTable from "react-table";
import { Card, CardBody, CardHeader, CardTitle, CardFooter, Col, Row } from "reactstrap";
import { Bar } from "react-chartjs-2";
import Moment from 'react-moment';

import { PanelHeader, CardCategory } from "components";

import {
  chartsPrincipal1,
  chartsPrincipal2
} from "variables/reportes";

const dataTable = [
  ["Aguilares", "00:04:02", "00:04:02", "00:00:00", "00:08:04", "00:03:17", "00:24:54", "00:28:10", "26-Jun", "1:05", "3:59"],
  ["Ahuachapan", "00:02:00", "00:02:00", "00:00:09", "00:04:09", "00:00:00", "00:15:38", "00:15:38", "22-Jun", "8:45", "11:36"],
  ["Alameda Roosevelt", "00:15:32", "00:15:32", "00:00:01", "00:31:05", "00:01:02", "00:26:54", "00:27:56", "11-Jun", "9:09", "12:36"],
  ["Apopa", "00:07:14", "00:07:14", "00:00:00", "00:14:28", "00:08:04", "00:12:26", "00:20:30", "4-Jun", "12:49", "3:56"],
  ["Bernal", "00:04:02", "00:04:02", "00:01:57", "00:10:01", "00:00:00", "00:14:51", "00:14:51", "7-Jun", "1:30", "4:03"],
  ["Calavarena", "00:02:00", "00:02:00", "00:00:00", "00:04:00", "00:00:18", "00:20:10", "00:20:27", "25-Jun", "9:09", "12:10"],
  ["Centroamerica", "00:15:32", "00:15:32", "00:00:00", "00:31:04", "00:07:06", "00:21:11", "00:28:17", "19-Jun", "1:03", "3:58"],
  ["Chalatenango", "00:07:14", "00:07:14", "00:00:00", "00:14:28", "00:01:20", "00:23:33", "00:24:53", "12-Jun", "8:33", "11:47"],
  ["Ciudad Barrios", "00:04:02", "00:04:02", "00:00:03", "00:08:07", "00:00:00", "00:10:04", "00:10:04", "27-Jun", "8:30", "11:34"],
  ["Cojutepeque", "00:02:00", "00:02:00", "00:00:02", "00:04:02", "00:00:00", "00:02:00", "00:02:00", "25-Jun", "8:30", "12:05"],
  //["", "", "", "", "", "", "", "", "", "", ""],
  ["Diagonal Universitaria", "00:15:32", "00:15:32", "00:00:01", "00:31:05", "00:00:00", "00:15:32", "00:15:32", "18-Jun", "1:05", "4:01"]
];


class Principal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: dataTable.map((prop, key) => {
        return {
          id: key,
          sucursal: prop[0],
          tpc_caja: prop[1],
          tpa_caja: prop[2],
          tpru_caja: prop[3],
          tpt_caja: prop[4],
          tpc_plat: prop[5],
          tpa_plat: prop[6],
          tpt_plat: prop[7],
          fecha_med: prop[8],
          hri_med: prop[9],
          hrf_med: prop[10]
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
              <h2 className="title">Tiempos Sucursales Seleccionadas Junio 2018</h2>
              <p className="category">
                Filtro por mes
              </p>
            </div>
          }
        />
        <div className="content">
          <Row>
            <Col xs={12} md={6} className="ml-auto">
              <Card className="card-chart">
                <CardHeader>
                  <CardCategory>Tiempos de caja en sucursales no BMATIC</CardCategory>
                  <CardTitle tag="h4">OPERACIONES DE CAJA</CardTitle>
                </CardHeader>
                <CardBody>
                  <div >
                    <Bar data={chartsPrincipal1.data} options={chartsPrincipal1.options} plugins={chartsPrincipal1.plugins}/>
                  </div>
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
                  <CardCategory>Tiempos en sucursales no BMATIC</CardCategory>
                  <CardTitle tag="h4">PLATAFORMA</CardTitle>
                </CardHeader>
                <CardBody>
                <div >
                  <Bar data={chartsPrincipal2.data} options={chartsPrincipal2.options} plugins={chartsPrincipal2.plugins}/>
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
                  <CardTitle tag="h4">Tabla resumen de tercero</CardTitle>
                </CardHeader>
                <CardBody>
                  <ReactTable
                    data={this.state.data}
                    filterable
                    columns={[
                      {
                        Header: "Sucursal",
                        columns: [
                          {
                            accessor: "sucursal"
                          }
                        ]
                      },
                      {
                        Header: "CAJA",
                        columns: [
                          {
                            Header: "Tiempo promedio en cola",
                            accessor: "tpc_caja"
                          },
                          {
                            Header: "Tiempo primedio de atencion",
                            accessor: "tpa_caja"
                          },
                          {
                            Header: "Tiempo promedio de registro usuario",
                            accessor: "tpru_caja"
                          },
                          {
                            Header: "Total promedio total en suc",
                            accessor: "tpt_caja",
                            sortable: false,
                            filterable: false
                          }
                        ]
                      },
                      {
                        Header: "PLATAFORMA",
                        columns: [
                          {
                            Header: "Tiempo promedio en cola",
                            accessor: "tpc_plat"
                          },
                          {
                            Header: "Tiempo promedio de atencion",
                            accessor: "tpa_plat"
                          },
                          {
                            Header: "Tiempo promedio total en suc",
                            accessor: "tpt_plat"
                          }
                        ],
                        className: "center"
                      },
                      {
                        Header: "DETALLE MEDICION",
                        columns: [
                          {
                            Header: "Fecha en que se realizo la medicion",
                            accessor: "fecha_med"
                          },
                          {
                            Header: "Hora de inicio de la medicion",
                            accessor: "hri_med"
                          },
                          {
                            Header: "Hora de finalizacion de la medicion",
                            accessor: "hrf_med"
                          }
                        ],
                        className: "center"
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
          </Row>
        </div>
      </div>
    );
  }
}

export default Principal;
