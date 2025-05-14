export const simulationVertexShader = `
varying vec2 vUv;
void main(){
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

export const simulationFragmentShader = `
uniform sampler2D textureA;
uniform vec2 mouse;
uniform vec2 resolution;
uniform float time;
uniform int frame;
uniform vec2 vuV;

const float delta = 1.4;

void main() {
    vec2 uv = vUv;
    if(frame == 0){
        gl_
    }
}

`