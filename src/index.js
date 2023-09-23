import "./less/index.less";

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın
// document.querySelector("h1").addEventListener("click",function(e){
// alert("Bana tıkladın!")
// });

// Kodlar buraya gelecek!
const menuBar = document.querySelectorAll("header nav a");
menuBar.forEach((element) => {
  element.addEventListener("mouseover", function (event) {
    console.log("mouseover", event);
    event.target.style.backgroundColor = "gray";
  });
  element.addEventListener("mouseout", function (event) {
    console.log("mouseout", event);
    event.target.style.backgroundColor = "white";
  });
});
document.addEventListener("keydown", (event) => {
  console.log("Pressed key:", event.key);

  if (event.type === "keydown" && event.key === "ArrowUp") {
    document.querySelector("header").style.border = "3px solid darkgreen";
  }
});
document.addEventListener("keyup", (event) => {
  console.log("Released key:", event.key);
  if (event.type === "keyup" && event.key === "ArrowUp") {
    document.querySelector("header").style.border = "none";
  }
});

const carImg = document.querySelector(".intro img");
carImg.addEventListener("wheel", (event) => {
  console.log("wheel", event);
  event.target.style.border = "10px solid gray";
  carImg.addEventListener("mouseout", (event) => {
    console.log("mouseout", event);
    event.target.style.border = "none";
  });
});

window.addEventListener("load", (event) => {
  console.log("load", event);
  console.log("Yükleme Tamamlandı.");
});

window.addEventListener("resize", (event) => {
  console.log("resize", event);
  console.log(
    "Yeniden boyutlandırıldı.Yeni boyutlar",
    event.target.innerHeight,
    event.target.innerWidth
  );
});

window.addEventListener("scroll", (event) => {
  console.log("scroll", event);
  console.log("scroll edildi");
});
document.querySelector("input").addEventListener("select", (event) => {
  console.log("select", event);
  console.log("Bir metin seçtin");
});
document.querySelector("input").addEventListener("focus", (event) => {
  event.target.style.backgroundColor = "lightblue";
  document.querySelector("input").addEventListener("dblclick", (event) => {
    console.log("dblclick", event);
    event.target.style.backgroundColor = "white";
  });
});

const dragged = document.querySelectorAll("[draggable=true]");
dragged.forEach((dragItem) => {
  dragItem.addEventListener("dragstart", (event) => {
    console.log("dragstart", event);
    console.log("Sürükleme başladı");
  });
  dragItem.addEventListener("dragend", (event) => {
    console.log("dragend", event);
    console.log("Sürükleme bitti");
  });
});
