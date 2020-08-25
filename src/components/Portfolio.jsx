import React, { PureComponent } from "react";
import Heading from "../elements/Heading";
import PortfolioItem from "../elements/PortfolioItem";
import items from "../content/portfolio-items.js";

export default class Portfolio extends PureComponent {
    render(){

        const portItems = items.map(item => {
            return (
                <PortfolioItem
                    key={item.id}
                    class={item.id}
                    project={item.project}
                    name={item.name}
                    url={item.url}
                    github={item.github ? item.github : ""}
                    role={item.role}
                    desc={item.desc}
                    year={item.year}
                />
            )
        });

        return (
            <div className="component-wrap portfolio">
                <Heading title="Portfolio"/>
                <p className="visible-xs slideInLeft">Tap For Details</p>
                {portItems}
            </div>
        )
    }
}
