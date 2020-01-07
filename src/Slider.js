import React from 'react';
import {Slider, Rail, Handles, Tracks} from 'react-compound-slider';

const MySlider = props => {
    return (<div style={{marginTop: '30px'}}>
        <Slider rootStyle={sliderStyle}
                domain={[0, 1000]}
                step={1}
                mode={2}
                onChange={props.handler}
                values={[props.min, props.max] /* three values = three handles */}>

            <Rail>
                {({getRailProps}) => (
                    <div style={railStyle} {...getRailProps()} />
                )}
            </Rail>
            <Handles>
                {({handles, getHandleProps}) => (
                    <div className="slider-handles">
                        {handles.map(handle => (
                            <Handle
                                key={handle.id}
                                handle={handle}
                                getHandleProps={getHandleProps}
                            />
                        ))}
                    </div>
                )}
            </Handles>
            <Tracks right={false}>
                {({tracks, getTrackProps}) => (
                    <div className="slider-tracks">
                        {tracks.map(({id, source, target}) => (
                            <Track
                                key={id}
                                source={source}
                                target={target}
                                getTrackProps={getTrackProps}
                            />
                        ))}
                    </div>
                )}
            </Tracks>
        </Slider>
    </div>)
};

export {MySlider as Slider};

const sliderStyle = {  // Give the slider some width
    position: 'relative',
    width: '100%',
    height: 80,
    border: '1px solid steelblue',
}

const railStyle = {

    position: 'absolute',
    width: '100%',
    height: 10,
    marginTop: 35,
    borderRadius: 5,
    backgroundColor: '#8B9CB6',
}

export function Handle({
                           handle: {id, value, percent},
                           getHandleProps
                       }) {
    return (
        <div
            style={{
                left: `${percent}%`,
                position: 'absolute',
                marginLeft: -15,
                marginTop: 25,
                zIndex: 2,
                width: 30,
                height: 30,
                border: 0,
                textAlign: 'center',
                cursor: 'pointer',
                borderRadius: '50%',
                backgroundColor: '#2C4870',
                color: '#333',
            }}
            {...getHandleProps(id)}
        >
            <div style={{fontFamily: 'Roboto', fontSize: 11, marginTop: -35}}>
                {value}
            </div>
        </div>
    )
}

function Track({source, target, getTrackProps}) {
    return (
        <div
            style={{
                position: 'absolute',
                height: 10,
                zIndex: 1,
                marginTop: 35,
                backgroundColor: '#546C91',
                borderRadius: 5,
                cursor: 'pointer',
                left: `${source.percent}%`,
                width: `${target.percent - source.percent}%`,
            }}
            {...getTrackProps() /* this will set up events if you want it to be clickeable (optional) */}
        />
    )
}
