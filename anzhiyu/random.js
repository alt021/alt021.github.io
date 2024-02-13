var posts=["/0001.html","/0002.html","/0003.html","/0004.html","/0005.html","/0006.html","/0007.html","/0008.html","/0009.html","/0010.html","/0011.html","/0012.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };