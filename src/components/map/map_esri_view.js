import React from 'react';
import MapView from "@arcgis/core/views/MapView";
import Map from "@arcgis/core/Map";
import "@arcgis/core/assets/esri/css/main.css"
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import Graphic from "@arcgis/core/Graphic";

class MapEsriView extends React.Component {
    constructor(props) {
        super(props);
        this.mapRef = React.createRef();
        this.state = {
            graphicsPointLayer: [],
            graphicsLineLayer: [],
            graphicsPolygonLayer: []
        }
    }

    componentDidMount() {
        // create map
        const map = new Map({
            basemap: this.props.mapParam.basemap
        });

        // load the map view at the ref's DOM node
        this.view = new MapView({
            container: this.mapRef.current,
            map: map,
            center: this.props.mapParam.center,
            zoom: this.props.zoom
        });

        this.state.graphicsPointLayer = new GraphicsLayer();
        this.state.graphicsPointLayer.visible = false;
        map.add(this.state.graphicsPointLayer);
        this.addPoint();

        this.state.graphicsLineLayer = new GraphicsLayer();
        this.state.graphicsLineLayer.visible = false;
        map.add(this.state.graphicsLineLayer);
        this.addLine();

        this.state.graphicsPolygonLayer = new GraphicsLayer();
        this.state.graphicsPolygonLayer.visible = false;
        map.add(this.state.graphicsPolygonLayer);
        this.addPolygon();
    }

    componentWillUnmount() {
        if (this.view) {
            // destroy the map view
            this.view.destroy();
        }
    }

    addPoint = () => {
        // Create a point
        let point = {
            type: "point",
            longitude: -118.80657463861,
            latitude: 34.0005930608889
        };

        let simpleMarkerSymbol = {
            type: "simple-marker",
            color: [226, 119, 40],  // orange
            outline: {
                color: [255, 255, 255], // white
                width: 1
            }
        };

        let pointGraphic = new Graphic({
            geometry: point,
            symbol: simpleMarkerSymbol
        });

        this.state.graphicsPointLayer.add(pointGraphic);
    }

    addLine = () => {
        // Create a line geometry
        let simpleLineSymbol = {
            type: "simple-line",
            color: [226, 119, 40], // orange
            width: 2
        };

        let polyline = {
            type: "polyline",
            paths: [
                [-118.821527826096, 34.0139576938577],
                [-118.814893761649, 34.0080602407843],
                [-118.808878330345, 34.0016642996246]
            ]
        };

        let polylineGraphic = new Graphic({
            geometry: polyline,
            symbol: simpleLineSymbol
        })

        this.state.graphicsLineLayer.add(polylineGraphic);
    }

    addPolygon = () => {
        // Create a polygon geometry
        let polygon = {
            type: "polygon",
            rings: [
                [-118.818984489994, 34.0137559967283],
                [-118.806796597377, 34.0215816298725],
                [-118.791432890735, 34.0163883241613],
                [-118.79596686535, 34.008564864635],
                [-118.808558110679, 34.0035027131376]
            ]
        };

        let simpleFillSymbol = {
            type: "simple-fill",
            color: [227, 139, 79, 0.8],  // orange, opacity 80%
            outline: {
                color: [255, 255, 255],
                width: 1
            }
        };

        let polygonGraphic = new Graphic({
            geometry: polygon,
            symbol: simpleFillSymbol
        });

        this.state.graphicsPolygonLayer.add(polygonGraphic)
    }

    setVisibilityLayerPoint = (v) => {
        this.state.graphicsPointLayer.visible = v;
    }
    setVisibilityLayerLine = (v) => {
        this.state.graphicsLineLayer.visible = v;
    }
    setVisibilityLayerPolygon = (v) => {
        this.state.graphicsPolygonLayer.visible = v;
    }

    render() {
        return (
            <div className="webmap" ref={this.mapRef} style={{width: '100%', height: '100%'}}/>
        );
    }
}

export default MapEsriView