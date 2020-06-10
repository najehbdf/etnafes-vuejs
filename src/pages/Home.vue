<template>
  <div>
    <TopNavbarHome />
    <!-- Full Page Intro -->
    <div
      class="view full-page-intro"
      style="background-image: url('images/Sidibousaid.jpg'); background-repeat: no-repeat; background-size: cover;background-attachment:fixed"
    >
      <!-- Mask & flexbox options-->
      <div class="mask rgba-black-light d-flex justify-content-center align-items-center">
        <!-- Content -->
        <div class="container">
          <div class="row">
            <p style="line-height:50px">&nbsp;</p>

            <div class="col-md-12"></div>
          </div>
          <!--Grid row-->
          <div class="row">
            <div class="offset-md-2"></div>
            <div class="col-md-8">
              <!--Grid column-->

              <!--Grid column-->

              <!--Card-->
              <div class="card" style="background-color: rgba(143,188,143,0.9);border: 0px;">
                <!--Card content-->
                <div class="card-body">
                  <!-- Form -->
                  <form name method="post">
                    <!-- Heading -->
                    <h4
                      class="dark-grey-text text-center"
                      style="line-height:60px;font-family: 'Open Sans', sans-serif;"
                    >
                      <strong
                        style="font-family: 'Indie Flower', cursive;"
                      >Choisir votre destination</strong>
                    </h4>
                    <!-- <hr>  -->
                    <div class="row">
                      <div class="col-sm-12 col-xs-3">
                        <div class="row">
                          <div class="col-md-2">
                            <div>
                              <label style="color:#000;font-size:14px">Ville :</label>
                            </div>
                          </div>

                          <div class="col-md-9">
                            <div class="form-group">
                              <select class="form-control" v-model="pack.ville_id" name="ville_id">
                                <option value disabled selected>choisissez votre destination</option>
                                <option
                                  v-for="ville in villes"
                                  v-bind:key="ville.id"
                                  v-bind:value="ville.id"
                                >{{ville.nom}}</option>
                              </select>

                              <!-- <select class="form-control" id="SelectRegion" required>
                                <option value disabled selected>choisissez votre destination</option>
                                <option value="Béja">Béja</option>
                                <option value="Bizerte">Bizerte</option>
                                <option value="Gabès">Gabès</option>
                                <option value="Gafsa">Gafsa</option>
                                <option value="Jendouba">Jendouba</option>
                                <option value="Kairouan">Kairouan</option>
                                <option value="Kasserine">Kasserine</option>
                                <option value="Kébili">Kébili</option>
                                <option value="Le Kef">Le Kef</option>
                                <option value="Mahdia">Mahdia</option>
                                <option value="Médenine">Médenine</option>
                                <option value="Monastir">Monastir</option>
                                <option value="Nabeul">Nabeul</option>
                                <option value="Sfax">Sfax</option>
                                <option value="Sidi Bouzid">Sidi Bouzid</option>
                                <option value="Siliana">Siliana</option>
                                <option value="Sousse">Sousse</option>
                                <option value="Tataouine">Tataouine</option>
                                <option value="Tozeur">Tozeur</option>
                                <option value="Tunis">Tunis</option>
                                <option value="Zaghouan">Zaghouan</option>
                              </select>-->
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-sm-12 col-xs-3">
                        <div class="row">
                          <div class="col-md-2">
                            <div>
                              <label style="color:#000;font-size:14px">Du :</label>
                            </div>
                          </div>

                          <div class="col-md-9">
                            <div class="form-group">
                              <input
                                required
                                type="date"
                                class="form-control"
                                name="date_deb"
                                v-model="pack.date_deb"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-md-2">
                            <div>
                              <label style="color:#000;font-size:14px">Type :</label>
                            </div>
                          </div>
                          <div class="col-md-9">
                            <div class="form-group">
                              <select class="form-control" name="vip" v-model="pack.vip" required>
                                <option value disabled selected>choisissez le type</option>
                                <option value="1">VIP</option>
                                <option value="0">SIMPLE</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-sm-12 col-xs-3">
                        <div class="row">
                          <div class="col-md-2">
                            <div>
                              <label style="color:#000;font-size:14px">Adultes:</label>
                            </div>
                          </div>

                          <div class="col-md-2">
                            <div class="form-group">
                              <select class="form-control" required v-model="nb_adulte">
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-md-2">
                            <div>
                              <label style="color:#000;font-size:14px">Enfants:</label>
                            </div>
                          </div>

                          <div class="col-md-2">
                            <div class="form-group">
                              <select class="form-control" v-on:change="seen =true">
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                              </select>
                            </div>
                          </div>

                          <div class="col-md-2" v-if="seen">
                            <div>
                              <label style="color:#000;font-size:14px">Age Enfants:</label>
                            </div>
                          </div>

                          <div class="col-md-2" v-if="seen">
                            <div class="form-group">
                              <select class="form-control">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                                <option value="13">13</option>
                                <option value="14">14</option>
                                <option value="15">15</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="row">
                      <!-- <div class="col-md-10">
        <p></p>
                      </div>-->
                      <div class="offset-md-8"></div>
                      <div class="col-md-2">
                        <!-- <button
                          type="submit"
                          class="btn btn-primary"
                          style="color:#000;margin:auto"
                        >Rechercher</button>-->
                        <router-link
                          :to="{name: 'ResultatsRecherche' , 
