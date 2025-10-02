<template>
   <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>Sumadora</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <h1>Sumadora</h1>
      <ion-item>
        <ion-label position="floating">Primer numero</ion-label>
        <ion-input type="number" @input="nummero1  = $event.target.value"> 
      </ion-input>
      </ion-item>
      <ion-item>
        <ion-label position="floating">Segundo numero</ion-label>
        <ion-input type="number" @input="nummero2 = $event.target.value">
      </ion-input>
      </ion-item>
      <ion-item>
        <ion-label>Resultado: {{ resultado }}</ion-label>
      </ion-item>
      <ion-button expand="full" @click="Sumar">Sumar</ion-button>
    </ion-content>
    
   </ion-page>
</template>

<script setup lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonLabel, IonInput, IonItem, IonButton, IonMenuButton } from '@ionic/vue';
import { ref } from 'vue';
const nummero1 = ref(0);
const nummero2 = ref(0);
const resultado = ref(0);

function Sumar() {
  resultado.value = Number(nummero1.value) + Number(nummero2.value);
}
</script>