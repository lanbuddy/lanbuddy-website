<template>
  <q-select
    v-model="currentLanguage"
    :options="languageOptions"
    option-value="value"
    class="no-padding no-margin"
    borderless
    dense
    emit-value
    map-options
    style="width: 52px"
    @input="changeLanguage"
  >
    <template #selected>
      <q-avatar size="32px">
        <q-icon
          size="48px"
          style="top: -8px; position: relative"
          :name="getFlagIcon(currentLanguage)"
        ></q-icon>
      </q-avatar>
    </template>
    <template #option="scope">
      <q-item v-bind="scope.itemProps">
        <q-item-section avatar>
          <q-avatar size="32px">
            <q-icon
              size="48px"
              style="top: -8px; position: relative"
              :name="getFlagIcon(scope.opt.value)"
            ></q-icon>
          </q-avatar>
        </q-item-section>
        <q-item-section>
          <q-item-label>{{ scope.opt.label }}</q-item-label>
          <q-item-label caption>{{ scope.opt.description }}</q-item-label>
        </q-item-section>
      </q-item>
    </template>
  </q-select>
</template>

<script setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import {
  flagDE,
  flagFR,
  flagGB,
} from "quasar-extras-svg-icons/country-flag-icons";

const i18n = useI18n();
const currentLanguage = ref(i18n.locale);
const languageOptions = [
  { value: "en-US", label: "English" },
  { value: "de-DE", label: "Deutsch" },
  { value: "fr-FR", label: "Français" },
];

const changeLanguage = () => {
  i18n.locale = currentLanguage;
};

const getFlagIcon = (locale) => {
  switch (locale) {
    case "de-DE":
      return flagDE;
    case "fr-FR":
      return flagFR;
    case "en-US":
    default:
      return flagGB;
  }
};
</script>