query: { ville_id:pack.ville_id,date_deb:pack.date_deb,vip:pack.vip,nb_adulte:nb_adulte}}"
                        >
                          <button
                            type="submit"
                            class="btn btn-info"
                            style="background-color: #17a2b8;color:#fff;margin:auto"
                          >Rechercher</button>
                        </router-link>
                        <!-- <router-link :to="{ name: 'ResultatsRecherche', 
      params: { du:pack.du , au:pack.au ,type:pack.type, ville_id:pack.ville_id } }"> 
      <button type="submit" class="btn btn-info" style="background-color: #17a2b8;color:#fff;margin:auto"  >Rechercher</button>
                        </router-link>-->
                        <!-- <router-link to="/packs"> <button type="submit" class="btn btn-info" style="background-color: #17a2b8;color:#fff;margin:auto"  >Rechercher</button>
                        </router-link>-->
                      </div>
                    </div>
                  </form>
                  <!-- Form -->
                </div>
              </div>
              <!--/.Card-->

              <!--Grid column-->
            </div>
          </div>
          <!--Grid row-->

          <div class="row">
            <p style="line-height:50px">&nbsp;</p>

            <div class="col-md-12"></div>
          </div>
        </div>
        <!-- Content -->
      </div>
      <!-- Mask & flexbox options-->
    </div>

    <div class="container" style="padding-top:40px;padding-bottom:50px;">
      <center>
        <h2 style="font-family: 'Indie Flower', cursive;color:#000">Pourquoi partir avec Etnafes</h2>
      </center>
      <div class="row" style="margin-top:20px;">
        <div class="col-md-2">
          <center>
            <img src="images/icone1.png" />
          </center>
          <center>
            <p style="color:#000">
              1 équipe d’experts
              par destination
            </p>
          </center>
        </div>
        <div class="col-md-2">
          <center>
            <img src="images/icone2.png" />
          </center>
          <center>
            <p style="color:#000">
              1 équipe d’experts
              par destination
            </p>
          </center>
        </div>
        <div class="col-md-2">
          <center>
            <img src="images/icone3.png" />
          </center>
          <center>
            <p style="color:#000">
              1 équipe d’experts
              par destination
            </p>
          </center>
        </div>
        <div class="col-md-2">
          <center>
            <img src="images/icone4.png" />
          </center>
          <center>
            <p style="color:#000">Bons plans</p>
          </center>
        </div>
        <div class="col-md-2">
          <center>
            <img src="images/icone5.png" />
          </center>
          <center>
            <p style="color:#000">
              1 équipe d’experts
              par destination
            </p>
          </center>
        </div>
        <div class="col-md-2">
          <center>
            <img src="images/icone6.png" />
          </center>
          <center>
            <p style="color:#000">
              1 équipe d’experts
              par destination
            </p>
          </center>
        </div>
      </div>
    </div>

    <!-- <div style="background-color:#333">
      <h1>liste des packs</h1>
      <div v-for="pack in packs" v-bind:key="pack.id">
        <p>Titre:{{pack.titre}}</p>

        <div v-for="zone in pack.zone_pack" v-bind:key="zone.id">
          <p>Zone:{{zone.pack_id}}</p>

          <div v-for="zonet in zone.zone_touristique.image" v-bind:key="zonet.id">
            <img :src="`http://127.0.0.1:8000/images/${zonet.url_image}`" width="30%" />
          </div>
        </div>
      </div>
    </div>-->
    <div style="background-color:#bdbdbd;padding-bottom:40px">
      <div class="container">
        <center>
          <h4
            style="line-height:40px;color:#fff;padding-top:30px;margin-bottom:60px;font-family: 'Indie Flower', cursive;"
          >NOS NOUVEAUX PACKS</h4>
        </center>

        <vueper-slides
          class="no-shadow"
          :visible-slides="3"
          slide-multiple
          :gap="3"
          :slide-ratio="1 / 4"
          :dragging-distance="200"
          :breakpoints="{ 800: { visibleSlides: 2, slideMultiple: 2 } }"
        >
          <vueper-slide
            v-for="(pack,i) in newpacks"
            v-bind:key="i"
            :image="`http://127.0.0.1:8000/images/${pack.image_couverture}`"
            :content="pack.titre"
          />
          <!-- <vueper-slide
            v-for="(slide, i) in slides"
            :key="i"
            :image="slide.image"
            :title="slide.title"
            :content="slide.content"
          />-->
        </vueper-slides>
      </div>
    </div>

    <div style="padding-bottom:40px">
      <div class="container">
        <center>
          <h4
            style="line-height:40px;color:#333;padding-top:30px;margin-bottom:60px;font-family: 'Indie Flower', cursive;"
          >NOS PACKS EN VEDETTE</h4>
        </center>

        <vueper-slides
          class="no-shadow"
          :visible-slides="3"
          slide-multiple
          :gap="3"
          :slide-ratio="1 / 4"
          :dragging-distance="200"
          :breakpoints="{ 800: { visibleSlides: 2, slideMultiple: 2 } }"
        >
          <vueper-slide
            v-for="(packv,i) in packsvedette"
            v-bind:key="i"
            :image="`http://127.0.0.1:8000/images/${packv.image_couverture}`"
            :tiltle="packv.titre"
            :content="packv.titre"
          />
        </vueper-slides>
      </div>
    </div>

    <div style="background-color:#151a22">
      <div class="container" style="padding-bottom:20px">
        <center>
          <h4
            style="line-height:40px;color:#fff;padding-top:30px;margin-bottom:60px;font-family: 'Indie Flower', cursive;"
          >NOS DÉPARTS INITIÉS OU CONFIRMÉS</h4>
        </center>
        <div class="row">
          <div class="col-lg-4">
            <div class="card" style="margin-bottom:30px;margin-top:10px;">
              <div class="card-img-wrap">
                <img
                  class="card-img-top"
                  src="images/bulla-reguia-jendouba.jpg"
                  alt="Card image cap"
                />
              </div>
              <div class="card-block">
                <h5 class="card-title">- Kairouan</h5>
                <p
                  class="card-text"
                >Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
                <br />
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="card" style="margin-bottom:30px;margin-top:10px;">
              <div class="card-img-wrap">
                <img class="card-img-top" src="images/eco-domes-beja.jpg" alt="Card image cap" />
              </div>
              <div class="card-block">
                <h5 class="card-title">- Kairouan</h5>
                <p
                  class="card-text"
                >Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
                <br />
              </div>
            </div>
          </div>
          <div class="col-lg-4" style="margin-bottom:30px;margin-top:10px;">
            <div class="card">
              <div class="card-img-wrap">
                <img
                  class="card-img-top"
                  src="images/ksar-lemsa-oueslatia.jpg"
                  alt="Card image cap"
                />
              </div>
              <div class="card-block">
                <h5 class="card-title">Ksar Lemsa - Oueslatia Kairouan</h5>
                <p
                  class="card-text"
                >Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
                <br />
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-4">
            <div class="card" style="margin-bottom:30px;margin-top:10px;">
              <div class="card-img-wrap">
                <img class="card-img-top" src="images/kairouan.jpg" alt="Card image cap" />
              </div>
              <div class="card-block">
                <h5 class="card-title">Musée Okba - Kairouan</h5>
                <p
                  class="card-text"
                >Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
                <br />
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="card" style="margin-bottom:30px;margin-top:10px;">
              <div class="card-img-wrap">
                <img class="card-img-top" src="images/kasba-Kef.jpg" alt="Card image cap" />
              </div>
              <div class="card-block">
                <h5 class="card-title">La kasbah - Kairouan</h5>
                <p
                  class="card-text"
                >Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
                <br />
              </div>
            </div>
          </div>

          <div class="col-lg-4" style="margin-bottom:30px;margin-top:10px;">
            <div class="card">
              <div class="card-img-wrap">
                <img class="card-img-top" src="images/ain-dhab-siliana.jpg" alt="Card image cap" />
              </div>
              <div class="card-block">
                <h5 class="card-title">- Kairouan</h5>
                <p
                  class="card-text"
                >Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
                <br />
              </div>
            </div>
          </div>

          <div class="col-lg-4" style="margin-bottom:30px;margin-top:10px;">
            <div class="card">
              <div class="card-img-wrap">
                <img class="card-img-top" src="images/tozeur.jpg" alt="Card image cap" />
              </div>
              <div class="card-block">
                <h5 class="card-title">Kairouan</h5>
                <p
                  class="card-text"
                >Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
                <br />
              </div>
            </div>
          </div>

          <div class="col-lg-4" style="margin-bottom:30px;margin-top:10px;">
            <div class="card">
              <div class="card-img-wrap">
                <img
                  class="card-img-top"
                  src="images/oued-el-Bey-petit-bassin-gafsa.jpg"
                  alt="Card image cap"
                />
              </div>
              <div class="card-block">
                <h5 class="card-title">- Kairouan</h5>
                <p
                  class="card-text"
                >Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
                <br />
              </div>
            </div>
          </div>

          <div class="col-lg-4" style="margin-bottom:30px;margin-top:10px;">
            <div class="card">
              <div class="card-img-wrap">
                <img
                  class="card-img-top"
                  src="images/oasis et gorges de chbika-tozeur.jpg"
                  alt="Card image cap"
                />
              </div>
              <div class="card-block">
                <h5 class="card-title">Kairouan</h5>
                <p
                  class="card-text"
                >Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="header">
      <div class="container">
        <div class="row">
          <div class="col-md-3"></div>
          <div class="col-md-6" style="background-color:rgba(237,209,51,0.8)">
            <div class="info">
              <p style="color:#10284 !important">LEARN MORE ABOUT US</p>
              <hr />
              <h1 style="letter-spacing:7px;line-height:80px">ETNAFES</h1>
              <div>
                <p style="line-height:30px;font-family: 'Roboto', sans-serif;color#000">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  <br />Fugit facere ex, totam laborum hic a dolor,
                  <br />placeat magnam beatae corporis optio
                  <br />
                </p>
              </div>
              <button class="btn btn-info" style="margin-bottom:20px">Discover</button>
            </div>
          </div>

          <div class="col-md-3"></div>
        </div>
      </div>
    </div>-->
    <Footer></Footer>
  </div>
