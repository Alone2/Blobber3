import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown'
import Content from './Content';
import News from './News';
import Projects from './Projects';
import yaml from 'js-yaml'
import styles from './News.module.css'

interface Props {
    pathProjects: string
    pathNews: string
}

interface Project {
    message: string,
    pic: string,
    link: string,
}

interface Article {
    header: string,
    message: string,
    date: string,
    pic: string,
}

interface State {
    article: Article,
}

export class Home extends Component<Props, State> {
    constructor(props : Props) { 
        super(props);
        this.state = {
            article: {
                header: '',
                message: '',
                date: '',
                pic: '',
            },
        }
    }

    componentDidMount() {
        this.getNews();
    }

    async getNews() {
        const data : Response = await fetch(this.props.pathNews);
        const datayaml : string = await data.text();
        const datajson : any = yaml.load(datayaml);
        let article = {
            header: datajson[0]["header"],
            message: datajson[0]["message"],
            date: datajson[0]["date"],
            pic: datajson[0]["pic"],
        };
        this.setState({
            article: article
        });
    }

    render() {
        let returnMe : JSX.Element[] = [];
        const k = this.state.article;
        returnMe.push(<Content key={1}>
            <small>{k.date}</small>
            <br/>
            <img src={k.pic} alt="" />
            <br/>
            <h2><ReactMarkdown>{k.header}</ReactMarkdown></h2>
            <ReactMarkdown>{k.message}</ReactMarkdown>
           </Content>);
       
        return (
            <div> 
                <div className={styles.articles}>
                    { returnMe }
                </div>
                <Projects path={this.props.pathProjects}/>
            </div>
        );
    }
}

export default Home;
