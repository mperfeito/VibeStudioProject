<template> 

                                <!-- section 1 -->
    <div> 
        <div class="first_container"> 
            <div class="info1_container">  
            <h1 class="label">DanceFest 2024</h1>
            <p class="content">A celebration of rhythm, movement, and creativity! Join us for electrifying performances, workshops, and nonstop energy.</p>
        </div> 
        <div class="imgs"> 
            <img src="../assets/about us/img1.png" alt=""> 
            <img src="../assets/about us/img2.png" alt="">
        </div> 
        </div> 
        <div class="rect"></div>
    </div>  
    

                                <!-- section 2 --> 
    <div class="second_container"> 
        <div class="gallery">
            <div class="gallery-item">
                <img src="../assets/about us/img3.png" alt="">
            </div>
            <div class="gallery-item">
                <img src="../assets/about us/img4.png" alt="">
            </div> 
            <div class="gallery-item">
                <img src="../assets/about us/img5.png" alt="">
            </div>
            <div class="gallery-item">
                <img src="../assets/about us/img6.png" alt="">
            </div>
        </div> 
        <div class="info2_container"> 
            <h1 class="label">Our Team</h1> 
            <p class="content">A passionate group of skilled performers and instructors, our dancers bring creativity, energy, and expertise to every step—dedicated to inspiring and sharing the joy of movement with all!</p>
        </div>
    </div>  

                                <!-- section 3 -->  
<div class="rect2"> 

<div> 
    <div id="carouselExampleIndicators" class="carousel slide">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
            <div class="carousel-item active" style="display: flex; gap: 15px;">
                <div class="card" style="width: 18rem;">
                    <img src="../assets/about us/p1.png" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                    </div>
                </div>  

                <div class="card" style="width: 18rem;">
                    <img src="../assets/about us/p2.png" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                    </div>
                </div> 

                <div class="card" style="width: 18rem;">
                    <img src="../assets/about us/p3.png" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                    </div>
                </div>
            </div>
            <div class="carousel-item active" style="display: flex; gap: 15px;">
                <div class="card" style="width: 18rem;">
                    <img src="../assets/about us/p4.png" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                    </div>
                </div> 
                
                <div class="card" style="width: 18rem;">
                    <img src="../assets/about us/p5.png" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                    </div>
                </div>  

                <div class="card" style="width: 18rem;">
                    <img src="../assets/about us/p6.png" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                    </div>
                </div> 
            </div> 
            <div class="carousel-item active" style="display: flex; gap: 15px;">
                <div class="card" style="width: 18rem;">
                    <img src="../assets/about us/p7.png" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                    </div>
                </div> 
                
                <div class="card" style="width: 18rem;">
                    <img src="../assets/about us/p8.png" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                    </div>
                </div> 

                <div class="card" style="width: 18rem;">
                    <img src="../assets/about us/p9.png" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                    </div>
                </div>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
        </div>
    </div> 
</div> 


</template>

<script>
    export default {
        
    }
</script>

<style lang="css" scoped> 
* {
    font-family: 'Ysabeau Infant'; 
} 

.label{ 
    font-weight: bolder;
    color: #000000;
    font-size: 50px;
    margin-top: 2%;
} 

.content{ 
    font-family: "Ysabeau Infant" ; 
    font-weight: normal;
    font-size: 30px; 
    margin-top: 2%; 
    width: 90%;
}

.first_container{  
    display: flex; 
    flex-direction: row; 
    margin: 5%; 
    margin-bottom: 10%;
} 

.rect{ 
    background-color: #DCDCF2;   
    margin: none;  
    height: 300px; 
    width: 800px; 
    z-index: -1; 
    right: 0%;  
    top: 70%; 
    position: absolute;
} 

.imgs{ 
    display: flex; 
    flex-direction: row; 
    gap: 20px; 
    z-index: 100;
}

.second_container{  
    margin-bottom: 5%;
    display: flex; 
    flex-direction: row;  
    gap: 10%; 
    margin: 5%;  
    padding-bottom: 35%; 
    padding-top: 5%;
    
} 

.info2_container{ 
    right: 5%;
}

.gallery { 
    height: 50px;
    display: grid;               
    grid-template-columns: repeat(2, 1fr); 
    gap: 20px;                   
    max-width: 1200px;
    margin-bottom: 5%;
}

.gallery-item {
    break-inside: avoid;
    margin-bottom: 16px;
}

.gallery-item img { 
    width: 250px;
}



@media screen and (max-width: 500px) {
    .gallery {
        grid-template-columns: 1fr; /* Uma coluna no mobile */
    }
}

@media screen and (min-width: 501px) and (max-width: 700px) {
    .gallery {
        grid-template-columns: repeat(2, 1fr); /* 2 colunas em telas médias */
    }
}

@media screen and (min-width: 701px) and (max-width: 900px) {
    .gallery {
        grid-template-columns: repeat(2, 1fr); /* 2 colunas em telas médias */
    }
}



.rect2{  
    background-color: #8A89D4; 
    width: 100%; 
    height: 500px;   
    align-content: center; 
    justify-content: center;
}  
.carousel slide{ 
    align-items: center;
}
</style>