import Vue from "vue";
import Router from "vue-router";

const Login = () => import('@/pages/login')
const Dashboard = () => import('@/pages/dashboard')
const WorkflowHome = () => import('@/pages/workflow/home')
const WorkflowEdit = () => import('@/pages/workflow/edit')
const StatisticsHome = () => import('@/pages/workflow/statistics')
const LogsHome = () => import('@/pages/logs/home')
const AppHome = () => import('@/pages/app/home')
const ClassificationHome = () => import('@/pages/classification/home')
const VariablenHome = () => import('@/pages/variable/home')
const UserHome = () => import('@/pages/user/home')
const SystemHome = () => import('@/pages/system/home')
const ReportHome = () => import('@/pages/report/home')
const TimerHome = () => import('@/pages/timer/home')


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Login",
      component: Login,
      meta: {requireAuth: false}
    },
    {
      path: "/dashboard",
      name: "Dashboard",
      component: Dashboard,
      meta: {requireAuth: true}
    },
    {
      path: "/workflow",
      name: "WorkflowHome",
      component: WorkflowHome,
      meta: {requireAuth: true}
    },
    {
      path: "/workflow/edit/:uuid",
      name: "WorkflowEdit",
      component: WorkflowEdit,
      meta: {requireAuth: true}
    },
    {
      path: "/workflow/statistics/:uuid",
      name: "StatisticsHome",
      component: StatisticsHome,
      meta: {requireAuth: true}
    },
    {
      path: "/logs",
      name: "LogsHome",
      component: LogsHome,
      meta: {requireAuth: true}
    },
    {
      path: "/app",
      name: "AppHome",
      component: AppHome,
      meta: {requireAuth: true}
    },
    {
      path: "/classification",
      name: "ClassificationHome",
      component: ClassificationHome,
      meta: {requireAuth: true}
    },
    {
      path: "/variablen",
      name: "VariablenHome",
      component: VariablenHome,
      meta: {requireAuth: true}
    },
    {
      path: "/user",
      name: "UserHome",
      component: UserHome,
      meta: {requireAuth: true}
    },
    {
      path: "/system",
      name: "SystemHome",
      component: SystemHome,
      meta: {requireAuth: true}
    },
    {
      path: "/report",
      name: "ReportHome",
      component: ReportHome,
      meta: {requireAuth: true}
    },
    {
      path: "/timer",
      name: "TimerHome",
      component: TimerHome,
      meta: {requireAuth: true}
    }
  ]
});
