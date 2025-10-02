<template>
   <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>Experiencia</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <h1>Explicando mi experiencia al realizar esta tarea</h1>
      <iframe width="100%" height="315"
      src="https://www.youtube.com/watch?v=-SJMp7dduYI"
      title="Video experiencia desde Youtube"
      frameborder="0"
      allowfullscreen></iframe>
    </ion-content>
    
   </ion-page>
</template>

<script setup lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonMenuButton } from '@ionic/vue';
</script>