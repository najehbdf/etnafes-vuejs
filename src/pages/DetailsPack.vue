<template>
  <div>
    <TopNavbarHome />
    <div class="container" style="margin-bottom:30px;margin-top:20px">
      <div class="row">
        <div class="col-md-9">
          <b-card no-body>
            <p style="margin-left:20px;margin-top:30px">{{pack.titre}}</p>
            <b-tabs card>
              <b-tab no-body title="Photos">
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
                <b-card-footer>Photos</b-card-footer>
              </b-tab>

              <b-tab no-body title="Video">
                <b-embed
                  style="margin-top:30px"
                  type="iframe"
                  aspect="16by9"
                  :src="`http://127.0.0.1:8000/videos/${pack.url_video}`"
                  allowfullscreen
                ></b-embed>
                <!-- <b-card-img bottom src="https://picsum.photos/600/200/?image=25"></b-card-img> -->
                <b-card-footer>Picture 2 footer</b-card-footer>
              </b-tab>

              <b-tab title="Description">
                <b-card-title>
                  This tab does not have the
                  <code>no-body</code> prop set
                </b-card-title>
                <b-card-text>{{pack.description}}</b-card-text>
              </b-tab>

              <b-tab title="Programme">
                <b-card-title>
                  This tab does not have the
                  <code>no-body</code> prop set
                </b-card-title>
                <!-- <b-card-text>{{pack.description}}</b-card-text> -->
                <div v-for="(zone,i) in pack.zone_pack" v-bind:key="i">
                  <h4>{{zone.zone_touristique.nom}}</h4>
                </div>
              </b-tab>
            </b-tabs>
            <div class="col-md-3 offset-md-5" style="margin-bottom:30px">
              <b-button-group>
                <router-link :to="`/paiement/${pack.id}`">
                  <b-button>Je paye en ligne ></b-button>&nbsp;
                </router-link>
                <router-link
                  :to="{name:'PaiementAgence',params:{id:pack.id},
query: { ville_id:pack.ville_id,date_deb:pack.date_deb,vip:pack.vip,nb_adulte:nb_adulte}}"
                >
                  <b-button>Je passe à l'agence ></b-button>
                </router-link>
              </b-button-group>
            </div>
          </b-card>
        </div>
        <div class="col-md-3">
          <b-card
            title="Card Title"
            img-src="https://picsum.photos/600/300/?image=25"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
          >
            <b-card-text>{{pack.description}}</b-card-text>

            <b-button href="#" variant="primary">Réserver</b-button>
          </b-card>
        </div>
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
    <Footer></Footer>
  </div>
</template>

<style>
.card-header {
  background-color: rgba(0, 0, 0, 0.03);
}
</style>
<script>
import axios from "axios";
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";
import TopNavbarHome from "./Layout/TopNavbarHome.vue";
import Footer from "./Layout/Footer.vue";
export default {
  components: {
    TopNavbarHome,
    Footer,
    VueperSlides,
    VueperSlide
  },
  data() {
    return {
      // packs:[],
      nb_adulte: this.$route.query.nb_adulte,
      packsvedette: [],
      pack: {
        id: "",
        nom: "",
        du: "",
        description: "",
        au: "",
        type: "",
        ville_id: ""
      },
      slide: 0,
      sliding: null
    };
  },
  created() {
    this.fetchPacks(this.$route.params.id);
    this.fetchPacksVedette();
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    },
    fetchPacksVedette() {
      axios
        .get("http://localhost:8000/api/packs/reservation")
        .then(({ data }) => (this.packsvedette = data.pack));
    },
    /* fetchPacks(id) {
      let vm = this;
      fetch(`/api/packs/${id}`)
        .then(res => res.json())
        .then(res => {
          this.pack = res.packs;
        })
        .catch(err => console.log(err));
    }, */

    fetchPacks(id) {
      axios
        .get(`http://localhost:8000/api/packs/${id}`)
        .then(({ data }) => (this.pack = data.packdetail));
    }
  }
};
</script>