<template>
  <!--
=============================================
Footer
==============================================
  -->
  <footer class="bg-one">
    <div class="container">
      <div class="row">
        <div class="col-md-3 col-sm-6 col-xs-12">
          <div class="footer-logo">
            <a href="index.html">ETNAFES</a>
          </div>
        </div>
        <div class="col-md-3 col-sm-6 col-xs-12 footer-list">
          <ul>
            <li>
              <router-link :to="{name:'team'}">Notre équipe</router-link>
            </li>
            <li>
              <a href class="tran3s">Nos services</a>
            </li>
          </ul>
        </div>
        <div class="col-md-3 col-sm-6 col-xs-12 footer-list">
          <ul>
            <li>
              <a href="/fr/analyse" class="tran3s">Outil d'analyse</a>
            </li>
            <li>
              <a href="/fr/test-numerique" class="tran3s">Outil de test</a>
            </li>
          </ul>
        </div>
      </div>
      <!-- /.row -->

      <div class="bottom-footer clearfix">
        <p class="float-left">
          &copy; 2020
          <a href="/" class="tran3s p-color">ETNAFES</a>. Tous droits réservés
        </p>
      </div>
    </div>
    <!-- /.container -->
  </footer>
</template>
<style scoped>
/*----------------------- Footer ---------------------*/
footer.bg-one {
  /* background: url(../images/home/footer.png) no-repeat center center;
  background-size: cover; */
  background-color: #fff;
}

footer {
  padding-top: 100px;
}

footer .footer-logo h5 a {
  font-weight: 600;
  font-size: 16px;
  color: #222222;
  margin: 30px 0 15px 0;
}

footer h4 {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 25px;
}

footer .footer-list ul li {
  line-height: 40px;
  list-style-type: none;
}

footer .footer-list ul li a {
  color: rgba(0, 0, 0, 0.65);
  font-weight: 500;
}

footer .footer-subscribe input {
  width: 100%;
  height: 55px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 5px;
  padding: 0 20px;
  background: transparent;
}

footer .footer-subscribe form {
  padding: 15px 0 35px 0;
}

footer .footer-subscribe ul li {
  display: inline-block;
}

footer .footer-subscribe ul li a {
  color: #b4b5b6;
  font-size: 18px;
  margin-right: 15px;
}

footer .bottom-footer p,
footer .bottom-footer ul li {
  line-height: 40px;
}

footer .bottom-footer p a {
  font-weight: 500;
}

footer .bottom-footer ul li {
  float: left;
  padding-left: 50px;
}

footer .bottom-footer ul li h3 {
  font-size: 24px;
  font-weight: 600;
}

footer .row [class*="col-"] {
  margin-bottom: 60px;
}

footer .bottom-footer {
  padding: 25px 0 30px 0;
}
a {
  font-family: "Poppins", sans-serif;
  font-size: 16px;
}
a:hover,
a:focus,
a:visited {
  text-decoration: none;
  outline: none;
  font-family: "Poppins", sans-serif;
}
h6 {
  font-size: 20px;
  font-weight: normal;
  font-family: "Poppins", sans-serif;
}
p {
  font-family: "Poppins", sans-serif;
  font-weight: normal;
  color: rgba(0, 0, 0, 0.65);
  font-size: 16px;
}
</style>