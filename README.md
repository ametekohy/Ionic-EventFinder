# Ionic EventFinder

## Table of Contents
- [Conceptbeschrijving](#Conceptbeschrijving)
- [Componenten](#Componenten)
- [Sensor integraties](#Sensor-integraties)
- [Getting Started](#Getting-Started)
    - [Installing](#Installing)
- [Deployment](#Deployment)
    - [Running in your browser](#Running-in-your-browser)
    - [Running on your device](#Running-on-your-device)
        - [Running the application on Android](#Running-the-application-on-Android-source)
        - [Running the application on DevApp](#Running-the-application-on-DevApp-source)
        
## Conceptbeschrijving
De App "EventFinder" geeft informatie weer over aankomende evenemenenten. Hierbij kan je evenemenenten ondekken door een randomizer. Om een nieuw random evenemenent weer te geven moet je de device schudden. Daarnaast kun je ontdekken welke evenemenenten er binnenkort plaats vinden. Uw favorieten events kunt u lokaal opslaan.

De visie is dat tijdens evenementen en uitgaan heb je altijd je mobiel bij je, gebruik dit app als je entreeticket en informatie voorziening. Sinds je altijd in beweging bent met mobiel op zak kunnen we gebruik maken van dit aspect. Uiteindelijk zouden we kunnen maken dat je punten kan verzamelen voor kortingen hoe meer je beweegt (mobiel schudt) op de locatie van de evenement. Dit aspect is uitgebreid naar de willekeurige event zoeken en het logo. 

### Componenten

| Component | Toelichting |
| ------------- | ------------- |
| Tabs (https://ionicframework.com/docs/api/tabs)  | Als hoofdstructuur wordt er gebruik gemaakt van tabs om te switchen tussen de componenten. Op de ene tab is de feature-pagina te zien waarbij een random evenement wordt weergegeven. Op de andere tab wordt een lijst weergeven van verschillende evenementen in de buurt.  |
| Cards (https://ionicframework.com/docs/api/card)  | Cards wordt gebruikt als detail-pagina voor een evenement.  |
| List (https://ionicframework.com/docs/api/list)  | Evenementen worden weergeven in een list.  |
| Fab (https://ionicframework.com/docs/api/fab) | Om een event als favoriet op te slaan. |
    
### Sensor integraties

| Sensor | Toelichting |
| ------------- | ------------- |
| Device motion (https://ionicframework.com/docs/native/device-motion)  | Het schudden van het telefoon zorgt voor een random event weergave op de app.  |
| Geolocation (https://ionicframework.com/docs/native/geolocation)  | De huidige locatie van het telefoon wordt gebruikt voor het weergeven van evenementen in de buurt. |

### HTTP/API integratie(s)

| HTTP/API | Toelichting |
| ------------- | ------------- |
| Ticketmaster Discovery API (https://developer.ticketmaster.com/products-and-docs/apis/discovery-api/v2/)  | Hieruit worden alle evenementen gehaald.  |

# Getting Started
These instructions will get you a copy of the application/project up and running on your local machine or own device.

## Prerequisites
What things you need to install the application and how to install them
- Install Nodejs and NPM.
- Install Ionic CLI
- Download or clone the project from the repository 

## Installing
1. Download and install Nodejs and NPM on https://nodejs.org/
2. Install the Ionic CLI globally with NPM by opening the terminal/command line and typing: ```npm install -g ionic```

> The -g means it is a global install. For Window’s it's recommended to open an Admin command prompt. For Mac/Linux, run the command with sudo.<br/>

3. Download or [clone](https://help.github.com/articles/cloning-a-repository/#platform-all) the application project on your computer.
> On the top right of the repository is a green button for cloning or downloading the application project

Make sure you remember the path of the project since we will be using this often. Its the map inside the downloaded/cloned folder called ```eventFinder```.

> In Windows theres also a button **Pad kopieren** (Copy Path) which will save the path on your clipboard. You can copy the path now with CTRL+V or right-click and "Copy".

4. Enter ``NPM install`` to install all the required packages.
    
Now everything is ready for use!

# Deployment
There are a couple of ways to run this application; in your own browser on on your mobile device.

## Running in your browser
1. Open the terminal in the folder ```eventFinder```.
2. Enter ``ionic serve`` to run the application 
3. This will setup the application server and automaticly open your browser where you can enjoy the app!

## Running on your device
To run this application on your own Android device there are a few prerequisites first:
1. You have to remember to connect your device with your computer and accept the connection on your device. 
2. Download en Install Android Studio: https://developer.android.com/studio/
3. Also turn on [developer-mode](https://developer.android.com/studio/debug/dev-options) on your mobile phone. This application is tested in the browser and on Android.

> **Developer-mode on Android**<br/>1. Open the Settings app.<br/>2. Select System (Only on Android 8.0 or higher).<br/>3. Scroll to the bottom and select About phone.<br/>4. Scroll to the bottom and tap Build number 7 times.<br/>5. Return to the previous screen to find Developer options near the bottom.<br/>

### Running the application on Android ([source](https://ionicframework.com/docs/building/android#running-with-cordova))
1. Open the terminal and go to the project folder ```eventFinder```
2. Install Cordova CLI by typing ``npm i -g cordova``
2. Run the following: ``ionic cordova run android``
3. And enjoy the app on your Android-device!

### Running the application on DevApp ([source](https://ionicframework.com/docs/building/running#ionic-devapp))
1. Download the app: [Ionic DevApp](https://ionicframework.com/docs/building/running#ionic-devapp). It is available in the iOS App Store as well as Google Play
2. With DevApp installed, sign up or login to an Ionic Account (free).
3. The mobile device and your computer has to be on the same wifi-network.
4. Open the terminal and go to the project folder ```eventFinder```
5. Run the following: ``ionic serve --devapp`` (This will also open the application browser automaticly)
6. If the network is correct (and no network restrictions) you would see the running application in the list in DevApp in your mobile device. Select it and enjoy the app on your device!
