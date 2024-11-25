<template>
  <div class="container-fluid vh-100 d-flex align-items-stretch p-0 m-0">
    <div class="row flex-grow-1 w-100 m-0">
      <div
        class="col-4 d-flex justify-content-center align-items-center text-center p-0"
        style="background-color: #B84EFF; height: 100vh;"
      >
        <div>
          <h1 class="text-light">Welcome Back !</h1>
          <p class="mb-5 text-light">
            To keep connected with us, please <br /> login with your personal
            info
          </p>
          <button type="button" class="btn btn-outline-light">SIGN IN</button>
        </div>
      </div>
    
      <div class="col-8 d-flex justify-content-center align-items-center p-0">
        <div class="text-center w-50">
          <h1>Create Account</h1>
          <p class="mb-5">Use your email for registration</p>
          <input
            class="form-control mb-3"
            type="text"
            placeholder="Name"
            aria-label="default input example"
          />
          <input
            class="form-control mb-3"
            type="text"
            placeholder="Username"
            aria-label="default input example"
          />
          <input
            class="form-control mb-3"
            type="email"
            placeholder="Email"
            aria-label="default input example"
          />
          <input
            class="form-control mb-4"
            type="password"
            placeholder="Password"
            aria-label="default input example"
          />
          <button class="btn btn-dark">SIGN UP</button>
        </div>
      </div>
    </div>
  </div>
</template>
  
  

<script>
export default {};
</script>

<style lang="scss" scoped></style>
