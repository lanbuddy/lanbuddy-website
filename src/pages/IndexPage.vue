<template>
  <q-page class="">
    <div style="height: 600px" class="bg-primary row reverse">
      <q-space class="gt-sm"></q-space>
      <div class="col-xs-12 col-md-6 col-lg-4 flex flex-center">
        <img height="256" src="~assets/lanbuddy-logo-round-bordered.png" />
      </div>
      <div class="col-xs-12 col-md-6 col-lg-4 flex flex-center">
        <div class="q-pl-md">
          <h1 class="text-h3 text-bold no-padding q-my-sm">
            {{ $t("client_hero.title") }}
          </h1>
          <p class="text-h5 no-padding q-my-md">
            {{ $t("client_hero.description") }}
          </p>
          <q-btn
            rounded
            color="blue"
            size="lg"
            no-caps
            class="q-mt-md"
            type="a"
            href="https://github.com/lanbuddy/lanbuddy-client/releases/download/latest/lanbuddy-setup.exe"
          >
            <div class="col-12">
              <q-icon size="sm" class="q-pr-xs" name="mdi-download"></q-icon
              >{{ $t("client_hero.download") }}
            </div>
            <div class="text-caption">
              {{ $t("client_hero.latest_version") }}
            </div>
          </q-btn>
          <q-btn
            rounded
            size="lg"
            no-caps
            class="q-mt-md q-ml-md"
            outline
            type="a"
            href="https://github.com/lanbuddy"
          >
            <div class="col-12">
              <q-icon size="sm" class="q-pr-xs" name="mdi-github"></q-icon
              >{{ $t("client_hero.github_label") }}
            </div>
            <div class="text-caption">
              {{ $t("client_hero.github_caption") }}
            </div>
          </q-btn>
        </div>
      </div>
      <q-space class="gt-sm"></q-space>
    </div>
    <div class="row">
      <q-space />
      <div class="col-xs-12 col-sm-10 col-md-10 col-lg-7 text-center q-pa-md">
        <h1 class="text-h4 text-bold no-margin q-py-md">
          {{ $t("features.title") }}
        </h1>
        <div class="q-col-gutter-sm q-pt-lg row text-left justify-center">
          <div class="col-xs-12 col-md-4">
            <q-card style="height: 420px">
              <q-img
                height="200px"
                src="https://source.unsplash.com/random/300%C3%97300/?simple"
              ></q-img>

              <q-card-section>
                <h2 class="text-h5">{{ $t("features.store_catchphrase") }}</h2>
                <p>
                  {{ $t("features.store_description") }}
                </p>
              </q-card-section>
            </q-card>
          </div>
          <div class="col-xs-12 col-md-4">
            <q-card style="height: 420px">
              <q-img
                height="200px"
                src="https://source.unsplash.com/random/300%C3%97300/?speed"
              ></q-img>

              <q-card-section>
                <h2 class="text-h5">{{ $t("features.speed_catchphrase") }}</h2>
                <p>
                  {{ $t("features.speed_description") }}
                </p>
              </q-card-section>
            </q-card>
          </div>
          <div class="col-xs-12 col-md-4">
            <q-card style="height: 420px">
              <q-img
                height="200px"
                src="https://source.unsplash.com/random/300%C3%97300/?chat"
              ></q-img>

              <q-card-section>
                <h2 class="text-h5">{{ $t("features.chat_catchphrase") }}</h2>
                <p>
                  {{ $t("features.chat_description") }}
                </p></q-card-section
              >
            </q-card>
          </div>
        </div>
      </div>
      <q-space />
    </div>
  </q-page>
</template>

<script setup></script>
