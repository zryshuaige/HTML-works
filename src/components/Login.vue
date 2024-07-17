<script setup lang="js">
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
let yanma = ref("");
let yantext = ref("");
let errorMsg = ref("");
var show_num = [];

onMounted(() => {
  draw();
});

function degnlu() {
  if (yantext.value.toLowerCase() === yanma.value.toLowerCase()) {
    errorMsg.value = "";
    console.log("验证成功");
    router.push("/Home");
  } else {
    errorMsg.value = "验证码错误，请重试";
    console.log("验证失败");
    yantext.value = "";
    draw();
  }
}

function draw() {
  var canvas_width = document.getElementById("canvas").clientWidth;
  var canvas_height = document.getElementById("canvas").clientHeight;
  var canvas = document.getElementById("canvas");
  var context = canvas.getContext("2d");

  canvas.width = canvas_width;
  canvas.height = canvas_height;

  var sCode = "A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,1,2,3,4,5,6,7,8,9,0,q,w,e,r,t,y,u,i,o,p,a,s,d,f,g,h,j,k,l,z,x,c,v,b,n,m";
  var aCode = sCode.split(",");
  var aLength = aCode.length;

  show_num = [];
  for (var i = 0; i <= 3; i++) {
    var j = Math.floor(Math.random() * aLength);
    var deg = (Math.random() * 30 * Math.PI) / 180;
    var txt = aCode[j];
    show_num[i] = txt;
    var x = 10 + i * 20;
    var y = 20 + Math.random() * 8;

    context.font = "23px 微软雅黑";
    context.translate(x, y);
    context.rotate(deg);
    context.fillStyle = randomColor();
    context.fillText(txt, 0, 0);
    context.rotate(-deg);
    context.translate(-x, -y);
  }

  for (var i = 0; i <= 5; i++) {
    context.strokeStyle = randomColor();
    context.beginPath();
    context.moveTo(Math.random() * canvas_width, Math.random() * canvas_height);
    context.lineTo(Math.random() * canvas_width, Math.random() * canvas_height);
    context.closePath();
    context.stroke();
  }

  for (var i = 0; i <= 30; i++) {
    context.strokeStyle = randomColor();
    context.beginPath();
    var x = Math.random() * canvas_width;
    var y = Math.random() * canvas_height;
    context.arc(x, y, 1, 0, 2 * Math.PI);
    context.closePath();
    context.stroke();
  }

  yanma.value = show_num.join("");
}

function randomColor() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
}

</script>

