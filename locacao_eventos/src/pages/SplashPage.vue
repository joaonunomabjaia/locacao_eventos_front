<template>
  <q-page :style="{ backgroundColor: backgroundColor, transition: 'background-color 1s' }" class="flex flex-center">
    <q-intersection
      :transition="transition"
      class="example-item"
    >
      <q-card flat bordered class="q-ma-sm">
        <q-img
          class="logo-animation shadow-9"
          alt="Defer logo"
          src="~assets/Defer_Files/img/logo.svg"
          style="width: 250px; height: 250px">
        </q-img>
        

        <q-card-section>
          <!-- <div class="text-h6">Card # index </div>
          <div class="text-subtitle2">by John Doe</div> -->
        </q-card-section>
      </q-card>
    </q-intersection>
    
    <p class="slogan-text text-weight-thin text-center" style="font-size: medium; color: aliceblue; text-shadow: 5px 8px 1px rgba(0, 0, 0, 0.5);">Transformando seu evento em um sucesso!</p>
  </q-page>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router';

const colors = ['#ea269b', '#60b367', '#a66f47']
const backgroundColor = ref(colors[0])
const transition = ref('flip-right')

const router = useRouter();

onMounted(() => {
  setInterval(() => {
    router.push('/Home');
  }, 7000)
  
  let index = 0
  setInterval(() => {
    index = (index + 1) % colors.length
    backgroundColor.value = colors[index]
  }, 2000)
})
</script>

<style scoped>
.q-page {
  transition: background-color 1s;
}
</style>
