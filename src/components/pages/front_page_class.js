import * as React from 'react';
import {Box, Button, Grid} from "@mui/material";
import MapEsriView from "../map/map_esri_view";

class FrontPageClass extends React.Component {
    constructor(props) {
        super(props);
        this.mapRef = React.createRef()
        this.zoom = 13
        this.mapParam = {
            basemap: "topo-vector",
            center: [-118.80500,34.02700],
            zoom: 20
        }
    }

    onClickUpdateBasemap = () => {
        let a = this.mapParam;
        a.basemap = "topo-vector"
        a.zoom = 3
        this.setState({
            mapParam: a,
            zoom: 3
        })

        console.log("update")
    }

    render() {
        return (
            <Grid container spacing={1} style={{height: "100%"}}>
                <Grid item xs={3}>
                    <Button variant="contained" onClick={this.onClickUpdateBasemap}>Update Basemap</Button>
                </Grid>
                <Grid item xs={9} style={{backgroundColor: "red"}}>
                    <Box style={{width: '100%', height: '100%'}}>
                        <MapEsriView mapParam={this.mapParam} zoom={this.zoom}/>
                    </Box>
                </Grid>
            </Grid>
        );
    }
};

export default FrontPageClass;