# Gemma

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.0.

<br/>
<p align="center">
  <a href="https://github.com/ShaanCoding/ReadME-Generator">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">ReadME Generator</h3>

  <p align="center">
    An Awesome ReadME Generator To Jumpstart Your Projects!
    <br/>
    <br/>
    <a href="https://github.com/ShaanCoding/ReadME-Generator"><strong>Explore the docs »</strong></a>
    <br/>
    <br/>
    <a href="https://github.com/ShaanCoding/ReadME-Generator">View Demo</a>
    .
    <a href="https://github.com/ShaanCoding/ReadME-Generator/issues">Report Bug</a>
    .
    <a href="https://github.com/ShaanCoding/ReadME-Generator/issues">Request Feature</a>
  </p>
</p>

![Github repo size](https://img.shields.io/github/repo-size/shanrescheepers/Gemma)
![Github watchers](https://img.shields.io/github/watchers/shanrescheepers/Gemma?style=social)
![Github language count](https://img.shields.io/github/languages/count/shanrescheepers/Gemma)
![Github code size in bytes](https://img.shields.io/github/languages/code-size/shanrescheepers/Gemma)
![Github repo stars](https://img.shields.io/github/stars/shanrescheepers/Gemma?style=social)
![Github forks](https://img.shields.io/github/forks/shanrescheepers/Gemma?style=social)
<!-- ![Github project website](https://img.shields.io/website?down_color=grey&down_message=offline&logo=Gemma&logoColor=red&style=for-the-badge&up_color=green&up_message=online&url=https%3A%2F%2Fufcfightsite.co.za%2F) -->
![Github last commit](https://img.shields.io/github/last-commit/shanrescheepers/Gemma?logo=Gemma&logoColor=purple)
![Github top language](https://img.shields.io/github/languages/top/shanrescheepers/Gemma)
![Github languages](https://img.shields.io/github/languages/shanrescheepers/Gemma)
![Github](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)(https://github.com/shanrescheepers)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Afsd_profile%3AACoAADYNr60BoSEstmfyZ2X8cYQI5a-UYPtKXlQ&keywords=shanr%C3%A9%20scheepers&origin=RICH_QUERY_SUGGESTION&position=0&searchId=818f99a5-32df-4b1c-877c-d57d001870c2&sid=RnL&spellCorrectionEnabled=false)
![Saas](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)
![Typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![JS](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![Colab](https://img.shields.io/badge/Colab-F9AB00?style=for-the-badge&logo=googlecolab&color=525252)
![Downloads](https://img.shields.io/github/downloads/shanrecheepers/Gemma/total) ![Contributors](https://img.shields.io/github/contributors/shanrescheepers/Gemma?color=dark-green) ![Issues](https://img.shields.io/github/issues/shanrescheepers/Gemma/) 

## Table Of Contents

* [About the Project](#about-the-project)
* [Gemma Inception](#gemma-inception)
* [Benefits of Gemma](#benefits-of-gemma)
* [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Usage](#usage)
* [Roadmap](#roadmap)
* [Contributing](#contributing)
* [Authors](#authors)
* [Acknowledgements](#acknowledgements)

## About The Project

![Screen Shot](/FE/src/assets/images/ss1.png)
![Screen Shot](/FE/src/assets/images/ss2.png)
![Screen Shot](/FE/src/assets/images/ss3.png)
![Screen Shot](/FE/src/assets/images/ss4.png)


## Gemma Inception
Music is a completely powerful art form. You can’t touch it, you can’t see it, goes straight into your heart or flies right by it if it’s not your jam. 
BUT EVERYONE DOES VISUALISE MUSIC IN A WAY IN THEIR MIND WHEN THEY HEAR A CERTAIN SONG.
This app bridges the gap between electronic music and visualisation by using human hand movement.
By moving my hand from one gesture to another, I can control certain fillers to be introduced to the song I am currently playing. (any sound from the presets).
This app is trained to differentiate between different gestures:
* 1 finger point
* victory sign
* OK sign
* 4 finger point
* open hand
*resting fist - default rest gesture.
This app allows mapping of preset sounds to any of the 5 gestures for sound control.
The fist was incorporated to allow users to rest between hands, or when they need to pick up a real instrument to continue their live play performance.


## Benefits of Gemma
My project aims to address the problems of creative music generation during live performances & collaboration between people from various musical backgrounds, inclusive of those not from a musical background.
Giving people less musically inclined the chance to be a part of music generation with others that are musically inclined, developing an AI-powered music filler generator based on object detection using hand gestures. 
Users often struggle to seamlessly incorporate music transitions and fillers into their performances, leading to a disjointed experience. My solution leverages real-time object detection through hand gestures to intuitively trigger music fillers, enhancing the overall performance and the song.
You can create your own very  personal and intuitive way of performing your music, (and everyone does it in a different way). It is much more intuitive than pushing buttons on your screen in front of listeners. Without an expensive 3 or more piece band, session players or so, there’s a limited amount of ways to bring music alive on stage, or in an intimate home concert.
Musicians like myself, who are involved in live music performances and seek to improve the creative music generation and transition process, will also benefit from the app.

### Positive changes in social & accessibility domain
Enhanced Performances. Inclusivity (disabilities). Spontaneity. Innovation. Education(interactive music generation).

## Built With

The project was generated with Angular CLI version 13.3.0 and leverages the power of MediaPipe Handpose which is a lightweight ML pipeline consisting of two models: A palm detector and a hand-skeleton finger tracking model, returning coordinates of landmarks and connectors; keypoints.
MediaPipe Handpose consists of ~12MB of weights, and is well-suited for real time inference across a variety of devices (40 FPS on a 2018 MacBook Pro, 35 FPS on an iPhone11, 6 FPS on a Pixel3)

## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

Things you need to use the software and how to install them.
You can search the documentation for more information.

* Installing Angular CLI

```sh
npm install -g @angular/cli

* npm

```sh
npm install npm@latest -g
```

### Installation

1. This App was made using Angular

2. Clone the repo

```sh
git clone https://github.com/shanrescheepers/Gemma.git
```

3. Install NPM packages

```sh
npm install
```
4. Serve the app

```sh
ng s
```

## Usage
<img src="/FE/src/assets/images/readme_howtouse1.png" alt="Logo" width="500" height="250">
<img src="/FE/src/assets/images/readme_howtouse2.png" alt="Logo" width="500" height="250">


## Roadmap

See the [open issues](https://github.com/shanrescheepers/Gemma/issues) for a list of proposed features (and known issues).

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.
* If you have suggestions for adding or removing projects, feel free to [open an issue](https://github.com/shanrescheepers/Gemma/issues/new) to discuss it.
* Please understand that this is an AI model being used, and that the confidence in recognising different hands might not be as accurate as mine initially was, but it should be accurate enough for an MVP.
* Please make sure you check your spelling and grammar.
* This is an MVP product, future enhancements or developments include adding both hands being recognised on the canvas screen, as well as two dropdown selects for both hands, and a wider sound library source.


## Authors

* **Shanré Scheepers* - *Interactive Development student* - [Shanré Scheepers](https://github.com/shanrescheepers) - *Gemma AI App*

## Acknowledgements

* [MediaPipeHandpose](https://github.com/tensorflow/tfjs-models/blob/master/handpose/README.md)
* [Othneil Drew](https://github.com/othneildrew/Best-README-Template)
* [ImgShields](https://shields.io/)

