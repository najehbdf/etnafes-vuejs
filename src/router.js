import DashboardLayout from "@/pages/Layout/DashboardLayout.vue";
import Home from "@/pages/Home.vue";
import ResultatsRecherche from "@/pages/ResultatsRecherche.vue";
import DetailsPack from '@/pages/DetailsPack.vue'
import PaiementLigne from '@/pages/PaiementLigne.vue'
import PaiementAgence from '@/pages/PaiementAgence.vue'
import Dashboard from "@/pages/Dashboard.vue";
import Icons from "@/pages/Icons.vue";
import Maps from "@/pages/Maps.vue";
import Notifications from "@/pages/Notifications.vue";
import UserProfile from "@/pages/UserProfile.vue";
import TableList from "@/pages/TableList.vue";
import Typography from "@/pages/Typography.vue";
import UpgradeToPRO from "@/pages/UpgradeToPRO.vue";


const routes = [

  {
    path: "/",
    name: "Home",
    component: Home
  },

  {
    path: '/resultats',
    // path: '/resultats?du={du}&au={au}&type={type}&ville_id={ville_id}',

    name: 'ResultatsRecherche',
    component: ResultatsRecherche
  },

  {
    path: '/detailspack/:id',
    name: 'DetailsPack',
    component: DetailsPack
  },

  {
    path: '/paiement/:id',
    name: 'PaiementPack',
    component: PaiementLigne
  },

  {
    path: '/agence/:id',
    name: 'PaiementAgence',
    component: PaiementAgence
  },

  {
    path: "/",
    component: DashboardLayout,
    redirect: "dashboard",

    children: [{
        path: "dashboard",
        name: "Dashboard",
        component: Dashboard
      },


      {
        path: "icons",
        name: "Icons",
        component: Icons
      },
      {
        path: "maps",
        name: "Maps",
        component: Maps
      },
      {
        path: "notifications",
        name: "Notifications",
        component: Notifications
      },
      {
        path: "user",
        name: "User Profile",
        component: UserProfile
      },
      {
        path: "table",
        name: "Table List",
        component: TableList
      },
      {
        path: "typography",
        name: "Typography",
        component: Typography
      }
    ]

  }
];

export default routes;