<template>
  <div>
    <!-- Full Page Intro -->
    <TopNavbarHome />
    <div
      class="view full-page-intro"
      style="background-image: url('https://static.wixstatic.com/media/84770f_bc8aea547ced4ad4a1820904fc9e1b82.jpg/v1/fill/w_1920,h_1280,al_t,q_85,usm_0.66_1.00_0.01/84770f_bc8aea547ced4ad4a1820904fc9e1b82.webp'); background-repeat: no-repeat; background-size: cover;background-attachment:fixed"
    >
      <!-- Mask & flexbox options-->
      <div class="mask rgba-black-light d-flex justify-content-center align-items-center">
        <!-- Content -->
        <div class="container">
          <!--Grid row-->
          <div class="row">
            <div class="col-md-12">
              <!--Grid column-->

              <!--Grid column-->

              <!--Card-->
              <div class="card" style="background-color: transparent;border: 0px;">
                <!--Card content-->
                <div class="card-body">
                  <!-- Form -->
                  <form name>
                    <div class="row">
                      <div class="col-sm-12 col-xs-3">
                        <div class="row">
                          <div class="col-md-3">
                            <div class="form-group">
                              <select
                                class="form-control"
                                v-model="pack.ville_id"
                                name="ville_id"
                                style="background-color: #fff !important;"
                              >
                                <option value disabled selected>choisissez votre destination</option>
                                <option
                                  v-for="ville in villes"
                                  v-bind:key="ville.id"
                                  v-bind:value="ville.id"
                                >{{ville.nom}}</option>
                              </select>
                            </div>
                          </div>

                          <div class="col-md-2">
                            <div class="form-group">
                              <input
                                type="date"
                                v-model="pack.date_deb"
                                class="form-control"
                                placeholder="Du"
                                style="background-color: #fff !important;"
                              />
                            </div>
                          </div>

                          <div class="col-md-2">
                            <div class="form-group">
                              <select class="form-control" name="vip" v-model="pack.vip" required>
                                <option value disabled selected>choisissez le type</option>
                                <option value="1">VIP</option>
                                <option value="0">SIMPLE</option>
                              </select>
                            </div>
                          </div>

                          <div class="col-md-2">
                            <div class="form-group">
                              <select class="form-control">
                                <option value disabled selected>adulte(s)</option>

                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                              </select>
                            </div>
                          </div>

                          <div class="col-md-2">
                            <div class="form-group">
                              <select class="form-control">
                                <option value disabled selected>enfant(s)</option>

                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                              </select>
                            </div>
                          </div>

                          <div class="col-md-1">
                            <router-link
                              :to="{name: 'ResultatsRecherche' , 
