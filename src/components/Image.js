import React, { Component } from 'react'


// handling props through class-way

export default class Image extends Component {
  render() {
    return (
      <div>
      {this.props.Data.map((image)=>{
        return <img key={image.id} className='img' src={image.img} alt=""></img>
      })}
    </div>
    )
  }
}
