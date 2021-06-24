import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown'
import Content from './Content';
import './News.css'
// function News() {  
//   React.useEffect(function() {
//     getNews()
//   }, [])
//   async function getNews() {
//     const data : Response = await fetch("https://blobber.ch/content/news")
//     const datajson : any = data.json()
//     console.log(datajson)
//   }
//   return (
//       <Content>
//       </Content>
//   );
// }

interface Props {
}

interface Article {
    header: string,
    message: string,
    date: string,
    pic: string,
}
interface State {
    articles: Article[],
}
export class News extends Component<Props, State> {
    constructor(props : Props) { super(props)
        this.state = {
            articles: [],
        }
    }
    componentDidMount() {
        this.getNews()
    }
    async getNews() {
        const data : Response = await fetch("../news.json");
        const datajson : any = await data.json();
        var content : Article[] = [];
        for (var k of datajson) {
            /* console.log(k); */
            let article = {
                header: k["header"],
                message: k["message"],
                date: k["date"],
                pic: k["pic"],
            };
            content.push(article);
        }
        this.setState({
            articles: this.state.articles.concat(content)
        })
        console.log(datajson);
    }

   
    render() {
        let returnMe : JSX.Element[] = [];
        for(var i in this.state.articles) {
            const k = this.state.articles[i];
            returnMe.push(<Content key={i.toString()}>
                <small>{k.date}</small>
                <br/>
                <img src={k.pic} alt="" />
                <br/>
                <h2><ReactMarkdown>{k.header}</ReactMarkdown></h2>
                <ReactMarkdown>{k.message}</ReactMarkdown>
               </Content>);
        }
        return (
            <div>
                {returnMe}
            </div>
            /* {this.displayNews()} */
        );
    }
}

export default News;
