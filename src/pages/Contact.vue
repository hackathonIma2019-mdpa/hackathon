<template>
  <q-page class="column justify-start items-center q-pa-md">
    <img src="assets/logo-mdp.svg?1.1.1" alt="Vincent GRATEAU"
         class="img-responsive">
    <div class="row justify-center">
      <div class="push-agency-content col-sm-7 col-md-5 col-lg-5">
        <h1>
          <p class="push-agency-your-agency">Votre agence<br/>
            <strong>Mutuelle de Poitiers Assurances</strong> <br/>
            à
          </p>
          <span class="push-agency-city">POITIERS</span>
        </h1>
        <p>
          <strong>Vincent GRATEAU</strong>
          <br>Agent Général d'Assurance Exclusif
        </p>
        <p class="push-agency-phone">
          <a href="tel:0549889664">
            <q-icon size="2em" name="phone"/>
            <span style="display: inline-block; width: 140px;">05 49 88 96 64</span></a>
        </p>

        <p class="push-agency-email">
                        <span class="sr-only">Email
                            :</span>
          <a href="mailto:agence.vincent.grateau@mutuelledepoitiers.fr">
            <q-icon size="2em" name="email"/>
            <span style="display: inline-block; width: 140px;">Email de l'agence</span></a>
        </p>

        <div class="push-agency-orias">
            <span>
               <a href="javascript:void(0);" role="button" class="btn btn-help" data-toggle="tooltip"
                  title="" data-original-title="www.orias.fr"><i class="fa fa-info"></i></a>
               <span style="display: inline-block; width: 140px;">N° Orias :
              07007064</span>
            </span>
        </div>

      </div>
      <div class="push-agency-hours col-sm-5 col-md-4 col-lg-4" style="margin-top: 25px">
        <p class="text-uppercase"><strong>Horaires</strong></p>

        <div class="push-agency-days">
          <ul class="push-agency-days">
            <li>
              <span class="day">Lundi : </span>


              09:00 - 12:30

              &nbsp;/&nbsp;

              14:00 - 18:00
              <span class="hour-info"></span>

            </li>
            <li>
              <span class="day">Mardi : </span>


              09:00 - 12:30

              &nbsp;/&nbsp;

              14:00 - 18:00
              <span class="hour-info"></span>

            </li>
            <li>
              <span class="day">Mercredi : </span>


              09:00 - 12:30

              &nbsp;/&nbsp;

              14:00 - 18:00
              <span class="hour-info"></span>

            </li>
            <li>
              <span class="day">Jeudi : </span>


              09:00 - 12:30

              &nbsp;/&nbsp;

              14:00 - 18:00
              <span class="hour-info"></span>

            </li>
            <li>
              <span class="day">Vendredi : </span>


              09:00 - 12:30

              &nbsp;/&nbsp;

              14:00 - 18:00
              <span class="hour-info"></span>

            </li>
          </ul>
        </div>

        <p class="text-uppercase"><strong>Coordonnées</strong></p>
        <address style="margin-bottom: 15px;">
          9 RUE DU MARCHE NOTRE DAME
          <br><strong>86000 POITIERS</strong>
        </address>

      </div>
    </div>
  </q-page>
</template>

<style>
  a {
    text-decoration: none;
    color: #6ac025;
  }
</style>

<script>
  export default {
    name: 'Contact'
  }
</script>

<style scoped lang="stylus">
  .push-agency-content
    padding-top 10px
    text-align center

    .push-agency-city
      font-size 1.5em !important
      line-height 100%
      text-transform uppercase
      font-weight bold
      padding 0
      margin 10px 0

  h1
    font-weight normal
    padding: 10px 0;

    .push-agency-your-agency
      font-size: 0.75em !important;
      line-height: 100%;

  .push-agency-hours {
    text-align: center;
  }
  ul:not(.list-puce), ol:not(.list-puce) {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  ul.push-agency-days {
    display: inline-block;
    text-align: left;
    margin: 0 auto 25px;
  }
  ul.push-agency-days li span.day {
    display: inline-block;
    width: 90px;
    text-align: left;
    font-size: 1.125em !important;
  }
</style>
