import { Component, FC } from "react";
import { RouteProps } from "react-router-dom";

export interface IRouteConfig extends RouteProps {
   
    routes?:RouteProps[]
}