</template>
<style type="text/css">
.vueperslide__content {
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  background-color: rgba(0, 0, 0, 0.8);
  padding: 10px;
}
.vueperslides__arrows--outside .vueperslides__arrow--prev {
  left: -5.5em !important;
}

.vueperslides__arrows--outside .vueperslides__arrow--next {
  right: -5.5em !important;
}
.card-img-wrap {
  overflow: hidden;
  position: relative;
}
.card-img-wrap:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  /* background: rgba(255,255,255,0.3); */
  opacity: 0;
  transition: opacity 0.25s;
}

.card-title {
  margin-left: 8px;
  margin-top: 10px;
}
.card-text {
  margin-left: 8px;
  margin-right: 8px;
}
.card-img-wrap img {
  transition: transform 0.25s;
  width: 100%;
}
.card-img-wrap:hover img {
  transform: scale(1.2);
}
.card-img-wrap:hover:after {
  opacity: 1;
}

.card-text:last-child {
  margin-bottom: 15 !important;
  margin-top: 10px;
}
input::placeholder {
  font-size: 10px;
}
select {
  font-size: 14px !important;
  /* box-shadow: inset 0px 0px 10px 1px #17a2b8 !important;  */
  border: 1px solid #17a2b8 !important;
  color: #000 !important;
}
input {
  font-size: 14px !important;
  border: 1px solid #17a2b8 !important;
}

