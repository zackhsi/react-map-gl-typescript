import * as React from 'react';
import ReactMapGL from 'react-map-gl';

const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_TOKEN || '';
const initialState = {
    viewport: {
        height: 400,
        latitude: 37.7577,
        longitude: -122.4376,
        width: 400,
        zoom: 8,
    },
};
type State = typeof initialState;
type Viewport = typeof initialState.viewport;

export default class Map extends React.Component<object, State> {
    public state: State = initialState;

    public onViewportChange = (viewport: Viewport) => {
        this.setState(prevState => ({
            viewport: { ...prevState.viewport, ...viewport },
        }));
    };

    public render() {
        const { viewport } = this.state;
        return (
            <ReactMapGL
                {...viewport}
                mapboxApiAccessToken={MAPBOX_TOKEN}
                onViewportChange={(v: Viewport) => this.onViewportChange(v)}
            />
        );
    }
}
