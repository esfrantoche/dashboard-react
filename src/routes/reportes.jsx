import Principal from "views/Principal/Principal.jsx";
import Secundario from "views/Principal/Secundario.jsx";

var repRoutes = [
  {
    collapse: true,
    path: "/reportes",
    name: "Reportes",
    state: "openDashboard",
    icon: "files_single-copy-04",
    views: [
      {
        path: "/reportes/principal",
        name: "Principal",
        mini: "PL",
        component: Principal
      },
      {
        path: "/reportes/secundario",
        name: "Secundario",
        mini: "SD",
        component: Secundario
      }
    ]
  },
  { redirect: true, path: "/", pathTo: "/reportes/principal", name: "Principal" }
];
export default repRoutes;
