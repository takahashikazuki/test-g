<template>
  <div class="Wrapper">

    <div class="Inner">

      <h1><img src="~/assets/images/logo.svg" alt="Newt" width="130" height="38" /></h1>
      <h2>We are developing<br />new website <br class="sp" />building tools.</h2>
      <div class="Cover">
        <img src="~/assets/images/cover.jpg" alt="Photo office" width="876" height="344" />
      </div>

      <div class="Who">
        <h3>Who we are</h3>
        <p>Newt is a small start-up company that has just been established. We are developing innovative products for building websites. Please look forward to using them!</p>
      </div>

      <div class="Metrics">
        <div class="Metrics_Item">
          <span><img src="~/assets/images/emoji.svg" alt="Icon smile" width="33" height="33" /></span>
          <strong>4</strong>
          <p>Members</p>
          <small>Small team struggling!</small>
        </div>
        <div class="Metrics_Item">
          <span><img src="~/assets/images/cake.svg" alt="Icon cake" width="33" height="33" /></span>
          <strong>2021</strong>
          <p>Founded</p>
          <small>April 26th is our anniversary</small>
        </div>
        <div class="Metrics_Item">
          <span><img src="~/assets/images/hand.svg" alt="Icon hand" width="33" height="33" /></span>
          <strong>0</strong>
          <p>Users</p>
          <small>There are no users yet…</small>
        </div>
      </div>

      <div class="Maps">
        <div class="Maps_Inner">
          <GmapMap
            :center="{lat:35.673264, lng:139.760671}"
            :zoom="16"
            map-type-id="terrain"
            style="width: 100%; height: 100%"
          >
          <GmapMarker
            :position="{lat:35.673264, lng:139.760671}"
          />
          </GmapMap>
        </div>
        <p class="Maps_Address">3F, KADOYA Bldg., 1-3-8, Yūrakuchō, Chiyoda-ku, Tokyo</p>      
      </div>

      <div class="Talk">
        <div class="Talk_Image">
          <img src="~/assets/images/talk.jpg" alt="Photo walk" width="325" height="210" />
        </div>
        <div class="Talk_Text">
          <h3>Let's talk</h3>
          <p>We take a walk in the park near the office every day and discuss the future of our products. If you are interested, please contact me at <a href="mailto:info@newt.so">info@newt.so</a>.</p>
        </div>
      </div>
  
    </div>

    <footer>
      <div class="Inner">
        <img src="~/assets/images/logo_mark.svg" alt="Newt" width="33" height="27" />
        <small>&copy; 2021 Newt, Inc.</small>
      </div>
    </footer>

  </div>
</template>

<script>
export default {}
</script>

<style>
body {
  font-family: rotunda;
  line-height: 1.5;
  font-size: 16px;
  color: #333;
  text-size-adjust: 100%;
}
a {
  color: #0056FF;
  text-decoration: underline;
}
a:hover {
  text-decoration: none;
}
::selection {
  background: #333;
  color: #fff;
}



.Wrapper {
  width: 100%;
  overflow: hidden;
}
.Inner {
  max-width: 1040px;
  margin: 0 auto;
  padding: 0 40px;
}
h1 {
  margin: 40px 0 100px 0;
  font-size: 30px;
  padding: 0;
}
h2 {
  text-align: center;
  margin: 0 0 100px 0;
  font-size: 36px;
  padding: 0;
  line-height: 1.3;
}
h3 {
  margin: 0 0 12px 0;
  font-size: 28px;
  padding: 0;
}
.sp {
  display: none;
}
@media screen and (max-width: 599px) {
  h1 {
    margin: 20px 0 40px 20px;
    width: 100px;
  }
  h1 img {
    width: 100%;
    height: auto;
  }  
  .Inner {
    padding: 0;
  }
  h2 {
    margin: 0 30px 40px 30px;
    font-size: 28px;
  }
  h3 {
    font-size: 18px;
    margin: 0;
  }
  .sp {
    display: block;
  }
}

.Cover {
  width: 100%;
  height: auto;
  margin: 0 0 100px 0;
}
.Cover img {
  width: 100%;
  height: auto;
  border-radius: 4px;
  display: block;
}
.Who {
  max-width: 420px;
  margin: 0 auto 100px auto;
  padding: 0 40px;
}
.Who p {
  margin: 0;
}
@media screen and (max-width: 599px) {
  .Cover {
    margin: 0 0 50px 0;
  }
  .Cover img {
    border-radius: 0;
  }
  .Who {
    padding: 0 10%;
    margin: 0 auto 40px auto;
  }
}


.Metrics {
  display: flex;
  margin: 0 0 100px 0;
  justify-content: space-between;
}
.Metrics_Item {
  width: 33.3%;
  text-align: center;
  position: relative;
}
.Metrics_Item::after {
  content: "";
  position: absolute;
  right: 0;
  top: 40px;
  height: 100px;
  width: 1px;
  background: #e5e5e5;
}
.Metrics_Item:last-child::after {
  content: none;
}
.Metrics_Item span {
  display: block;
  font-size: 16px;
}
.Metrics_Item strong {
  font-size: 50px;
  display: block;
}
.Metrics_Item p {
  font-size: 16px;
  display: block;
  margin: 0;
  padding: 0;
}
.Metrics_Item small {
  font-size: 12px;
  display: block;
  color: #888;
}
@media screen and (max-width: 599px) {
  .Metrics {
    margin: 0 0 50px 0;
  }
  .Metrics_Item {
    padding: 0 20px;
  }
  .Metrics_Item::after {
    content: none;
  }
  .Metrics_Item span img {
    width: 24px;
    height: auto;
  }
  .Metrics_Item strong {
    font-size: 24px;
  }
  .Metrics_Item p {
    font-size: 14px;
    line-height: 1.3;
  }
  .Metrics_Item small {
    display: none;
  }
}


.Maps {
  width: 100%;
  margin: 0 0 100px 0;
}
.Maps_Inner {
  height: 348px;
  background: #eee;
  margin: 0 0 12px 0;
  border-radius: 4px;
  overflow: hidden;
}
.Maps > p {
  text-align: right;
  font-size: 14px;
}
@media screen and (max-width: 599px) {
  .Maps {
    margin: 0 0 50px 0;
  }
  .Maps_Inner {
    height: 130px;
    margin: 0 auto 12px auto;
    border-radius: 0;
  }
  .Maps > p {
    text-align: left;
    width: 320px;
    margin: 20px 0 0 0;
    padding: 0 20px;
  }
}

.Talk {
  max-width: 800px;
  margin: 0 auto 120px auto;
  padding: 0 40px;
  display: flex;
  align-items: center;
}
.Talk_Image {
  width: 45%;
  margin: 0 8% 0 0;
  flex-shrink: 0;
}
.Talk_Image img {
  display: block;
  width: 100%;
  height: auto;
  border-radius: 4px;
}
.Talk p {
  margin: 0;
}
@media screen and (max-width: 599px) {
  .Talk {
    flex-direction: column;
    padding: 0 10%;
    margin: 0 auto 50px auto;
  }
  .Talk_Image {
    margin: 0 0 20px 0;
    width: 240px;
    height: auto;
  }
}

footer {
  background: #333;
  color: #fff;
  text-align: center;
  padding: 80px 0;
}
footer small {
  display: block;
  font-size: 12px;
  margin: 12px 0 0 0;
}
@media screen and (max-width: 599px) {
  footer {
    padding: 40px 0;
  }
  footer img {
    width: 30px;
    height: auto;
  }
}

</style>
