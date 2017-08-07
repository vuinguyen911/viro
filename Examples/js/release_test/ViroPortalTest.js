/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
 'use strict';

 import React, { Component } from 'react';
 import {
   AppRegistry,
   StyleSheet,
   Text,
   View
 } from 'react-native';

 import {
   ViroSceneNavigator,
   ViroScene,
   ViroARScene,
   ViroBox,
   ViroMaterials,
   ViroNode,
   ViroOrbitCamera,
   ViroCamera,
   ViroAmbientLight,
   ViroOmniLight,
   ViroSpotLight,
   ViroDirectionalLight,
   ViroImage,
   ViroVideo,
   Viro360Image,
   Viro360Video,
   ViroFlexView,
   ViroUtils,
   ViroText,
   ViroAnimations,
   ViroAnimatedComponent,
   ViroSurface,
   ViroSkyBox,
   ViroPortal,
   ViroPortalFrame,
   ViroSphere,
   Viro3DObject,
 } from 'react-viro';

let polarToCartesian = ViroUtils.polarToCartesian;
var Uri360Image = require("../res/sun_2302.jpg");

var ViroPortalTest = React.createClass({
   getInitialState() {
     return {

     };
   },

   render: function() {
     var image = Uri360Image;
      return (
        <ViroARScene>
            <ViroOmniLight position={[0, 0, 0]} color="#ffffff" attenuationStartDistance={40} attenuationEndDistance={50}/>
            <ViroPortal position={[0, 0, 0]} scale={[1, 1, 1]}>
               <ViroPortalFrame>
                 <Viro3DObject source={require('./res/portal_ring.obj')}
                               position={[0, 0, -2]}
                               rotation={[0, 0, 0]}
                               scale={[0.1, 0.1, 0.1]}
                               materials={["ring"]}
                 />
               </ViroPortalFrame>

               <ViroSkyBox color="#098765" />

               <ViroAnimatedComponent animation="parallelAnim" run={true} loop={true}>
                 <ViroBox width={0.25} height={0.25} position={[-1.5, 0, -2]}/>
               </ViroAnimatedComponent>
            </ViroPortal>
        </ViroARScene>
      );
   },
 });

var styles = StyleSheet.create({
  baseTextTwo: {
      fontFamily: 'Arial',
      fontSize: 10,
      color: '#ffffff',
      flex: 1,
      textAlignVertical: 'center',
      textAlign: 'center',
  },
});

ViroMaterials.createMaterials({
  ring: {
    lightingModel: "Lambert",
    diffuseTexture: require('./res/portal_ring.png'),
  },
});

ViroAnimations.registerAnimations({
  moveRight:{properties:{positionX:"+=3",}, duration:1000, delay:0},
  moveLeft:{properties:{positionX:"-=3",}, duration:1000, delay:0},
  loopRotate:{properties:{rotateY:"+=180"}, duration:500},
  parallelAnim:[
        ["moveRight","moveLeft"],
        ["loopRotate"]
  ],
});

module.exports = ViroPortalTest;
