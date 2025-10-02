<template>
   <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>Convertidor</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <h1>Convertidor</h1>
      <ion-item>
        <ion-label position="floating">Ingresa el numero a convertir</ion-label>
        <ion-input type="number" v-model="numeroInput"></ion-input>
      </ion-item>
      <ion-item>
        <ion-label>Resultado: {{ resulLetra }}</ion-label>
      </ion-item>
      <ion-button expand="full" @click="Convertir">Traducir a letra</ion-button>
    </ion-content>
    
   </ion-page>
</template>

<script setup lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonMenuButton, IonLabel, IonInput,IonItem } from '@ionic/vue';
import { ref } from 'vue';

const numeroInput = ref("");
const resulLetra = ref("");

function Convertir() {
  let numPrin = Number(numeroInput.value);
  let numActual = numPrin;
  let resultadoTemp = "";

  const unidades = ["", "uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve"];
  const decenasEspeciales = ['diez', 'once', 'doce', 'trece', 'catorce', 'quince', 'dieciséis', 'diecisiete', 'dieciocho', 'diecinueve'];
  const decenas = ["", "diez", "veinte", "treinta", "cuarenta", "cincuenta", "sesenta", "setenta", "ochenta", "noventa"];
  const centenas = ["", "cien", "doscientos", "trescientos", "cuatrocientos", "quinientos", "seiscientos", "setecientos", "ochocientos", "novecientos"];
  
  if (isNaN(numActual) || numActual < 0 || numActual> 1000 || numeroInput.value.trim() === "") {
    resulLetra.value = "El numero debe estar entre 1 y 1000";
    return;
  }

  if (numActual === 1000) {
    return "mil";
  }

  // let letra = "";

  // let numActual = num;

  const centena = Math.floor(numActual / 100);
  if (centena > 0) {
    if (numActual === 100) {
      resultadoTemp += "cien";
      numActual = 0;
    } else {
      resultadoTemp += centenas[centena] + " ";
      numActual %= 100;
    }
  }

  if (numActual > 0) {
    if (numActual < 20) {
      resultadoTemp += decenasEspeciales[numActual - 10];
    }
    else {
      const decena = Math.floor(numActual / 10);
      const unidad = numActual % 10;

      if (decena === 2 && unidad === 0) {
        resultadoTemp += "veinte";
        } else if (decena === 2 && unidad > 0) {
            resultadoTemp += "veinti" + unidades[unidad];
        } else {
            resultadoTemp += decenas[decena];
              if (unidad > 0) {
              resultadoTemp += " y " + unidades[unidad];
          }
        }
    }
  }
  resulLetra.value = resultadoTemp.trim();

}
</script>