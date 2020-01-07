import React from 'react';
import ReactDOM from 'react-dom';
import {Slider} from './Slider';

class App extends React.Component {

    state = {
        price: {min: 0, max: 999, visible: false},
        some: 'whatever'
    };

    change = e => {
        const field = e.target.name;
        const oldPrice = this.state.price;

        if (field.indexOf('min') !== -1) {
            const price = {min: Number.parseInt(e.target.value), max: oldPrice.max, visible: true}
            this.setState({price: price})
        } else this.setState({price: {min: oldPrice.min, max: Number.parseInt(e.target.value), visible: true}})
    };

    slideChange = e => {
        this.setState({
            price: {min: e[0], max: e[1], visible: true},
        })
    };

    render() {
        const visibleMin = this.state.price.min.visible;
        return (<div>
            <h1>Price MIN</h1>
            <input type='number' value={this.state.price.min} onChange={this.change} name='min-1'/>
            <input type='number' value={this.state.price.min} onChange={this.change} name='min-2'/>
            <h2 style={{display: visibleMin}}>{this.state.price.min}</h2>
            <h1>Price Max</h1>
            <input type='number' value={this.state.price.max} onChange={this.change} name='max-1'/>
            <input type='number' value={this.state.price.max} onChange={this.change} name='max-2'/>
            <h2>{this.state.price.max}</h2>
            <Slider min={this.state.price.min} max={this.state.price.max} handler={this.slideChange}/>
        </div>)
    }
}

ReactDOM.render(<App/>, document.getElementById('react'));
