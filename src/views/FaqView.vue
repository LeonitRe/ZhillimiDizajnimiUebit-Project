<template>
  <section class="main-content">
    <div class="container">
      <h1 class="text-center text-uppercase mb-5">
        Frequently Asked Questions
      </h1>
      <br />
      <br />
      <div class="row flex-center">
        <div class="col-sm-10 offset-sm-2">
          <div class="accordion" id="accordionExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  <div class="circle-icon"><i class="fa fa-question"></i></div>
                  <span>HOW LONG DOES AN ORDER TAKE TO ARRIVE?</span>
                </button>
              </h2>
              <div
                id="collapseOne"
                class="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  International orders normally arrive within 2-4 weeks of
                  shipping. Please note that these orders need to pass through
                  the customs office in your country before it will be released
                  for final delivery, which can occasionally cause additional
                  delays. Once an order leaves our warehouse, carrier shipping
                  delays may occur due to factors outside our control. We,
                  unfortunately, can’t control how quickly an order arrives once
                  it has left our warehouse. Contacting the carrier is the best
                  way to get more insight into your package’s location and
                  estimated delivery date.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingTwo">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  <div class="circle-icon"><i class="fa fa-question"></i></div>
                  <span>HOW DO I SET UP A SUBSCRIPTION ORDER?</span>
                </button>
              </h2>
              <div
                id="collapseTwo"
                class="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  We do not currently offer free returns to overseas customers.
                  You will therefore need to cover all costs of returning any
                  items to us yourself. We advise that you mark your package
                  ‘returned goods’ to avoid further duties. Remember: We
                  strongly recommend that you return any items via a registered
                  trackable service and obtain and retain proof of posting as we
                  do not accept responsibility for items that fail to arrive
                  with us.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingThree">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  <div class="circle-icon"><i class="fa fa-question"></i></div>
                  <span>HOW TO RETURN MY ITEMS?</span>
                </button>
              </h2>
              <div
                id="collapseThree"
                class="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  We do not currently offer free returns to overseas customers.
                  You will therefore need to cover all costs of returning any
                  items to us yourself. We advise that you mark your package
                  ‘returned goods’ to avoid further duties. Remember: We
                  strongly recommend that you return any items via a registered
                  trackable service and obtain and retain proof of posting as we
                  do not accept responsibility for items that fail to arrive
                  with us.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingThree">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  <div class="circle-icon"><i class="fa fa-question"></i></div>
                  <span>HOW CAN I CHOOSE THE RIGHT SIZE FOR ME?</span>
                </button>
              </h2>
              <div
                id="collapseThree"
                class="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  Habitat has created a universal sizing system that aims to
                  provide a unique reference for all countries. You can easily
                  spot the best size for you by referring to our Size Guide that
                  provides a conversion table to all major country size
                  systems.', 'The Size Guide is conveniently available on the
                  page of each product.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingThree">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  <div class="circle-icon"><i class="fa fa-question"></i></div>
                  <span>HOW CAN I TRACK MY ORDER?</span>
                </button>
              </h2>
              <div
                id="collapseThree"
                class="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  Once you place your order online, you will be able to see the
                  details of the purchase, follow its preparation, and see
                  shipping updates in the My Account area.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <footer class="text-center text-lg-start bg-white text-muted">
    <div class="text-center p-4" style="background-color: rgba(0, 0, 0, 0.025)">
      © 2023 Copyright:
      <a class="text-reset fw-bold" href="#">ALLEz</a>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap");
body {
  background: #fff;
  font-family: "Roboto", sans-serif;
}

.main-content {
  padding-top: 100px;
  padding-bottom: 100px;
}

.flex-center {
  align-items: center;
}
.accordion-button {
  margin-bottom: 10px;
}
.accordion-body {
  margin-top: 15px;
  padding: 25px;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 25px -3px rgba(0, 0, 0, 0.1);
  margin-bottom: 10px;
}
.accordion-button:focus,
.accordion-button.btn:active:focus,
.accordion-button.active:focus {
  outline: 0 !important;
  box-shadow: none !important;
}

.circle-icon {
  height: 50px;
  width: 50px;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #2b4eff;
  border: 5px solid #b2bfff;
  color: #fff;
  margin-left: -20px;
  margin-right: 10px;
  transform: scale(1.2);
}
.accordion-item {
  border: 0px !important;
}
.accordion-button:not(.collapsed) {
  border: 0px !important;
  color: #0c63e4;
  background-color: #ffffff;
  box-shadow: inset 0 0px 0 rgb(0 0 0 / 13%);
}
@media (max-width: 767px) {
  .col-sm-10.offset-sm-2 {
    margin-left: 0;
  }

  .accordion .accordion-button span {
    font-size: 14px;
  }
}
</style>
