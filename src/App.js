import React from 'react';
import {Grid, Typography, Container} from "@material-ui/core";
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
let marked = require("marked");


export default class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            markdown: "",
        };
    }
    updateMarkdown(markdown) {
        this.setState({ markdown });
    }

  render(){
    return (
        <Container>
            <Grid container justify={"center"} style={{marginTop: "2em"}}>
                <Grid item >
                    <Typography variant={"h2"}>MarkDown Previewer!</Typography>
                </Grid>
            </Grid>
            <Grid container justify={"center"} style={{marginTop: "3em", textAlign: "center"}}>
                <Grid item xs={6}>
                    <Typography variant={"h5"}>Markdown input</Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography variant={"h5"}>HTML output</Typography>
                </Grid>
            </Grid>
            <Grid container style={{marginTop: "2em", textAlign: "center"}}>
                <Grid item xs={6}>
                    <TextareaAutosize value={this.state.markdown} onChange={(e) => {this.updateMarkdown(e.target.value);}} aria-label="empty textarea" placeholder="Input" rows={15} />
                </Grid>
                <Grid item xs={6} style={{backgroundColor: "#394F8A", color: "white"}}>
                    <div dangerouslySetInnerHTML={{ __html: marked(this.state.markdown) }} style={{ height: "100%", width: "60%", margin: "auto"}} />
                </Grid>
            </Grid>
        </Container>
    );}
}
