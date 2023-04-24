import React from "react";

const Card = ({ id, name, email }) => {
    // const { id, name, email } = props; ==> destructuring si può fare direttamente al posto di props fra gli argomenti richiesti
    return(
        <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <img alt="robot" src={`https://robohash.org/${id}?200x200`}/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;