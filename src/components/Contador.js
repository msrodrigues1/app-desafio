import React from 'react';
import Button from '@material-ui/core/Button';
import '../App.css';

export default class Contador extends React.Component {
    render() {
        let btn1;
        let btn2;

        if (this.props.qtd > 1) {
            btn1 = <Button onClick={this.props.onClickDecremento}>-</Button>
        } else {
            btn1 = <Button disabled onClick={this.props.onClickDecremento}>-</Button>
        }


        if ( this.props.qtd < 10) {
            btn2 = <Button onClick={this.props.onClickIncremento}>+</Button>
        } else {
            btn2 = <Button disabled onClick={this.props.onClickIncremento}>+</Button>
        }

        return (
            <div>
                <div>
                    {btn1}
                    <h1 className="contador">{this.props.qtd}</h1>
                    {btn2}
                </div>
            </div>
        );
    }
}