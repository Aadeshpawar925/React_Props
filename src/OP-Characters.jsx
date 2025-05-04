

export default function Characters (props) {
    return (
        <article className="character-card">

            <img src={props.img.src} alt={props.img.alt} />

            <h1>{props.name}</h1>
            <div className="info-group">
              
                <h3>Bounty <span>{props.Bounty}</span></h3>
               
            
            <p>{props.Description}</p>
            </div>
           
        </article>
       
    )
}