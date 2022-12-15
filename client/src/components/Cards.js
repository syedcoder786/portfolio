import React from 'react';


function Cards(props) {
    const onClick = (url) => {
        window.open(url)
    }
    
    return (
        <div class="cardcontainer" id="projets">
            <center><h2>My Projects</h2></center>
            {/* <br/> */}
            <h3>Websites:</h3>
            <div class="card-deck">
            <div class="card" data-aos="fade-right" data-aos-delay="180" onClick={()=>{ onClick("https://jamiabook.herokuapp.com") }}>
                <img class="card-img-top" src="./carousel/1.png" alt="Card image cap"/>
                <div class="card-body">
                <h5 class="card-title">Jamia Book</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
                {/* <div class="card-footer">
                <small class="text-muted">Last updated 3 mins ago</small>
                </div> */}
            </div>
            <div class="card" data-aos="fade-down" data-aos-delay="180" onClick={()=>{ onClick("https://syedexpert.herokuapp.com") }}>
                <img class="card-img-top" src="./carousel/2.png" alt="Card image cap"/>
                <div class="card-body">
                <h5 class="card-title">Syed Expert</h5>
                <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                </div>
                {/* <div class="card-footer">
                <small class="text-muted">Last updated 3 mins ago</small>
                </div> */}
            </div>
            <div class="card" data-aos="fade-left" data-aos-delay="180" onClick={()=>{ onClick("https://edpub.herokuapp.com") }}>
                <img class="card-img-top" src="./carousel/3.png" alt="Card image cap"/>
                <div class="card-body">
                <h5 class="card-title">Edpub</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                </div>
                {/* <div class="card-footer">
                <small class="text-muted">Last updated 3 mins ago</small>
                </div> */}
            </div>
            </div>
            <br/>
            <div class="card-deck">
            <div class="card" data-aos="fade-right" data-aos-delay="180" onClick={()=>{ onClick("https://alexhetachi.github.io/infinite-scroll-react/") }}>
                <img class="card-img-top" src="./carousel/4.png" alt="Card image cap"/>
                <div class="card-body">
                <h5 class="card-title">Infinite Scroll</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
                {/* <div class="card-footer">
                <small class="text-muted">Last updated 3 mins ago</small>
                </div> */}
            </div>
            <div class="card" data-aos="fade-down" data-aos-delay="180" onClick={()=>{ onClick("https://alexhetachichatapp.herokuapp.com/") }}>
                <img class="card-img-top" src="./carousel/5.png" alt="Card image cap"/>
                <div class="card-body">
                <h5 class="card-title">Socket Chat</h5>
                <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                </div>
                {/* <div class="card-footer">
                <small class="text-muted">Last updated 3 mins ago</small>
                </div> */}
            </div>
            <div class="card" data-aos="fade-left" data-aos-delay="180" onClick={()=>{ onClick("https://alexhetachi.github.io/ecommerce/") }}>
                <img class="card-img-top" src="./carousel/6.png" alt="Card image cap"/>
                <div class="card-body">
                <h5 class="card-title">E-Commerce</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                </div>
                {/* <div class="card-footer">
                <small class="text-muted">Last updated 3 mins ago</small>
                </div> */}
            </div>
            </div>
            <br/><br/>
            <h3>Android/IOS Apps:</h3>
            <div class="card-deck">
            <div class="card" data-aos="fade-right" data-aos-delay="180" onClick={()=>{ onClick("https://expo.io/@alexhetachi/projects/alexhetachi") }}>
                <img class="card-img-top" src="./carousel/app1.jpg" alt="Card image cap"/>
                <div class="card-body">
                <h5 class="card-title">First App</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
                {/* <div class="card-footer">
                <small class="text-muted">Last updated 3 mins ago</small>
                </div> */}
            </div>
            <div class="card" data-aos="fade-down" data-aos-delay="180" onClick={()=>{ onClick("https://expo.io/@alexhetachi/projects/newtodo") }}>
                <img class="card-img-top" src="./carousel/app2.jpg" alt="Card image cap"/>
                <div class="card-body">
                <h5 class="card-title">Todo App</h5>
                <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                </div>
                {/* <div class="card-footer">
                <small class="text-muted">Last updated 3 mins ago</small>
                </div> */}
            </div>
            <div class="card" data-aos="fade-left" data-aos-delay="180" onClick={()=>{ onClick("https://expo.io/@alexhetachi/projects/dictionaryapp") }}>
                <img class="card-img-top" src="./carousel/app3.jpg" alt="Card image cap"/>
                <div class="card-body">
                <h5 class="card-title">Dictionay App</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                </div>
                {/* <div class="card-footer">
                <small class="text-muted">Last updated 3 mins ago</small>
                </div> */}
            </div>
            </div>
        </div>
    );
}

export default Cards;