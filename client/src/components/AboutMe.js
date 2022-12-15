import React from 'react';

function AboutMe(props) {
    return (
        <div id="aboutme">
            <center><h2>About</h2></center><br/>
            <div class="containercss" data-aos="fade-right" data-aos-delay="250" >
                <div class="left">
                    <center>
                    <img src="./carousel/hacker1.jpg" class="img"/>
                    <div class="info">
                        <h3>SM Mohdin</h3>
                        <h5>(Jamia Millia Islamia)</h5>
                    </div>
                    </center>
                </div>
                <div class="right">
                    <h3>About Me</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <p>Sit amet purus gravida quis blandit turpis cursus in. Odio euismod lacinia at quis risus sed vulputate odio. Ut aliquam purus sit amet luctus venenatis. Aliquet eget sit amet tellus cras adipiscing enim eu. A arcu cursus vitae congue mauris rhoncus aenean vel elit. Dapibus ultrices in iaculis nunc. Sem viverra aliquet eget sit amet tellus cras. Sed cras ornare arcu dui vivamus arcu.</p>
                </div>
            </div>   
        </div>
    );
}

export default AboutMe;