


import React, { useCallback } from "react";
import { Link } from 'react-router-dom';


function Card(props) {
    // const navigate = useNavigate();
    let post = props.info;
    console.log("CARDDDDDDDDDDDDDDDDD");

    console.log(post);

    const SendCardDetail = useCallback(
        (id) => () => {
          
        },
        []
    );
    // "type": "Bilim Kurgu, Aksiyon, Macera",
    //   "director": "Shane Black",
    //   "summary": "Eski bir Özel Kuvvetler askeri olan Quinn McKenna (Boyd Holbrook) Meksika'da paralı bir görevde bulunduğu sırada bir uzaylıyla karşılaşır, bu uzaylı teknolojisine ait bazı parçaları evine gönderir. Ancak oğlu Rory'nin (Jacob Tremblay) bu paketi yanlışlıkla açması, uzayın en derinlerinden korkunç yaratıkların yeniden dünyaya gelmesine neden olur. Üstelik bu yaratıklar, başka gezegenlerdeki varlıklarla gen havuzlarını genişletmiş, iyice güçlenmiştir. Onları durdurabilecek tek güç, bir grup eski asker ve bir de özel hayatındaki sorunlarla mücadele eden fen bilgisi öğretmeni olacaktır.\nThe Predator filmi kronolojik olarak, 1990 yapımı Predator 2 ve 2010 yapımı Predators'ın arasında konumlanıyor.",
    //   "name": "Predator",
    //  const readMoreLink=<a href="url">link text</a>;
    const listItems = post.map(postElement =>
    
    
        <Link style={{ textDecoration:"none"}} to=  'carddetay' state= {{ data: postElement }} >
     
 
    
    <div key={postElement.id} className="col " onClick={SendCardDetail(postElement)}  >
        <div className="card mb-3 " >
            <div className="row g-0 " style={{
                minHeight: "250px"
            }}>
                <div className="col-md-4">
                    <img src={postElement.image} className="img-fluid rounded-start w-100 h-100" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{postElement.name}</h5>
                        <p className="card-text">  {postElement.summary.length > 75 ? postElement.summary.slice(0, 75) : postElement.summary}

                            {postElement.summary.length ? <a href="https://www.w3schools.com" style={{ textDecoration: 'none' }}>  Read More....</a> : null}
                        </p>
                        <p className="card-text">{postElement.type}</p>
                        <p className="card-text"><small className="text-body-secondary">{postElement.director}</small></p>
                    </div>
                </div>
            </div>
        </div> </div ></Link> )  ;


    return (
        <div>
            <div className="row row-cols-1 row-cols-md-2 g-4 mx-5">

                {listItems}

            </div>
        </div>
    );

}

export default Card;