import Principal from "views/Principal/Principal.jsx";

import pagesRoutes from "./pages.jsx";

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
        component: Principal
      }
    ]
  },
  { redirect: true, path: "/", pathTo: "/reportes/principal", name: "Principal" }
];
export default repRoutes;
