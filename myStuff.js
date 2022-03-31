@import url('https://fonts.googleapis.com/css2?family=Arbutus+Slab&family=Barlow:wght@600;700&family=Darker+Grotesque:wght@300;400;600&family=EB+Garamond:wght@400;600&family=Raleway:wght@300;900&display=swap');

/**********  text styling and layout  ***********/

body {
    margin: 0;
    position: relative;
    background-color: #fdf6dc;
  }

.main{
    color: #372a28;
    font-family: 'Barlow', 'sans-serif';
    font-size: 24px;
    text-transform: uppercase; 
    position: absolute;
    top: 12.5%;
    right: 20%;
    letter-spacing: 4px;
}

h1{
    margin-top: 0;
    margin-bottom: 0;
}

.menu{
    color: #372a28;
    font-family: 'Arbutus Slab', serif;
    padding-left: 4rem;
    padding-top: 2rem;
    font-size: 5ch;
}

.menu ul{
    list-style: none;

}

.menu ul li{
    margin: 0 1rem;
    padding: 1 rem;
    display: block;
}

.menu a{
  display: block; /* Make the links appear below each other */
  padding: 12px; /* Add some padding */
  text-decoration: none;
}

nav li a{
    display: block;
    color: #372a28;
    font-family: 'Arbutus Slab', serif;
}

.about{
    color: #372a28;
    font-family: 'Arbutus Slab', serif;
    font-size: 5ch;
    padding-left: 4rem;
    position:absolute;
    top: 50rem;
}

.about_text{
    color: #372a28;
    top: 69rem;
    position:absolute;
    padding-left: 5rem;
    padding-bottom: 8rem;
    padding-right: 10rem;
    position:absolute;
    font-family: 'Arbutus Slab', serif
}

.resume{
    color: #372a28;
    font-family: 'Arbutus Slab', serif;
    font-size: 5ch;
    padding-left: 4rem;
    position:absolute;
    top: 90rem;
}

.pp{
    color: #372a28;
    font-family: 'Arbutus Slab', serif;
    font-size: 5ch;
    padding-left: 4rem;
    position:absolute;
    top: 140rem;
}

.contactme{
    color: #372a28;
    font-family: 'Arbutus Slab', serif;
    font-size: 5ch;
    padding-left: 4rem;
    position:absolute;
    top: 190rem;
}

.container{
    width: 100%;
    height: 100%;
}

/**********  images  ***********/

#content img {
    position: absolute;
    top: 20px;
    right: 20px;
}

#star img{
    position: absolute;
    top: 15rem;
    right: 21rem;
}

#down img{
    position: absolute;
    bottom:2%;
    top: 40rem;
    right: 52%;
    left: 48%;
}

#down1 img{
    position: absolute;
    bottom:2%;
    top: 86rem;
    right: 52%;
    left: 48%;
}

#up img{
    position: absolute;
    bottom:2%;
    padding-top: 5rem;
    top: 44rem;
    right: 52%;
    left: 48%;
}

section{
 width: 100%;
 height: 100vh;
 display: flex;
/* Scroll Snap */
 scroll-snap-align: center;
}


