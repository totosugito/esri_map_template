import * as React from 'react';
import {Box, Button, Grid} from "@mui/material";
import MapEsriView from "../map/map_esri_view";

class FrontPageClass extends React.Component {
    constructor(props) {
        super(props);
        this.mapEsriViewRef = React.createRef()
        this.state ={
            zoom: 13,
            mapParam: {
                basemap: "topo-vector",
                center: [-118.80500,34.02700],
                zoom: 20
            },
            showLayerPoint: false,
            showLayerLine: false,
            showLayerPolygon: false,
        }

    }

    onClickVisibilityLayerPoint = () => {
        this.mapEsriViewRef.current.setVisibilityLayerPoint(!this.state.showLayerPoint);
        this.setState({
            showLayerPoint: !this.state.showLayerPoint
        })
    }
    onClickVisibilityLayerLine = () => {
        this.mapEsriViewRef.current.setVisibilityLayerLine(!this.state.showLayerLine);
        this.setState({
            showLayerLine: !this.state.showLayerLine
        })
    }
    onClickVisibilityLayerPolygon = () => {
        this.mapEsriViewRef.current.setVisibilityLayerPolygon(!this.state.showLayerPolygon);
        this.setState({
            showLayerPolygon: !this.state.showLayerPolygon
        })
    }
    render() {
        return (
            <Grid container spacing={1} style={{height: "100%"}}>
                    <Grid item xs={3}
                        container
                        direction="column"
                        alignItems="center"
                    >
                    <Button variant="contained" onClick={this.onClickVisibilityLayerPoint} sx={{mb: 2}}>{this.state.showLayerPoint ? "Hide":"Show"} Point</Button>
                    <Button variant="contained" onClick={this.onClickVisibilityLayerLine} sx={{mb: 2}}>{this.state.showLayerLine ? "Hide":"Show"} Line</Button>
                    <Button variant="contained" onClick={this.onClickVisibilityLayerPolygon} sx={{mb: 2}}>{this.state.showLayerPolygon ? "Hide":"Show"} Polygon</Button>
                </Grid>
                <Grid item xs={9} style={{}}>
                    <Box style={{width: '100%', height: '100%'}}>
                        <MapEsriView mapParam={this.state.mapParam} zoom={this.state.zoom} ref={this.mapEsriViewRef}/>
                    </Box>
                </Grid>
            </Grid>
        );
    }
}

export default FrontPageClass;