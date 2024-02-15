<template>
 <q-page>
    <q-card
      :square="false"
      style="
        background: radial-gradient(circle at left, #60b367 45%, #8b5936, #c333b4 );
        border-bottom-left-radius: 100em;
        border-bottom-right-radius: 100em;
      "
    >
      <div class="row q-py-md q-ml-md">

        <div class="col">
            <q-img
          class="logo-animation shadow-9"
          alt="Defer logo"
          src="~assets/Defer_Files/img/logo.svg"
          style="width: 100px; height: 100px">
        </q-img>
        </div>

        <div class="col"></div>
        <!-- <q-btn
          flat
          round
          color="white"
          icon="chevron_left"
          @click="$emit('previousScreen')"
        />
        <div class="row q-py-lg q-mr-sm fixed-top-right">
          <q-btn
            flat
            unelevated
            rounded
            push
            dense
            color="deep-orange-10"
            @click="setAdministrationScreen"
            :label="labelAdmin"
            text-color="white"
            class="glossy"
            icon-right="admin_panel_settings"
          />
        </div> -->
        
      </div>
      <div class="q-px-xl row q-pb-xl q-pt-md texte-center q-mt-md column">
        <div
          style="font-family: 'Arial'; font-size: 25px; font-weight: bold"
          class="row text-center column text-white q-mb-sm"
        >
          BEM VINDO
        </div>
        <div
          class="row text-center column text-white text-subtitle1"
        >
          Aplicativo móvel de <br />
          Serviços e Locação de Equepamento para qualquer tipo de Evento
        </div>
      </div>
    </q-card>

    <form @submit.prevent="authUser">
      <div class="q-pa-md">
        <div class="row q-mb-sm">
          <q-input
            class="col"
            ref="usernameRef"
            v-model="username"
            outlined
            type="text"
            :rules="[
              (val) =>
                val.length >= 3 ||
                'O nome do utilizador deve ter um minimo de 3 caracteres',
            ]"
            lazy-rules
            rounded
            label="Utilizador"
          >
            <template v-slot:append>
              <q-icon name="person" color="secondary" />
            </template>
          </q-input>
        </div>
        <div class="row q-mb-sm">
          <q-input
            v-model="password"
            rounded
            outlined
            class="col"
            label="Senha"
            :rules="[
              (val) =>
                val.length >= 4 || 'A senha deve ter um minimo de 4 caracteres',
            ]"
            ref="passwordRef"
            :type="isPwd ? 'password' : 'text'"
          >
            <template v-slot:append>
              <q-icon
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
                color="secondary"
              />
            </template>
          </q-input>
        </div>
        <div class="row">
          <q-btn
            :loading="submitting"
            class="full-width q-py-sm"
            unelevated
            rounded
            color="secondary"
            type="submit"
            label="Entrar"
          />
        </div>
        <div class="row q-py-sm float-right">
          <span class="text-h7"
            >Esqueceu as suas credenciais?
            <q-btn
              flat
              color="accent"
              label="Clique aqui."
              no-caps
          /></span>
          <span class="text-h7">
            Novo Membro? 
            <q-btn
              flat
              color="primary"
              label="Registe-se Aqui."
              no-caps
          /></span>
        </div>
      </div>
    </form>
  </q-page>
</template>

<script setup>
    import { ref, onMounted, computed } from 'vue';

    const tab = ref('mobilizer');
    const username = ref('');
    const password = ref('');
    const submitting = ref(false)
</script>