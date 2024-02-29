<template>
    <div class="row top-element text-center q-mx-sm " q-py-lg>
        <div class="col-3"></div>
        <div class="col-6 bg-white" style="height: 15px; border-bottom-left-radius: 50em; border-bottom-right-radius: 50em;">            
        </div><div class="col-3"></div>

        <div class="col-2 q-px-sm" style="margin-top: 3px;">
            <q-img
            class="logo-animation shadow-13"
            alt="Defer logo"
            src="~assets/Defer_Files/img/logo.svg"
            style="width: 48px; height: 48px; border-radius: 100em;" />
        </div>
        <div class="col-8 q-pt-sm q-px-sm">
            <q-input bg-color="white" dense rounded standout v-model="search"  label="Produto ou Servico">
                <template v-slot:append>
                <q-icon name="search"></q-icon>
                </template>
            </q-input>
        </div>
        <div class="col-2 q-pb-sm q-px-sm q-mt-sm" style="margin-top: 12px;">
            <q-btn round dense color="purple" glossy icon="person"></q-btn>
        </div>

        <div class="col-1"></div>
        <div class="col-10 text-left text-bold text-uppercase" style="color: #fff; font-size: 11px;">O que deseja ver?</div>
        <div class="col-1"></div>
        
        <div class="col-1"></div>
        <div class="col-10 bg-white shadow-up-8" style="border-radius: 100em">
            <div class="section-d" style="border-radius: 100em">
                <q-tabs
                    dense
                    v-model="tab"
                    no-caps
                    inline-label
                    outside-arrows
                    mobile-arrows
                    class="bg-white text-teal shadow-4"
                    style="border-radius: 100em"
                >
                    <q-tab name="products" label="Prod./Servicos"></q-tab>
                    <q-tab name="portfolio" label="Portifolio"></q-tab>
                    <q-tab name="about" label="Sobre DEFER"></q-tab>
                </q-tabs>
            </div>
        </div>
        <div class="col-1"></div>
        
    </div>

    <!-- content-viewer -->
    <div class="content-viewer>">
        <div class="row q-mx-sm q-mt-sm text-bold text-uppercase" style="font-size: 11px; height: 35px; border-left-style: outset; border-right-style: ridge;">
            <p class="text-left max-width" style="font-size: 10px" >CATEGORIAS</p>
            <q-separator color="orange" inset></q-separator>
        </div>
        <div class="row q-mx-sm q-mt-sm text-bold text-uppercase" style="border-left-style: outset;">
            <p class="text-left" style="font-size: 10px" >DEFER PRODUTOS & SERVICOS</p>
        </div>
        
        <div class="row q-mx-sm destaque-prod q-col-gutter-sm" style="background-image: url('src/assets/Defer_Files/img/wave.svg'); padding-right: 7px;">
            <div class="col-4">
                <q-card class="my-card">
                    <q-card-section>
                        {{ lorem }}
                    </q-card-section>
                </q-card>
            </div>
            <div class="col-4">
                <q-card class="my-card">
                    <q-card-section>
                        {{ lorem }}
                    </q-card-section>
                </q-card>
            </div>
            <div class="col-4">
                <q-card class="my-card">
                    <q-card-section>
                        {{ lorem }}
                    </q-card-section>
                </q-card>
            </div>
            <div class="col-4">
                <q-card class="my-card">
                    <q-card-section>
                        {{ lorem }}
                    </q-card-section>
                </q-card>
            </div>
            <div class="col-4">
                <q-card class="my-card">
                    <q-card-section>
                        {{ lorem }}
                    </q-card-section>
                </q-card>
            </div>
            <div class="col-4">
                <q-card class="my-card">
                    <q-card-section>
                        {{ lorem }}
                    </q-card-section>
                </q-card>
            </div>
            <div class="col-4">
                <q-card class="my-card">
                    <q-card-section>
                        {{ lorem }}
                    </q-card-section>
                </q-card>
            </div>
            <div class="col-4">
                <q-card class="my-card">
                    <q-card-section>
                        {{ lorem }}
                    </q-card-section>
                </q-card>
            </div>
        </div>
        <q-separator
            class="q-ma-sm"
            color="primary">
        </q-separator>
    </div>
</template>

<script setup>
    import { ref } from 'vue'
    const search = ref('')
    const tab = ref('products')
    const lorem = ref('Lorem ipsum dolor sit amet ut labore.')
</script>

<style scoped>
.my-card {
    margin: 1px;
}
.destaque-prod {
    /* box-sizing: border-box; */
    background-repeat: repeat-x;
}

.rounded-border {
    border-radius: 10px; /* Ajuste o valor conforme necessário */
}
.section-d {
  background-color: white;
  border-radius: 10px; /* Ajuste o valor conforme necessário */
}
.top-element {
    background: linear-gradient(#ed1ba4, #ea269b, #ea269b, #ea269b, #ea269b, #fff, #fff);
}
</style>