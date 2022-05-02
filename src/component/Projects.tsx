import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown'
import Content from './Content';
import yaml from 'js-yaml'
import styles from './Projects.module.css'

interface Props {
    path: string
}

interface Project {
    message: string,
    pic: string,
    link: string,
}

interface State {
    projects: Project[],
}

export class Projects extends Component<Props, State> {
    constructor(props : Props) { 
        super(props);
        this.state = {
            projects: [],
        }
    }

    componentDidMount() {
        this.getNews();
    }

    async getNews() {
        const data : Response = await fetch(this.props.path);
        const datayaml : string = await data.text();
        const datajson : any = yaml.load(datayaml);
        var content : Project[] = [];
        for (var k of datajson) {
            /* console.log(k); */
            let project = {
                message: k["message"],
                pic: k["pic"],
                link: k["link"],
            };
            content.push(project);
        }
        this.setState({
            projects: this.state.projects.concat(content)
        })
    }

    render() {
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        let returnMe : JSX.Element[] = [];
        for(var i in this.state.projects) {
            const k = this.state.projects[i];
            returnMe.push(<div onClick={() => {window.open(k.link, "_blank");}} className={isMobile ? styles.projectChildMobile : styles.projectChild} > 
                <img src={k.pic} alt="" />
                <br/>
                <h2><ReactMarkdown>{k.message}</ReactMarkdown></h2>
               </div>);
        }
        return (
            <div className={isMobile ? styles.projectMobile : styles.project} > 
                {returnMe}
            </div>
        );
    }
}

export default Projects;