query: { ville_id:pack.ville_id,date_deb:pack.date_deb,vip:pack.vip}}"
                            >
                              <button
                                type="submit"
                                class="btn btn-info"
                                style="background-color: #17a2b8;color:#fff;margin:auto"
                              >Rechercher</button>
                            </router-link>
                          </div>
                        </div>
                      </div>
                    </div>

                    <!-- <div class="row">
   
    <div class="col-md-5">
                       <router-link to="/packs"> <button type="submit" class="btn btn-info" style="background-color: #17a2b8;color:#fff;margin:auto"  >Rechercher</button>
                       </router-link> 

                       
    </div>
                    </div>-->
                  </form>
                  <!-- Form -->
                </div>
              </div>
              <!--/.Card-->

              <!--Grid column-->
            </div>
          </div>
          <!--Grid row-->
        </div>
        <!-- Content -->
      </div>
      <!-- Mask & flexbox options-->
    </div>

    <!--Grid row-->
    <!-- <div class="container">
      <div class="row" style="margin-top:20px">
        <div class="col-md-12">
          <h5>Choisissez votre hébergement</h5>
        </div>
        <div class="col-md-12">
         
          <div class="card" style="background-color: rgba(237,209,51,0.8)">
           
            <div class="card-body">
              <form name>
                <div class="row">
                  <div class="col-sm-12 col-xs-3">
                    <div class="row">
                      

                      <div class="col-md-3">
                        <div class="form-group">
                          <select class="form-control" id="SelectCity" name="SelectCity">
                            <option value>--hotel--</option>
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
                          </select>
                        </div>
                      </div>

                      <div class="col-md-1">
                        <div>
                          <label style="color:#000;font-size:14px">Chambre(s)</label>
                        </div>
                      </div>

                      <div class="col-md-2">
                        <div class="form-group">
                          <select class="form-control" id="SelectCity" name="SelectCity">
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                          </select>
                        </div>
                      </div>


                      <div class="col-md-3">
                        <div class="form-group">
                          <select class="form-control" id="SelectCity" name="SelectCity">
                            <option value>--maison d'hôtes--</option>
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
                          </select>
                        </div>
                      </div>

                      <div class="col-md-1">
                        <div>
                          <label style="color:#000;font-size:14px">Chambre(s)</label>
                        </div>
                      </div>

                      <div class="col-md-2">
                        <div class="form-group">
                          <select class="form-control" id="SelectCity" name="SelectCity">
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-4">
                    <router-link to="/packs">
                      <button
                        type="submit"
                        class="btn btn-info"
                        style="background-color: #17a2b8;color:#fff;margin:auto"
                      >Rechercher</button>
                    </router-link>
                  </div>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>-->
    NBre {{this.$route.query.nb_adulte}}
    <div class="container" style="padding-top:70px;padding-bottom:40px">
      <div class="card mb-3" v-for="pack in packs" :key="pack.id">
        <div class="row no-gutters">
          <div class="col-md-4">
            <img :src="`http://127.0.0.1:8000/images/${pack.image_couverture}`" class="card-img" />
          </div>

          <div class="col-md-5">
            <div class="card-body">
              <h2 class="card-title">{{pack.titre}}</h2>
              <p style="margin-left: 8px;">{{pack.description}}</p>
              <!-- <div>
                <b-card no-body>
                  <b-tabs card>
                    <b-tab title="Programme" active>
                      <b-card-text>
                        Quis magna Lorem anim amet ipsum do mollit sit cillum voluptate ex nulla tempor. Laborum consequat non elit enim exercitation cillum aliqua consequat id aliqua.
                      </b-card-text>
                    </b-tab>
                    <b-tab title="Vidéo">
                      <b-card-text>
                        Quis magna Lorem anim amet ipsum do mollit sit cillum voluptate ex nulla tempor. Laborum
                        consequat non elit enim exercitation cillum aliqua consequat id aliqua.
                      </b-card-text>
                    </b-tab>
                  </b-tabs>
                </b-card>
              </div>-->
              <!-- <h5 class="card-title">{{pack.nom}}</h5>
              <p class="card-text">{{pack.description}}</p>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
              <router-link :to="`/detailspack/${pack.id}`">
                <button class="btn btn-outline-success">Détails</button>
              </router-link>-->
            </div>
          </div>

          <div class="col-md-3">
            <div class="card-body">
              <center>
                <h2>{{nb_adulte*(pack.prix_fix)}}dt</h2>
                <router-link
                  :to="{name:'DetailsPack',params:{id:pack.id},
query: { ville_id:pack.ville_id,date_deb:pack.date_deb,vip:pack.vip,nb_adulte:nb_adulte}}"
                >
                  <button type="button" class="btn btn-warning">+ De détails</button>
                </router-link>
              </center>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <table>
    <tr v-for="pack in packs" v-bind:key="pack.id">  
      <td>{{pack.id}}</td>
      <td>{{pack.nom}}</td>
     <td>{{pack.du}}</td>
     <td>{{pack.au}}</td>
</tr>
    </table>-->
    <Footer></Footer>
  </div>
</template>
<style>
.nav-tabs .nav-link.active,
.nav-tabs .nav-item.show .nav-link {
  color: #525f7f;
  background-color: #c0c0cb;
  border-color: #e3e3e3 #e3e3e3 #1e1e2f;
}
input::placeholder {
  font-size: 10px;
}
select {
  font-size: 13px !important;
  /* box-shadow: inset 0px 0px 10px 1px #17a2b8 !important;  */
  border: 1px solid #17a2b8 !important;
  color: #000 !important;
}
input {
  font-size: 12px !important;
  border: 1px solid #17a2b8 !important;
}
</style>
<script>
import axios from "axios";
import TopNavbarHome from "./Layout/TopNavbarHome.vue";
import Footer from "./Layout/Footer.vue";
export default {
  components: {
    TopNavbarHome,
    Footer
  },
  data() {
    return {
      villes: [],
      ville: {
        id: "",
        nom_ville: ""
      },
      nb_adulte: this.$route.query.nb_adulte,
      packs: [],
      pack: {
        id: "",
        nom: "",
        date_deb: "",
        au: "",
        type: "",
        ville_id: "",
        description: ""
      }
    };
  },

  created() {
    this.fetchPacksSearch(
      this.$route.query.ville_id,
      this.$route.query.date_deb,
      this.$route.query.vip
    );
    this.fetchVilles();
  },

  methods: {
    fetchVilles() {
      axios
        .get("http://localhost:8000/api/villes")
        .then(({ data }) => (this.villes = data));
    },
    fetchPacksSearch(ville_id, date_deb, vip) {
      axios
        .get(
          `http://localhost:8000/api/searchPacks?ville_id=${ville_id}&date_deb=${date_deb}&vip=${vip}`
        )
        .then(({ data }) => (this.packs = data.packs));
    }
  }
};
</script>