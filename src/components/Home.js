import React from "react";

function Home (){
    return ( 
        <main class="Home" role="main"
        id="Home-Page">
            <section class="box"><div class="    ">
            <h1 class="Header" id="Intro-header"> Join TruJobz for diverse career to discover!  </h1>
            <div className="Lists">
                <ul class="Choices">
                    <li class="m">
                    <a class="searchBar" href="links" > 
                    Search for Careers
                    <icon class="arrow"> </icon>
                    </a>
                    </li>
                    <li class="m">
                    <a class="MentorBar" href="links" >Search Mentor
                    <icon class="arrow"> </icon>
                    </a>
                    </li>
                    <li class="m">
                    <a class="resumeBar" href="links" > Research 
                    <icon class="arrow"> </icon>
                </a>
                </li>
                </ul>
                </div>
                </div>
            </section>
        </main>   
         

    ) 
    
}

export default Home;

