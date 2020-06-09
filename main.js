'use strict;'

{
  const images = [
    'image/IMG_5016.jpg',
    'image/IMG_5017.jpg',
    'image/IMG_5018.jpg',
    'image/19104FBA-AFA6-4263-8F6D-E54B736E0660.JPG',
    'image/168465D0-D10D-48A0-AD73-79B7054A12E7.JPG',
    'image/IMG_0250.jpeg',
    'image/IMG_0255.JPG',
    'image/IMG_0459.jpg',
    'image/IMG_0372.JPG',
    'image/IMG_0994.JPG',
    'image/IMG_2833.JPG',
    'image/IMG_0576.jpg',
    'image/IMG_3278.JPG',
    'image/B4C2DFE7-CC9B-40F9-8DFC-BA5B9D6D47BE.JPG',
    'image/IMG_3451.JPG',
    'image/IMG_3288 2.JPG'
  ];
  let currentIndex = 0;

  const mainImage = document.getElementById('main');
  mainImage.src = images[currentIndex];

  images.forEach((image, index) => {
    const img = document.createElement('img');
    img.src = image;

    const li = document.createElement('li');
    if (index === currentIndex){
      li.classList.add('current');
    }
    li.addEventListener('click',()=>{
      mainImage.src = image
      const thumbnails = document.querySelectorAll('.thumbnails > li');
      thumbnails[currentIndex].classList.remove('current');
      currentIndex = index;
      thumbnails[currentIndex].classList.add('current');
    })
    li.appendChild(img);
    document.querySelector('.thumbnails').appendChild(li);
  });

  const next = document.getElementById('next');
  next.addEventListener('click', () =>{
    let target = currentIndex + 1;
    if(target === images.length){
      target = 0;
    }
    document.querySelectorAll('.thumbnails > li')[target].click();
  });

  const prev = document.getElementById('prev');
  prev.addEventListener('click', () =>{
    let target = currentIndex - 1;
    if(target < 0){
      target = images.length - 1;
    }
    document.querySelectorAll('.thumbnails > li')[target].click();
  });

  let timeoutId;

  function playSlideshow(){
    timeoutId = setTimeout(()=>{
      next.click();
      playSlideshow();  
    },2500);
  }

  let isPlaying = false;

  const play = document.getElementById('play');
  play.addEventListener('click',() => {
    if(isPlaying === false){
      playSlideshow();
      play.textContent = '';
    }else{
      clearTimeout(timeoutId);
      play.textContent = '';
    }
    isPlaying = !isPlaying;
  });
}

window.addEventListener("load", function() {
  // タブのDOMを取得し、変数で定義
  let tabs = document.getElementsByClassName("menu_item");
  // tabsを配列に変換する
  tabsAry = Array.prototype.slice.call(tabs);

  // クラスの切り替えをtabSwitch関数で定義
  function tabSwitch() {
    // 全てのactiveクラスのうち、最初の要素を削除（"[0]は、最初の要素の意味"）
    document.getElementsByClassName("active")[0].classList.remove("active");

    // クリックしたタブにactiveクラスを追加
    this.classList.add("active");

    // コンテンツの全てのshowクラスのうち、最初の要素を削除
    document.getElementsByClassName("show")[0].classList.remove("show");

    // 何番目の要素がクリックされたかを、配列tabsから要素番号を取得
    const index = tabsAry.indexOf(this);

    // クリックしたcontentクラスにshowクラスを追加する
    document.getElementsByClassName("content")[index].classList.add("show");
  }

  // タブメニューの中でクリックイベントが発生した場所を探し、下で定義したtabSwitch関数を呼び出す
  tabsAry.forEach(function(value) {
    value.addEventListener("mouseover", tabSwitch);
  });
});