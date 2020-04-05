import { RouteComponentProps } from 'react-router-dom';
import { Component, FC } from "react";
import { RouteProps } from "react-router-dom";

export interface IRouteConfig extends RouteProps {
   
    routes?:RouteProps[]
}

export interface IAppProps extends RouteComponentProps {
    
}

export interface ILoadingProps {
    inverted:boolean
}