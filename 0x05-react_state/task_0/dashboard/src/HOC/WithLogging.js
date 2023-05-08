import { Component } from "react";
import React, {Component} from "react";

const WithLogging = () =>{

    const getDisplayName = (WrappedComponent) => WrappedComponent.displayName || WrappedComponent.name || "Component";

    WithLogging.displayName = `WithLogging(${getDisplayName(WrappedComponent)})`;


    return class extends Component{
        componentDidMount() {
            console.log("Component NAME_OF_THE_WRAPPED_COMPONENT is mounted")
        }
        
        componentWillUnmount() {
            console.log("Component NAME_OF_THE_WRAPPED_COMPONENT is going to unmount")
        }

        render() {
            return(<wrappedComponent {...this.props} />)
        }
    }

}