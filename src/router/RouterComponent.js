import Cookies from "js-cookie";
import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ChangePassword from "../pages/auth/ChangePassword";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import DashboardIndex from "../pages/dasboard";
import AddJobVacancy from "../pages/dasboard/AddJobVacancy";
import JobVacancyIndex from "../pages/dasboard/JobVacancyIndex";
import UpdateJobVacancy from "../pages/dasboard/UpdateJobVacancy";
import Home from "../pages/home/Home";
import JobVacancy from "../pages/jobvacancy/JobVacancy";
import LayoutAuth from "../widget/LayoutAuth";
import LayoutDashboard from "../widget/LayoutDashboard";
import LayoutLanding from "../widget/LayoutLanding";
import Profile from "../pages/Profile";
import DetailJob from "../pages/home/DetailJob";

const RouterComponent = () => {

    const AuthRoute = (props) => {
        if(Cookies.get("token") === undefined){
            return props.children
        }else if(Cookies.get("token") !== undefined){
            return <Navigate to={"/"} />
        }
    }
    const DashboardRoute = (props) => {
        if(Cookies.get("token") === undefined){
            return <Navigate to={"/"} />
        }else if(Cookies.get("token") !== undefined){
            return props.children
        }
    }

    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={
                        <LayoutLanding>
                            <Home />
                        </LayoutLanding>
                    }/>
                    <Route path="/detail-job/:id" element={
                        <LayoutLanding>
                            <DetailJob />
                        </LayoutLanding>
                    }/>
                    <Route path="/job-vacancy" element={
                        <LayoutLanding>
                            <JobVacancy />
                        </LayoutLanding>
                    }/>
                    <Route path="/dashboard" element={
                        <DashboardRoute>
                            <LayoutDashboard>
                                <DashboardIndex />
                            </LayoutDashboard>
                        </DashboardRoute>
                    }/>
                    <Route path="/dashboard/list-job-vacancy" element={
                        <DashboardRoute>
                            <LayoutDashboard>
                                <JobVacancyIndex />
                            </LayoutDashboard>
                        </DashboardRoute>
                    }/>
                    <Route path="/dashboard/list-job-vacancy/create" element={
                        <DashboardRoute>
                            <LayoutDashboard>
                                <AddJobVacancy />
                            </LayoutDashboard>
                        </DashboardRoute>
                    }/>
                    <Route path="/dashboard/list-job-vacancy/form/:id" element={
                        <DashboardRoute>
                            <LayoutDashboard>
                                <UpdateJobVacancy />
                            </LayoutDashboard>
                        </DashboardRoute>
                    }/>
                    <Route path="/login" element={
                        <AuthRoute>
                            <LayoutAuth>
                                <Login />
                            </LayoutAuth>
                        </AuthRoute>
                    }/>
                    <Route path="/register" element={
                        <AuthRoute>
                            <LayoutAuth>
                                <Register />
                            </LayoutAuth>
                        </AuthRoute>
                    }/>
                    <Route path="/change-pass" element={
                        <DashboardRoute>
                            <LayoutAuth>
                                <ChangePassword />
                            </LayoutAuth>
                        </DashboardRoute>
                    }/>
                    <Route path="/profile" element={
                        <Profile />
                    }/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default RouterComponent