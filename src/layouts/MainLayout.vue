<template>
  <q-layout view="hHh lpR ffr">
    <q-header elevated class="bg-lighter text-white">
      <q-toolbar class="q-py-lg bg-transparent text-white">
        <q-space class="gt-sm"></q-space>
        <img height="24" src="~assets/lanbuddy-logo-horizontal.png" />
        <q-space></q-space>
        <q-btn
          class="lt-md"
          size="lg"
          icon="mdi-menu"
          flat
          round
          @click="toggleRightDrawer"
        ></q-btn>
        <div class="row gt-sm">
          <q-btn class="q-mr-sm" :label="$t('menu.github')" flat no-caps />
          <q-btn
            class="q-mr-sm"
            type="a"
            href="https://github.com/lanbuddy/lanbuddy-client/releases"
            color="primary"
            :label="$t('menu.download')"
            icon="mdi-download"
            unelevated
            no-caps
          />
          <LanguageChanger></LanguageChanger>
        </div>
        <q-space class="gt-sm"></q-space>
      </q-toolbar>
    </q-header>
    <q-drawer v-model="rightDrawerOpen" side="right" overlay>
      <q-scroll-area class="fit">
        <q-list>
          <q-item
            v-ripple
            clickable
            type="a"
            href="https://github.com/lanbuddy"
          >
            <q-item-section avatar>
              <q-icon name="mdi-github" />
            </q-item-section>
            <q-item-section>
              {{ $t("menu.github") }}
            </q-item-section>
          </q-item>
          <q-item
            v-ripple
            clickable
            class="bg-blue"
            type="a"
            href="https://github.com/lanbuddy/lanbuddy-client/releases"
          >
            <q-item-section avatar>
              <q-icon name="mdi-download" />
            </q-item-section>
            <q-item-section>
              {{ $t("menu.download") }}
            </q-item-section>
          </q-item>
          <q-item>
            <LanguageChanger></LanguageChanger>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer class="bg-lighter">
      <q-toolbar>
        <q-space />
        <div>Lanbuddy Team © 2024</div>
        <q-space />
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script setup>
import LanguageChanger from "components/LanguageChanger.vue";
import { ref } from "vue";
const rightDrawerOpen = ref(false);
function toggleRightDrawer() {
  rightDrawerOpen.value = !rightDrawerOpen.value;
}
</script>
