  var menuBtn= document.getElementById("menuBtn")
        var menu= document.getElementById("menu")
        var sideNav= document.getElementById("sideNav")

        sideNav.style.right="-250px"
        menuBtn.onclick= function(){
            if(sideNav.style.right=="-250px"){
                sideNav.style.right="0";
                menu.src="Barber_Shop_img/close.png"
            }else{
                sideNav.style.right="-250px";
                menu.src="Barber_Shop_img/menu.png"
            }
        }
        var scroll = new SmoothScroll('a[href*="#"]', {
	      speed: 1000,
        	speedAsDuration: true
});