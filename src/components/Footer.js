import React from "react";


function Footer (){
    return ( 
        <body>
    <div class="container"></div>
        <footer>
        {/* <!-- Footer main --> */}
        <section class="ft-main">
          <div class="ft-main-item">
            <h2 class="ft-title">About</h2>
            <ul>
              <li><a href="#">Accessibility</a></li>
              <li><a href="#">User Agreement</a></li>
            
              
            </ul>
          </div>
         
          <div class="ft-main-item">
            <h2 class="ft-title">Contact</h2>
            <ul>
              <li><a href="#">Help</a></li>
             </ul>
          </div>
          <div class="ft-main-item">
            <h2 class="ft-title">Stay Updated</h2>
            <p>Subscribe to our newsletter to get our latest news.</p>
            <form>
              <input type="email" name="email" placeholder="Enter email address"></input>
              <input type="submit" value="Subscribe"></input>
            </form>
          </div>
        </section>
       
       {/* <!-- Footer social --> */}
        <section class="ft-social">
          <ul class="ft-social-list">
            <li><a href="#"><i class="fab fa-facebook"></i></a></li>
            <li><a href="#"><i class="fab fa-twitter"></i></a></li>
            <li><a href="#"><i class="fab fa-instagram"></i></a></li>
            <li><a href="#"><i class="fab fa-github"></i></a></li>
            <li><a href="#"><i class="fab fa-linkedin"></i></a></li>
            <li><a href="#"><i class="fab fa-youtube"></i></a></li>
          </ul>
        </section>
       
        {/* <!-- Footer legal --> */}
        <section class="ft-legal">
          <ul class="ft-legal-list">
            <li><a href="#">Terms &amp; Conditions</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Cookie Policy</a></li>
            <li>&copy; 2019 Copyright TruJobz.</li>
          </ul>
        </section>
      </footer>

    </body>


    )
}