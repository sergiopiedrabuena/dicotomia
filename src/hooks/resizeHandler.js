export function resizeHandler() {
    function resizeListener() {
      return window.innerHeight;
    }
  
    function resizer() {
      let home = document.getElementById('home');
      let valueHome = resizeListener();
      home.style = `height: ${valueHome}px`;
  
      let homeList = document.getElementById('homeList');
      let valueHomeList = resizeListener();
      homeList.style = `height: ${valueHomeList}px`;
    }
  
    window.addEventListener("resize", () => {
      resizer();
    });
  
    window.addEventListener("load", () => {
      resizer();
    });
  }