/*entete page d'accueil*/
.header {
  position: relative;
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  align-content: flex-start;
  height: 50vw;

  min-height: 400px;
  max-height: 550px;
  min-width: 300px;
  /* color:#eee; */
}
.header:after {
  content: "";
  width: 100%;
  height: 40%;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: -1;
}
.header:before {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  /* -webkit-backface-visibility: hidden; */
  -webkit-transform: translateZ(0) scale(1, 1);
  transform: translateZ(0);
  /* background:#1B2030 url('/accueilbuild.jpg') top center no-repeat;*/
  background: url("https://i.redd.it/dexs7aljpcz21.jpg") top center no-repeat;
  background-size: cover;
  background-attachment: fixed;
  animation: grow 60s linear 10ms infinite;
  transition: all 0.2s ease-in-out;
  z-index: -2;
}
.header a {
  color: #ffffff;
  text-decoration: none;
}

.header a:hover {
  color: #ffffff;
  text-decoration: none;
  background-color: transparent;
}

.info {
  width: 100%;
  padding: 10% 10% 0 10%;
  text-align: center;
  text-shadow: 0 2px 3px rgba(0, 0, 0, 0.2);
}
.info h4,
.meta {
  font-size: 0.7em;
}

html,
body,
header,
.view {
  height: 100%;
}

