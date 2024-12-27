<template> 
    <div>
        <nav class="navbar navbar-expand-lg" style="background-color:white; font-family:'Ysabeau Infant';">
        <div class="container-fluid"> 
            <router-link to="/"><a class="navbar-brand" style="margin-left: 2%; margin: 2%; height: 80px;" href="#"><img style="height: 60px;" src="../assets/logo/logoRoxo.png" alt=""></a>
            </router-link>
            <div class="nav justify-content-end" id="navbarSupportedContent" style="margin-right: 1%; ">
                <ul class="nav">
                    <li class="nav-item"> 
                        <router-link to="/register" class="nav-link active"> Register</router-link> 
                    </li>
                    <li class="nav-item">
                        <router-link to="/login" class="nav-link active" >Login</router-link>
                    </li>
                </ul>
            </div> 
        </div> 
        </nav> 
       
    </div>  
    
</template>

<script>
    export default {
        
    }
</script>

<style lang="css" scoped>  
.nav-item {
  position: relative; 
  
}

.nav-link { 
    display: flex; 
    align-items: center; 
    justify-content: center; 
    text-decoration: none;
    color: #B84EFF;
    font-family: "Ysabeau Infant-Regular",;
    font-size: 20px;
    position: relative;
    transition: color 0.3s ease-in-out; 
    outline: none; 
    border: none;
    }


.nav-link::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 1px; 
  width: 0;
  height: 2px;
  background-color: #B84EFF;
  transition: width 0.3s ease-in-out;
}

.nav-link:hover::after {
  width: 100%; 
}

.nav-link:hover {
  color: #B84EFF; 
}


.nav-link.active {
  color: #B84EFF;
} 


.nav-link:focus, 
.router-link-active {
  outline: none;
  border: none;
} 
.profile{ 
    width: 40px;
}

</style>