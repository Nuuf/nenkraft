/**
* @author Gustav 'Nuuf' Åberg <gustavrein@gmail.com>
*/

@vertex@
precision mediump float;

attribute vec2 aPosition0;
attribute vec2 aTexCoord0;

attribute vec2 aPosition1;
attribute vec2 aTexCoord1;

attribute vec2 aPosition2;
attribute vec2 aTexCoord2;

attribute vec2 aPosition3;
attribute vec2 aTexCoord3;

uniform mat3 uProjection;
uniform mat3 uTranslation;
uniform mat3 uTransformation;

uniform float uOTF;

varying vec2 vTexCoord;

void main() {
  if ( uOTF == 0.0 ) {
    gl_Position = vec4( ( uProjection * uTranslation * vec3( aPosition0, 1.0 ) ).xy, 0.0, 1.0 );
    vTexCoord = ( uTransformation * vec3( aTexCoord0, 1.0 ) ).xy;
  } else if ( uOTF == 1.0 ) {
    gl_Position = vec4( ( uProjection * uTranslation * vec3( aPosition1, 1.0 ) ).xy, 0.0, 1.0 );
    vTexCoord = ( uTransformation * vec3( aTexCoord1, 1.0 ) ).xy;
  } else if ( uOTF == 2.0 ) {
    gl_Position = vec4( ( uProjection * uTranslation * vec3( aPosition2, 1.0 ) ).xy, 0.0, 1.0 );
    vTexCoord = ( uTransformation * vec3( aTexCoord2, 1.0 ) ).xy;
  } else if ( uOTF == 3.0 ) {
    gl_Position = vec4( ( uProjection * uTranslation * vec3( aPosition3, 1.0 ) ).xy, 0.0, 1.0 );
    vTexCoord = ( uTransformation * vec3( aTexCoord3, 1.0 ) ).xy;
  }
}
@vertex-end@

@fragment@
precision mediump float;

uniform sampler2D uImage;

varying vec2 vTexCoord;

void main() {
  gl_FragColor = texture2D( uImage, vTexCoord );
}
@fragment-end@