<template>
  <div class="loginVideo">
    <div class="loginBox">
      <div class="container">
        <div class="drop">
          <div class="content">
            <h2 :style="{ color: '#3399ff' }">LOGIN</h2>
            <form>
              <div class="inputBox">
                <input type="text" placeholder="用户名" />
              </div>
              <div class="inputBox">
                <input type="password" placeholder="密码" />
              </div>
              <div class="inputBox" id="yanzheng">
                <input type="text" v-model="yantext" placeholder="验证码" />
                <div>
                  <canvas id="canvas" class="canvascs" @click="draw"></canvas>
                </div>
              </div>
              <div class="inputBox" :style="{ margin: '0 auto' }">
                <input
                  :style="{ color: 'white' }"
                  type="button"
                  value="登录"
                  @click="degnlu"
                />
              </div>
            </form>
            <div v-if="errorMsg" class="error">{{ errorMsg }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
/* Your CSS styles here */

.error {
  color: red;
  margin-top: 10px;
}
</style>

<style scoped>
/* Your CSS styles here */
</style>

   
  <style scoped>
  .loginVideo {
    width: 100%;
    height: 100vh;
    overflow: hidden;
    position: relative;
  }
   
  /* 验证码样式 */
  .canvascs {
    width: 92px;
    height: 30px;
    border-radius: 5px;
    margin-top: 2px;
    background: white;
    margin-left: 5px;
  }
   
  #yanzheng {
    display: flex;
    width: 130px;
  }
   
  #yanzheng div {
    width: 96px;
    /* background: pink; */
  }
   
  #yanzheng input {
    width: 100px;
  }
   
  video {
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center;
  }
   
  .loginBox {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
   
  /* 登录框 */
  .container .drop {
    position: relative;
    width: 350px;
    height: 350px;
    box-shadow: inset 20px 20px 20px rgba(0, 0, 0, 0.05),
      25px 35px 20px rgba(0, 0, 0, 0.05), 25px 30px 30px rgba(0, 0, 0, 0.05),
      inset -20px -20px 25px rgba(255, 255, 255, 0.9);
    transition: 0.5s;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
  }
   
  .container .drop:hover {
    border-radius: 10%;
  }
   
  .container .drop::before {
    content: "";
    position: absolute;
    top: 50px;
    left: 85px;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background: #fff;
    opacity: 0.9;
  }
   
  .container .drop::after {
    content: "";
    position: absolute;
    top: 90px;
    left: 110px;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: #fff;
    opacity: 0.9;
  }
   
  .container .drop .content {
    position: relative;
    display: flex;
    justify-content: center;
    /* align-items: center; */
    flex-direction: column;
    text-align: center;
    padding: 40px;
    gap: 15px;
  }
   
  .container .drop .content h2 {
    position: relative;
    color: #333;
    font-size: 1.5em;
  }
   
  .container .drop .content form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;
    /* align-items: center; */
  }
   
  .container .drop .content form .inputBox {
    position: relative;
    width: 225px;
    box-shadow: inset 2px 5px 10px rgba(0, 0, 0, 0.1),
      inset -2px -5px 10px rgba(255, 255, 255, 1),
      15px 15px 10px rgba(0, 0, 0, 0.05), 15px 10px 15px rgba(0, 0, 0, 0.025);
    border-radius: 25px;
  }
   
  .container .drop .content form .inputBox::before {
    content: "";
    position: absolute;
    top: 8px;
    left: 50%;
    transform: translateX(-50%);
    width: 65%;
    height: 5px;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 5px;
  }
   
  .container .drop .content form .inputBox input {
    border: none;
    outline: none;
    background: transparent;
    width: 100%;
    font-size: 1em;
    padding: 10px 15px;
  }
   
  .container .drop .content form .inputBox input[type="submit"] {
    color: #fff;
    text-transform: uppercase;
    font-size: 1em;
    cursor: pointer;
    letter-spacing: 0.1em;
    font-weight: 500;
  }
   
  .container .drop .content form .inputBox:last-child {
    width: 120px;
    background: #3399ff;
    box-shadow: inset 2px 5px 10px rgba(0, 0, 0, 0.1),
      15px 15px 10px rgba(0, 0, 0, 0.05), 15px 10px 15px rgba(0, 0, 0, 0.025);
    transition: 0.5s;
  }
   
  .container .drop .content form .inputBox:last-child:hover {
    width: 150px;
  }
   
  .btns {
    position: absolute;
    right: -120px;
    bottom: 0;
    width: 120px;
    height: 120px;
    background: #00a6bc;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    text-decoration: none;
    color: #fff;
    line-height: 1.2em;
    letter-spacing: 0.1em;
    font-size: 0.8em;
    transition: 0.25s;
    text-align: center;
    box-shadow: inset 10px 10px 10px rgba(0, 166, 188, 0.05),
      15px 25px 10px rgba(0, 166, 188, 0.1), 15px 20px 20px rgba(0, 166, 188, 0.1),
      inset -10px -10px 15px rgba(0, 166, 188, 0.5);
    border-radius: 50%;
  }
   
  .btns::before {
    content: "";
    position: absolute;
    top: 15px;
    left: 30px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #fff;
    opacity: 0.45;
  }
   
  .btns.signup {
    bottom: 150px;
    right: -120px;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: #00a6bc;
    box-shadow: inset 10px 10px 10px rgba(0, 166, 188, 0.05),
      15px 25px 10px rgba(0, 166, 188, 0.1), 15px 20px 20px rgba(0, 166, 188, 0.1),
      inset -10px -10px 15px rgba(0, 166, 188, 0.5);
  }
   
  .btns.signup::before {
    left: 20px;
    width: 15px;
    height: 15px;
  }
   
  .btns:hover {
    border-radius: 10%;
  }
  </style>