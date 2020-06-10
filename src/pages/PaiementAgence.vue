<template>
  <div>
    <TopNavbarHome />

    <div class="container" style="margin-bottom:30px">
      <router-link :to="`/paiement/${pack.id}`">
        <b-button>Continuez</b-button>
      </router-link>
    </div>
    <div class="container" style="margin-bottom:30px;margin-top:20px">
      <div class="row">
        <div
          class="col-md-8"
          style="border:solid 1px #afaeae;background-color:#fff;border-radius:5px"
        >
          <form name method="post">
            <div class="row" style="margin-top:40px;">
              <div class="col-sm-9 col-xs-3">
                <h4
                  class="dark-grey-text"
                  style="line-height:60px;font-family: 'Open Sans', sans-serif;"
                >
                  <strong
                    style="font-family: 'Indie Flower', cursive;color:#000"
                  >Entrez vos coordonnées</strong>
                </h4>
              </div>
            </div>
            <div class="row" style="margin-top:30px;">
              <div class="col-sm-12 col-xs-3">
                <div class="row">
                  <div class="col-md-1">
                    <div>
                      <label style="color:#000;font-size:14px">Civilité</label>
                    </div>
                  </div>

                  <div class="col-md-3">
                    <div class="form-group">
                      <select class="form-control" name="civilite" v-model="pack.vip" required>
                        <option value="mr" selected>Mr</option>
                        <option value="mme">Mme</option>
                        <option value="mlle">Mlle</option>
                      </select>
                    </div>
                  </div>

                  <div class="col-md-1">
                    <div>
                      <label style="color:#000;font-size:14px">Prénom</label>
                    </div>
                  </div>

                  <div class="col-md-3">
                    <div class="form-group">
                      <input required type="text" class="form-control" name="date_deb" />
                    </div>
                  </div>

                  <div class="col-md-1">
                    <div>
                      <label style="color:#000;font-size:14px">Nom</label>
                    </div>
                  </div>

                  <div class="col-md-3">
                    <div class="form-group">
                      <input required type="text" class="form-control" name="date_deb" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="row" style="margin-top:30px">
              <div class="col-sm-12 col-xs-3">
                <div class="row">
                  <div class="col-md-1">
                    <div>
                      <label style="color:#000;font-size:14px">Email</label>
                    </div>
                  </div>

                  <div class="col-md-5">
                    <div class="form-group">
                      <input required type="email" class="form-control" name="date_deb" />
                    </div>
                  </div>

                  <div class="col-md-1">
                    <div>
                      <label style="color:#000;font-size:14px">Portable</label>
                    </div>
                  </div>

                  <div class="col-md-5">
                    <div class="form-group">
                      <input required type="tel" class="form-control" name="date_deb" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="row" style="margin-top:30px;margin-bottom:40px;">
              <div class="col-sm-12 col-xs-3">
                <div class="row">
                  <div class="col-md-2">
                    <div>
                      <label style="color:#000;font-size:14px">Gouvernorat</label>
                    </div>
                  </div>

                  <div class="col-md-5">
                    <div class="form-group">
                      <select class="form-control" id="SelectRegion" required>
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
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="offset-md-8"></div>
              <div class="col-md-2"></div>
            </div>
          </form>

          <div class="row" style="margin-top:20px;">
            <div class="col-sm-9 col-xs-3">
              <h4
                class="dark-grey-text"
                style="line-height:60px;font-family: 'Open Sans', sans-serif;"
              >
                <strong
                  style="font-family: 'Indie Flower', cursive;color:#000"
                >Sélectionnez l'agence la plus proche de chez vous</strong>
              </h4>
              <h5>Agences kairouan</h5>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <b-card no-body style="padding:10px;border:solid 1px">
            <b-carousel
              id="carousel-1"
              v-model="slide"
              :interval="4000"
              controls
              indicators
              background="#ababab"
              img-width="1024"
              img-height="480"
              style="text-shadow: 1px 1px 2px #333;margin-top:30px"
              @sliding-start="onSlideStart"
              @sliding-end="onSlideEnd"
            >
              <!-- Text slides with image -->
              <div v-for="(zone,i) in pack.zone_pack" v-bind:key="i">
                <b-carousel-slide
                  v-for="(image,k) in zone.zone_touristique.image"
                  v-bind:key="k"
                  caption="First slide"
                  text="Nulla vitae elit libero, a pharetra augue mollis interdum."
                  :img-src="`http://127.0.0.1:8000/images/${image.url_image}`"
                ></b-carousel-slide>
              </div>
            </b-carousel>
            <p style="margin-left:20px;margin-top:30px;font-weight:bold">{{pack.titre}}</p>

            <!-- <b-card-title>
              This tab does not have the
              <code>no-body</code> prop set
            </b-card-title>-->
            <b-card-text>
              Date de départ :
              {{pack.date_deb}}
            </b-card-text>
            <hr style="margin-top:0.1rem" />
            <b-card-text>
              Date d'arrivée :
              {{pack.date_fin}}
            </b-card-text>

            <hr style="margin-top:0.1rem" />
            <b-card-text>{{pack.description}}</b-card-text>

            <div v-for="(zone,i) in pack.zone_pack" v-bind:key="i">
              <h4>{{zone.zone_touristique.nom}}</h4>
            </div>
            <hr />
            <h3>
              Montant total :
              {{nb_adulte*(pack.prix_fix)}}dt
            </h3>
          </b-card>
        </div>
      </div>
    </div>

    <Footer></Footer>
  </div>
</template>

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
      nb_adulte: this.$route.query.nb_adulte,
      pack: {
        id: "",
        nom: "",
        du: "",
        description: "",
        au: "",
        type: "",
        ville_id: ""
      }
    };
  },
  created() {
    this.fetchPacks(this.$route.params.id);
  },
  methods: {
    fetchPacks(id) {
      axios
        .get(`http://localhost:8000/api/packs/${id}`)
        .then(({ data }) => (this.pack = data.packdetail));
    }
  }
};
</script>