<template>
  <q-page class="home column justify-start items-center q-pa-md">
    <img src="assets/logo-mdp.svg?1.1.1" alt="Vincent GRATEAU"
         class="img-responsive">
    <div class="row">
      <div class="push-agency-content col-sm-7 col-md-5 col-lg-5">
        <h1>
          <p class="push-agency-your-agency">Votre agence
            <strong>Mutuelle de Poitiers Assurances</strong>
          </p>
          <span class="push-agency-city"> à POITIERS</span>
        </h1>
        <p>
          <strong>Vincent GRATEAU</strong>
          <br>Agent Général d'Assurance Exclusif
        </p>

        <p class="push-agency-phone">
          <a href="tel:0549889664"><q-icon size="2em" name="phone"/> 05 49 88 96 64</a>
        </p>

        <p class="push-agency-email">
                        <span class="sr-only">Email
                            :</span>
          <a href="mailto:agence.vincent.grateau@mutuelledepoitiers.fr"><q-icon size="2em" name="email"/> Email de l'agence</a>
        </p>

        <div class="push-agency-orias">
                            <span>
                                <a href="javascript:void(0);" role="button" class="btn btn-help" data-toggle="tooltip"
                                   title="" data-original-title="www.orias.fr"><i class="fa fa-info"></i></a>
                                N° Orias :
                                                                    07007064
                                                            </span>
        </div>

      </div>
      <div class="push-agency-hours col-sm-5 col-md-4 col-lg-4">
        <div class="business-hours">
          <span class="business-hours-close">Actuellement fermée</span>
        </div>

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
        <address>
          9 RUE DU MARCHE NOTRE DAME
          <br><strong>86000 POITIERS</strong>
        </address>

      </div>
    </div>
  </q-page>
</template>

<style>
  a{
    text-decoration: none;
    color: #6ac025;
  }
</style>

<script>
  export default {
    name: 'Contact'
  }
</script>
