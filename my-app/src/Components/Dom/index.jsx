import React, { Component } from 'react'
import './index.css'

export default class Dom extends Component {
    state={
        content:new Array(20).fill('内容内容'),
        pages:1,
        showBtn:false,
        btnExist:false,
        isFirst:true
    }

    createNewData=() => {
        var { pages } = this.state
        pages++;
        this.setState({pages});
        console.log('请求新数据',pages);
        var newData=new Array(20).fill('内容内容');
        var content=this.state.content.slice();
        this.setState({content:content.concat(newData)});
    }

    handleScroll=(event) => {
        const { showBtn,btnExist } = this.state
        //console.log('1')
        const totalHeight=event.target.scrollHeight;//元素高度
        const scrollTop=event.target.scrollTop;//已滚动高度
        const clientHeight=event.target.clientHeight;//视口高度
        //console.log(totalHeight,scrollTop,clientHeight);
        if(totalHeight-scrollTop-clientHeight<100){
            
            //console.log('需要新数据');
            this.createNewData();
            if(!btnExist){
                this.setState({btnExist:!btnExist,showBtn:!showBtn,isFirst:false})
            }
        }
        if(scrollTop<100){
            if(btnExist){
                this.setState({btnExist:!btnExist,showBtn:!showBtn})
            }
        }
    }
    handleClick=() => {
        const { showBtn } = this.state
        if(!showBtn){
            return;
        }
        //console.log('点击了');
        var scrollTop=this.myref.scrollTop;
        //this.myref.scrollTo(0,0);
        var timer=setInterval(() => {
            if(scrollTop>20){
                scrollTop-=20;
                this.myref.scrollTo(0,scrollTop);
            }else{
                this.myref.scrollTo(0,0);
                clearInterval(timer);

            }
        },2)


    }
    render() {
        const { content,isFirst,showBtn } = this.state
        return (
            <div >
                <div className='content' onScroll={this.handleScroll} ref={c=>this.myref=c}>
                    {
                        content.map((item,index) => {
                            return (
                                <div key={index}>{item}</div>
                            )
                        })
                    }
                </div>
                <div className='fixed'>
                    滚动加载更多
                </div>
                
                <div className={isFirst?'first':showBtn?'btn':'btn2'} >
                        <button onClick={this.handleClick}>返回顶部</button>
                </div>
                
            </div>
        )
    }
}
