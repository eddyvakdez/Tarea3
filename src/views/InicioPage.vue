<template>
   <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>Inicio</ion-title>
      </ion-toolbar>
    </ion-header >

    <ion-content class="ion-padding">
      <img src="/public/IMG_20250705_170402048_HDR~2.jpg" alt="">
      <h1>Eddy Miguel Martinez Valdez</h1>
      <b>2023-0944</b>
      <h2>Desarrollo de software</h2>
      <h2>Introduccion a aplicaciones moviles</h2>
    </ion-content>
    
   </ion-page>
</template>

<script setup lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonMenuButton } from '@ionic/vue';
</script>