@media (max-width: 740px) {
  html,
  body,
  header,
  .view {
    height: 1000px;
  }
}

@media (min-width: 800px) and (max-width: 850px) {
  html,
  body,
  header,
  .view {
    height: 650px;
  }
}
@media (min-width: 800px) and (max-width: 850px) {
  .navbar:not(.top-nav-collapse) {
    background: #1c2331 !important;
  }
}
</style>

  <script>
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";
import axios from "axios";
import TopNavbarHome from "./Layout/TopNavbarHome.vue";
import Footer from "./Layout/Footer.vue";

export default {
  components: {
    TopNavbarHome,
    VueperSlides,
    VueperSlide,
    Footer
  },
  data() {
    return {
      seen: false,
      zones: [],
      zonest: [],
      packs: [],
      newpacks: [],
      nb_adulte: "",
      packsvedette: [],
      pack: {
        id: "",
        nom: "",
        date_deb: "",
        au: "",
        type: "",
        ville_id: "",
        description: ""
      },
      villes: [],
      ville: {
        id: "",
        nom_ville: ""
      }
    };
  },

  created() {
    this.fetchVilles();
    this.fetchPacks();
    this.fetchPacksVedette();
    // this.fetchPacksImage();
    this.fetchPacksSearch(
      this.$route.query.ville_id,
      this.$route.query.date_deb,
      this.$route.query.vip,
      this.$route.query.nb_adulte
    );
  },
  methods: {
    fetchVilles() {
      axios
        .get("http://localhost:8000/api/villes")
        .then(({ data }) => (this.villes = data));
    },

    fetchPacks() {
      axios
        .get("http://localhost:8000/api/packs")
        .then(({ data }) => (this.newpacks = data.newpacks));
    },

    fetchPacksVedette() {
      axios
        .get("http://localhost:8000/api/packs/reservation")
        .then(({ data }) => (this.packsvedette = data.pack));
    },

    /* fetchPacksImage() {
      axios
        .get("127.0.0.1:8000/api/packs/images")
        .then(({ data }) => (this.packs = data));
    } */

    /* fetchPacksImage() {
      axios
        .get(`http://localhost:8000/api/packs/images`)
        .then(({ data }) => (this.packs = data.packimage));
    } */

    fetchPacksSearch(ville_id, date_deb, vip, nb_adulte) {
      axios
        .get(
          `http://localhost:8000/api/searchPacks?ville_id=${ville_id}&date_deb=${date_deb}&vip=${vip}&nb_adulte=${nb_adulte}`
        )
        .then(({ data }) => (this.packs = data.packs));
    }
  }
};
</script>