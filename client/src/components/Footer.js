import React from 'react';

function Footer(props) {
    return (
        <div>
            <footer class="page-footer font-small special-color-dark pt-4" style={{backgroundColor:'#343a40', color:'white'}}>

            <div class="container">

                <ul class="list-unstyled list-inline text-center">
                <li class="list-inline-item">
                    <a class="btn-floating btn-fb mx-1">
                    <i class="fa fa-facebook-f"> </i>
                    </a>
                </li>
                <li class="list-inline-item">
                    <a class="btn-floating btn-tw mx-1">
                    <i class="fa fa-twitter"> </i>
                    </a>
                </li>
                <li class="list-inline-item">
                    <a class="btn-floating btn-gplus mx-1" href="https://github.com/alexhetachi" target="_blank">
                    <i class="fa fa-github"> </i>
                    </a>
                </li>
                <li class="list-inline-item">
                    <a class="btn-floating btn-li mx-1">
                    <i class="fa fa-linkedin-square"> </i>
                    </a>
                </li>
                <li class="list-inline-item">
                    <a class="btn-floating btn-dribbble mx-1">
                    <i class="fa fa-dribbble"> </i>
                    </a>
                </li>
                </ul>

            </div>

            <div class="footer-copyright text-center py-3">SM Mohdin Web Design Copyright © 2021.</div>

            </footer>         
        </div>
    );
}

export default Footer;