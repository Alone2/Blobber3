import React, { Component } from 'react';
import Content from './Content';

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
interface State {
  header: string,
  message: string,
  date: string
  pic: string,
}
export class News extends Component<Props, State> {
  constructor(props : Props) {
    super(props)
    this.state = {
      header: "",
      message: "",
      date: "",
      pic: "",
    }
  }
  componentDidMount() {
    this.getNews()
  }
  async getNews() {
    // const data : Response = await fetch("https://blobber.ch/content/news");
    // const datajson : any = data.json();
    // console.log(datajson);
    this.setState({
      header: "Hello",
      message: "I like turtles",
      date: "Yesterday",
      pic: "lel",
    });
  }
  
  render() {
    const { header, message, date, pic} = this.state
    return (
      <Content>
        <small>{date}</small>
        <img src={pic} alt="" />
        <b>{header}</b>
        <br/>
        <br/>
        {message}
      </Content>
    );
  }
}

export default News;
