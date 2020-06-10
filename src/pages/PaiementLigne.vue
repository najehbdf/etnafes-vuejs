<template>
  <div>
    <TopNavbarHome />
    <div class="container" style="margin-bottom:30px;margin-top:40px;border:solid 1px #afaeae">
      <!-- Form -->
      <form method="post">
        <div class="row" style="margin-top:40px;">
          <div class="col-sm-12 col-xs-3">
            <h4
              class="dark-grey-text"
              style="line-height:60px;font-family: 'Open Sans', sans-serif;"
            >
              <strong style="font-family: 'Indie Flower', cursive;color:#000">Entrez vos coordonnées</strong>
            </h4>
          </div>
        </div>
        <div class="row" style="margin-top:30px;">
          <div class="col-sm-12 col-xs-3">
            <div class="row">
              <div class="col-md-1">
                <div>
                  <label style="color:#000;font-size:14px">Civilité :</label>
                </div>
              </div>

              <div class="col-md-3">
                <div class="form-group">
                  <select class="form-control" name="civilite" v-model="civilité" required>
                    <option value="mr" selected>Mr</option>
                    <option value="mme">Mme</option>
                    <option value="mlle">Mlle</option>
                  </select>
                </div>
              </div>

              <div class="col-md-1">
                <div>
                  <label style="color:#000;font-size:14px">Prénom :</label>
                </div>
              </div>

              <div class="col-md-3">
                <div class="form-group">
                  <input required type="text" class="form-control" v-model="prenom" />
                </div>
              </div>

              <div class="col-md-1">
                <div>
                  <label style="color:#000;font-size:14px">Nom :</label>
                </div>
              </div>

              <div class="col-md-3">
                <div class="form-group">
                  <input required type="text" class="form-control" v-model="nom" />
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
                  <label style="color:#000;font-size:14px">Email :</label>
                </div>
              </div>

              <div class="col-md-5">
                <div class="form-group">
                  <input required type="email" class="form-control" v-model="email" />
                </div>
              </div>

              <div class="col-md-1">
                <div>
                  <label style="color:#000;font-size:14px">Portable :</label>
                </div>
              </div>

              <div class="col-md-5">
                <div class="form-group">
                  <input required type="tel" class="form-control" v-model="telephone" />
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
                  <label style="color:#000;font-size:14px">Gouvernorat :</label>
                </div>
              </div>

              <div class="col-md-5">
                <div class="form-group">
                  <select class="form-control" id="SelectRegion" required v-model="gouvernorat">
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
    </div>

    <div class="container" style="margin-bottom:30px;margin-top:40px;border:solid 1px #afaeae">
      <!-- Form -->
      <form name method="post">
        <div class="row" style="margin-top:40px;">
          <div class="col-sm-12 col-xs-3">
            <h4
              class="dark-grey-text"
              style="line-height:60px;font-family: 'Open Sans', sans-serif;"
            >
              <strong
                style="font-family: 'Indie Flower', cursive;color:#000"
              >Choisissez le moyen de paiement</strong>
            </h4>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-12 col-xs-3">
            <div class="row">
              <div class="col-md-3">
                <div class="form-group">
                  <b-form-group>
                    <b-form-radio name="some-radios" value="A">
                      <span style="margin-left:30px">Carte CIB/VISA/MasterCard</span>
                    </b-form-radio>
                    <b-form-radio name="some-radios" value="B">
                      <span style="margin-left:30px">E-Dinar Smart/Universel</span>
                    </b-form-radio>

                    <b-form-radio name="some-radios" value="C">
                      <span style="margin-left:30px">Visa electron postal</span>
                    </b-form-radio>
                  </b-form-group>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
    <div class="container" style="margin-bottom:30px">
      <router-link :to="`/paiement/${pack.id}`">
        <b-button v-on:click="addClient">Continuez</b-button>
      </router-link>
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
      nom: "",
      prenom: "",
      email: "",
      telephone: "",
      civilité: "",
      gouvernorat: "",
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
    },

    addClient() {
      axios
        .post(`http://localhost:8000/api/storeClient`, {
          nom: this.nom,
          prenom: this.prenom,
          telephone: this.telephone,
          email: this.email,
          civilité: this.civilité,
          gouvernorat: this.gouvernorat,
          headers: {
            "content-type": "application/json"
          }
        })
        .then(function(response) {
          if (response.status == 200) {
            alert("Client Ajoutée");
          }
        })
        .catch(error => {
          if (error.response && error.response.status == 422) {
            this.validationErrors = error.response.data.errors;
          }
        });
    }
  }
};
</script>