import React from 'react'

export default function Cards(props) {
  let { title, imageUrl, HP, Attacks , Abilities} = props;
  return (
    <div className="my-3 mx-3 ">
            <div className="card">
                <img src={!imageUrl ? "https://cdn.vox-cdn.com/thumbor/8RrRTXEgQTsdC2uogFsCwWxHmlQ=/0x0:1920x1080/920x613/filters:focal(807x387:1113x693):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/69592408/pikachu_review_lead.0.jpg" : imageUrl} style={{ width: "250px", height: "300px", alignSelf: "center" }} className="card-img-top" alt="..." />


                <div className="card-body" style={{ textAlign: 'left', backgroundColor:"white"}}>
                    <span className="card-title"><strong style={{paddingRight :"250px"}}>{title}</strong></span>
                    <span className="card-text"><strong> HP:</strong> {HP}</span>
                    <p className="card-text"><strong>Attacks:</strong><br></br>{Attacks?.map(a => a.name)}</p>
                    <p className="card-text"><strong>Abilities:</strong><br></br>{Abilities ? Abilities?.map(a => a.name ): "N/A"}</p>   
                </div>
            </div>
        </div>
  )
}
