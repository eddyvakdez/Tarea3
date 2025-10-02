<template>
   <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>Tabla de Multiplicar</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <h1>Sumadora</h1>
      <ion-item>
        <ion-label position="floating">Ingresa el numero para ver tabla multiplicada</ion-label>
        <ion-input type="number" v-model="multiplicadorInput"> </ion-input>
      </ion-item>
      <ion-item>
        <ion-label >
          <div v-for="(linea, index) in tabla" :key="index">Resultado: {{ linea }}</div>
        </ion-label>
      </ion-item>
      <ion-button expand="full" @click="Multiplicar">Multiplicar</ion-button>
    </ion-content>
    
   </ion-page>
</template>


<script setup lang="ts">

import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonButton, IonMenuButton, IonItem, IonLabel, IonInput } from '@ionic/vue';
import { ref } from 'vue';

const tabla = ref<string[]>([]);
const multiplicadorInput = ref("");

function Multiplicar() {

  tabla.value = [];
  for (let i = 1; i <= 13; i++) {
    tabla.value.push(`${i} x ${multiplicadorInput.value} = ${i * Number(multiplicadorInput.value)}`);
  }
}
</script>