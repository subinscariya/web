import React,{Component}from 'react';
import './App.css';
export default class Dash extends Component

{

constructor(){
    super();
    this.state={
        text:"",
        store:[]
    };
    
}
my=e=>{
    this.setState({
        text:e.target.value
        
    });
    console.log(this.state.text)
}
ppp=e=>{
    const{text}=this.state;
    const all=this.state.store;
    all.push(text);

    this.setState({
        store:all  
       })

    console.log(this.state.store)
}
    
    render(){
        const {text,store}=this.state;
        return(
            <div>
            <div className="left">
                <button>Dashboard</button>
                <br/>
                <button>Lorem</button>
                <br/>
                <button>lpsum</button>
                <br/>
        
                <input className="search" type="text" placeholder="search"/>
                <img className="im" src="https://scontent.fblr15-1.fna.fbcdn.net/v/t1.0-9/128755169_1442537732803791_5420344043757068502_o.jpg?_nc_cat=101&ccb=2&_nc_sid=730e14&_nc_ohc=U0iGODnVeR0AX_04MxN&_nc_ht=scontent.fblr15-1.fna&oh=f5a6d41c91df6b8e48998dd757787816&oe=5FEEF1EA" alt="sss"/>
                <div>
                <input type="text" onChange={this.my} value={text} className="text"  placeholder="Notepad"/>
        
        <ul className="type">
            {store.map((data,key)=>(
                <li key={key}>
                    {data}
                </li>
            )
            )}
        </ul>
        
                </div>
                <img className="oo" src="https://scontent.fblr15-1.fna.fbcdn.net/v/t1.0-9/128216596_1442537716137126_3922663570574072138_o.jpg?_nc_cat=100&ccb=2&_nc_sid=730e14&_nc_ohc=ARH87pu1lrIAX-xhN96&_nc_ht=scontent.fblr15-1.fna&oh=5b516dff826a7c815ed6bfab19152923&oe=5FEFCB8E" alt="nb"/>
                <img className="ii" src="https://scontent.fblr15-1.fna.fbcdn.net/v/t1.0-9/128889498_1442537706137127_9088164677480329635_o.jpg?_nc_cat=103&ccb=2&_nc_sid=730e14&_nc_ohc=Bh2VDOZPNccAX8G1BDE&_nc_oc=AQnQFEgHQ7WjqLFDeLlvSGbQRVxY6dpnyhlx0d8AVpD596doyhFOv_R_HNY-bogTwTI&_nc_ht=scontent.fblr15-1.fna&oh=b46052f7cf9bb78e302a9aaa2262b137&oe=5FED0D5D" alt="mn m"/>     
            </div>
            <input type="image" src="https://cdn4.iconfinder.com/data/icons/media-buttons-1/200/761-512.png" alt="subin" className="to" onClick={this.ppp}/>
         
            </div>
             
        );
    }
 
}