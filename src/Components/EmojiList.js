import React, { Component } from 'react'
import Emoji from "./Emoji.json"
import SearchEmoji from './SearchEmoji'


class EmojiList extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            jsondata: Emoji,
            search : ""
        }
    }
    

    // Updating Input

    changeHandler = (event) => {
        this.setState ({
            search : event.target.value
            
        })
        // console.log(event.target.value)
    }


    // Copy Emoji

    copyToClipboard = (symbol) =>{
        var input = document.createElement('input');
        input.setAttribute('value', symbol);
        document.body.appendChild(input);
        input.select();
        document.execCommand('copy');
        input.remove()
        // console.log(input)
        alert("Copy successfully")

    }

    render() {
        const emojilist = this.state.jsondata.filter(SearchEmoji(this.state.search)).map(emoji =>
        <div className="li-div" key = {emoji.title}>
            <li className="emoji-list" style={{listStyle:"none"}} >
                {emoji.symbol} <span className="emoji-title ml-4">{emoji.title}</span> 
                <span className="copy float-right mr-4 mt-2" 
                style={{fontSize:13}} 
                onClick={() => this.copyToClipboard(emoji.symbol)}>Copy Emoji</span>
            </li>
        </div>
            )
        return (
            <div className="search-box mt-4">
                <form>
                    <input className="input mb-4 pl-3 fa fa-search" 
                        style={{width:"40%"}} 
                        onChange={this.changeHandler} 
                        placeholder="Search.........">
                    </input>
                    
                </form>
                <div>{emojilist}</div>
                
            </div>
            
            
        )
    }
}

export default EmojiList
