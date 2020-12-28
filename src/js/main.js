

  // Add active class to the current button (highlight it)
  var header = document.getElementById("myDIV");
  var btns = header.getElementsByClassName("left-sidebar__cat");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
    });
  }
 // Add active class to the current button (highlight it)


var acc = document.getElementsByClassName("accordion");
var i;


for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      } 
    });
  }



   /* When the user clicks on the button, 
  toggle between hiding and showing the dropdown content */
  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          //openDropdown.classList.remove('show');
        }
      }
    }
  }
window.onload=()=>{ let dropdownBtn = document.querySelector('.kg1');

let menuContent = document.querySelector('.kg2');
dropdownBtn.addEventListener('click',()=>{
   if(menuContent.style.display===""){
      menuContent.style.display="block";
   } else {
      menuContent.style.display="";
   }
})}
//---------Navigation-----------//
let burger = document.querySelector('.burgers');
let menu1 = document.querySelector('.mobileMenu-1');
let menu2 = document.querySelector('.mobileMenu-2');
let mobilNav = document.querySelector('.mobil-nav-1');
let prev = document.querySelector('.prev-item');
let closeNav = document.querySelector('.close-nav');
eventListeners()

function eventListeners() {
    burger.addEventListener('click', () => {
        menu1.classList.toggle('mobileMenu-1-active');
    })
    mobilNav.addEventListener('click', (e) => {
        if (e.target.classList == "nav-link mobile-nav-link" || e.target.classList == "nav-next" || e.target.classList == "nav-item mobile-nav-item") {
            menu2.classList.toggle('mobileMenu-2-active')
        }
        e.preventDefault();
    })
    prev.addEventListener('click', (e) => {
        if (e.target.classList == "nav-link mobile-nav-link prev" || e.target.classList == "nav-prev" || e.target.classList == "nav-item mobile-nav-item prev-item") {
            menu2.classList = "mobileMenu-2"
        }
        e.preventDefault();
    })
    closeNav.addEventListener('click', (e) => {
        menu1.classList = "mobileMenu-1";
        menu2.classList = "mobileMenu-2-no";
        setTimeout(() => {
            menu2.classList = "mobileMenu-2"
        }, 300)
        e.preventDefault();
    })
}
//---------NavModal-------------//

//----UserModal------//

let userButton = document.querySelector('.nav-login');
let favoriteButton = document.querySelector('.nav-favorite');
let userModalDiv = document.querySelector('.user-modal-div');
let userModal = document.querySelector('.user-modal');
let closeUserModalIcon = document.querySelector('.close-modal');

userButton.addEventListener('click', showUserModalDiv);
favoriteButton.addEventListener('click', showUserModalDiv);


function showUserModalDiv(e) {
    userModalDiv.classList.add('user-modal-div-active');
    userModal.classList.add('user-modal-active');
    e.preventDefault();
}
userModalDiv.addEventListener('click', (e) => {
    if (e.target.classList == 'user-modal-div user-modal-div-active' || e.target.classList == 'close close-modal') {
        closeUserModal();
    }
})
function closeUserModal() {
    userModalDiv.classList.remove('user-modal-div-active');
    userModal.classList.remove('user-modal-active');
}

//------------ShoppingModal-----------//

let shoppingButton = document.querySelector('.nav-shopping');
let shoppingModal = document.querySelector('.shopping-modal');
let mouseInModal;
shoppingButton.addEventListener('mouseenter', showShoppingModalDiv);
shoppingModal.addEventListener('mouseenter', () => {
    mouseInModal = true;
})
shoppingModal.addEventListener('mouseleave', () => {
    mouseInModal = false;
    hideShoppingModalDiv();
})
shoppingButton.addEventListener('mouseleave', hideShoppingModalDiv);
function showShoppingModalDiv() {
    mouseInModal = true;
    let windowWidth = window.innerWidth;
    if (windowWidth > 992) {
        shoppingModal.classList.add('shopping-modal-active');
    }
}
function hideShoppingModalDiv() {
    mouseInModal = false;
    let windowWidth = window.innerWidth;
    setTimeout(() => {
        if (mouseInModal === false && windowWidth > 992) {
            shoppingModal.classList.remove('shopping-modal-active')
        }
    }, 100)
}

//------Slider------//

class Slider {
    constructor(responsive,sliderAll,sliderSection,btnNext,btnPrev,allSliderElements,slideWidth,sliderBorderInner,visibleSliderElements,sliderRunsAway){

        if(responsive==true){
            this.setWindowWidthToSlider=()=>{
                this.width = window.innerWidth;
                if(this.width>1200){
                    this.slideWidth = fwSliderVarSlideWidth;
                }else if(this.width<=1200&&this.width>992){
                    this.slideWidth = fwSliderVarSlideWidth1200;
                }else if(this.width<=992&&this.width>768){
                    this.slideWidth = fwSliderVarSlideWidth992;
                }else if(this.width<=768&&this.width>576){
                    this.slideWidth = fwSliderVarSlideWidth768;
                }else if(this.width<=576){
                    this.slideWidth = fwSliderVarSlideWidth576;
                }
            }
            this.setBorderInnerToSlider =()=>{
                this.width=window.innerWidth;
                if(this.width<=992&&this.width>768){this.sliderBorderInner = 0.96;}
                else if(this.width<=768&&this.width>576){this.sliderBorderInner = 0.96;}
                else if(this.width<=576){this.sliderBorderInner = 0.94;}
            }
            this.setOutSideSlideToSlider=()=>{
                this.width=window.innerWidth;
                if(this.width<=992&&this.width>768){this.sliderOutsideSlide=8;}
                else if(this.width<=768&&this.width>576){this.sliderOutsideSlide=10;}
                else if(this.width<=576){this.sliderOutsideSlide=10;}
            }
            
            window.addEventListener('DOMContentLoaded',()=>{
                this.setWindowWidthToSlider();
                this.setBorderInnerToSlider();
                this.setOutSideSlideToSlider();
            })
            
            window.addEventListener('resize',()=>{
                this.startSlidePositionFirst=0;
                this.setWindowWidthToSlider();
                this.setBorderInnerToSlider();
                this.setOutSideSlideToSlider()
                this.setPositionSlider();
            })
        }else{
            this.slideWidth=slideWidth;
            this.sliderBorderInner=sliderBorderInner;
            this.sliderOutsideSlide=this.allSliderElements.length-this.visibleSliderElements;
        }
        this.sliderAll=sliderAll
        this.sliderSection=sliderSection
        this.btnNext=btnNext
        this.btnPrev=btnPrev
        this.allSliderElements=allSliderElements
        this.visibleSliderElements=visibleSliderElements;
        this.sliderRunsAway=sliderRunsAway;
        this.mouseDownInSlide = false;
        this.startSlidePosition = 0;
        this.startSlidePositionFirst = 0;
        this.slideri;
        this.sliderj;
        this.setSliderFwMove;
        this.sliderMove;
        this.sliderStartX;

        this.sliderSection.addEventListener('mousedown', (e) => {
            this.mouseDownInSlide = true;
            this.sliderStartX = e.pageX - this.sliderAll.offsetLeft;
            this.sliderSection.classList.remove('fw-slider-section-active')
        });
        this.sliderAll.addEventListener('mouseup', () => {
            this.setPositionSlider();
        })
        this.sliderAll.addEventListener('mouseleave', () => {
            this.setPositionSlider();
        })

        this.sliderAll.addEventListener('mousemove', (e) => {
            if (!this.mouseDownInSlide) return;
            this.x = e.pageX - this.sliderAll.offsetLeft;
            this.sliderMove = this.x - this.sliderStartX;
            this.width = window.innerWidth;
            if(this.width>992){
                if (this.sliderMove > 0 && this.startSlidePositionFirst >= 0) {
                    this.sliderSection.style.transform = `translate3d(${(this.sliderMove + this.startSlidePosition) * 0.3}px,0,0)`
                    this.startSlidePositionFirst = this.sliderMove + this.startSlidePosition;
                } else if (this.sliderMove<0&&this.startSlidePosition <= this.slideWidth*8) {
                    
                    this.sliderSection.style.transform = `translate3d(${(this.slideWidth*8) + (this.sliderMove * 0.3)}px,0,0)`
                    this.startSlidePositionFirst = this.sliderMove + this.startSlidePosition;
                } else {
                    if(this.startSlidePositionFirst>=this.slideWidth*8){
                        this.sliderSection.style.transform = `translate3d(${this.sliderMove + this.startSlidePosition}px,0,0)`
                        this.startSlidePositionFirst = this.sliderMove + this.startSlidePosition;
                        this.setSliderMove=this.sliderMove;
                    }else{
                        this.sliderSection.style.transform = `translate3d(${this.slideWidth*8 + ((this.sliderMove-this.setSliderMove))*0.3}px,0,0)`
                        this.startSlidePositionFirst = this.sliderMove + this.startSlidePosition;
                    }  
                }
            }else if(this.width<=992){
                if (this.sliderMove > 0 && this.startSlidePositionFirst >= 0) {
                    this.sliderSection.style.transform = `translate3d(${((((this.sliderMove/this.width)*100)/this.sliderBorderInner) + this.startSlidePosition) * 0.3}%,0,0)`
                    this.startSlidePositionFirst = ((this.sliderMove/this.width)*100/this.sliderBorderInner)+this.startSlidePosition;
                } else if (sliderFwMove<0&&startFwSlidePosition<= fwSlideWidth*this.sliderOutsideSlide) {
                    this.sliderSection.style.transform = `translate3d(${(this.slideWidth*this.sliderOutsideSlide) + (((this.sliderMove * 0.3)/this.width)*100)}%,0,0)`
                    this.startSlidePositionFirst = ((this.sliderMove/this.width)*100/this.sliderBorderInner)+this.startSlidePosition;
                } else {
                    if(this.startSlidePositionFirst>=this.slideWidth*this.sliderOutsideSlide){
                        this.sliderSection.style.transform = `translate3d(${((this.sliderMove/this.width)*100)/this.sliderBorderInner + this.startSlidePosition}%,0,0)`
                        this.startSlidePositionFirst = ((this.sliderMove/this.width)*100/this.sliderBorderInner)+this.startSlidePosition;
                        this.setSliderMove=this.sliderMove;
                    }else{
                        this.sliderSection.style.transform = `translate3d(${this.slideWidth*this.sliderOutsideSlide + ((((this.sliderMove-this.setSliderMove))*0.3)/this.width)*100/this.sliderBorderInner}%,0,0)`
                        this.startSlidePositionFirst = this.sliderMove + this.startSlidePosition;
                    }  
                }
            }   
            e.preventDefault();
        })
        this.btnNext.addEventListener('click', this.showNextSlideWithBtn);
        this.btnPrev.addEventListener('click', this.showPrevSlideWithBtn);
    }
    setPositionSlider=()=>{
        this.mouseDownInSlide = false;
        this.sliderSection.classList.add('fw-slider-section-active')
        this.width = window.innerWidth;
        if (this.width > 992) {
            this.sliderj=Math.round(this.startSlidePositionFirst/this.slideWidth)
            if(this.sliderj>=8){this.sliderj=8; this.startSlidePositionFirst=this.slideWidth*this.sliderj}else if(this.sliderj<0){this.sliderj=0}
            this.startSlidePosition=this.sliderj*this.slideWidth;
            this.slideri=this.sliderj/4;
        }else if(this.width<=992&&this.width>768){
            this.sliderj=Math.round(this.startSlidePositionFirst/this.slideWidth)
            if(this.sliderj>=8){this.sliderj=8; this.startSlidePositionFirst=this.slideWidth*this.sliderj}else if(this.sliderj<0){this.sliderj=0}
            this.startSlidePosition=this.sliderj*this.slideWidth;
            this.slideri=this.sliderj/2;
            
        }else if(this.width<=768){
            this.sliderj=Math.round(this.startSlidePositionFirst/this.slideWidth)
            if(this.sliderj>=10){this.sliderj=10; this.startSlidePositionFirst=this.slideWidth*this.sliderj}else if(this.sliderj<0){this.sliderj=0}
            this.startSlidePosition=this.sliderj*this.slideWidth;
            this.slideri=this.sliderj/2;
        }
        this.showNextSlide();
    }
    showNextSlide() {
        this.width=window.innerWidth;
        if(this.width>992){
            this.sliderSection.style.transform = `translate3d(${this.slideWidth * this.sliderj}px,0,0)`;
        }else{
            this.sliderSection.style.transform = `translate3d(${this.slideWidth * this.sliderj}%,0,0)`;
        } 
    }
    showNextSlideWithBtn=()=>{
        this.slideri=Math.floor(this.slideri);
        this.slideri++;
        this.width = window.innerWidth;
        if (this.width > 992) {
            if(this.slideri>=2){this.slideri=2};
            this.sliderSection.style.transform = `translate3d(${this.slideWidth*4*this.slideri}px,0,0)`;
            this.sliderj=this.slideri*4;
            this.startSlidePosition = (this.slideWidth*4*this.slideri);
            this.startSlidePositionFirst = (this.slideWidth*4*this.slideri);
        }else if (this.width <= 992 && this.width>768) {
            if(this.slideri>=4){this.slideri=4};
            this.sliderSection.style.transform = `translate3d(${this.slideWidth*2*this.slideri}%,0,0)`;
            this.sliderj=this.slideri*2;
            this.startSlidePosition = (this.slideWidth*2*this.slideri);
            this.startSlidePositionFirst = (this.slideWidth*2*this.slideri);
        }else if (this.width <= 768) {
            if(this.slideri>=5){this.slideri=5};
            this.sliderSection.style.transform = `translate3d(${this.slideWidth*2*this.slideri}%,0,0)`;
            this.sliderj=this.slideri*2;
            this.startSlidePosition = (this.slideWidth*2*this.slideri);
            this.startSlidePositionFirst = (this.slideWidth*2*this.slideri);
        }
    }
    showPrevSlideWithBtn=()=>{
        this.slideri=Math.ceil(this.slideri)
        this.slideri--;
        this.width = window.innerWidth;
        if (this.width > 992) {
            if(this.slideri<0){this.slideri=0};
            this.sliderSection.style.transform = `translate3d(${this.slideWidth*4*this.slideri}px,0,0)`;
            this.sliderj=this.slideri*4;
            this.startSlidePosition = (this.slideWidth*4*this.slideri);
            this.startSlidePositionFirst = (this.slideWidth*4*this.slideri);
        }else if (this.width <= 992) {
            if(this.slideri<0){this.slideri=0};
            this.sliderSection.style.transform = `translate3d(${this.slideWidth*2*this.slideri}%,0,0)`;
            this.sliderj=this.slideri*2;
            this.startSlidePosition = (this.slideWidth*2*this.slideri);
            this.startSlidePositionFirst = (this.slideWidth*2*this.slideri);
        }
    }
    
}

let sliderAllElements = document.querySelectorAll('.slider-img');
let fwSlider = document.querySelector('.fw-slider')
let fwSliderSection = document.querySelector('.fw-slider-section');
let fwSliderarrowPrev = document.querySelector('.fw-slider-arrowDivPrev');
let fwSliderarrowNext = document.querySelector('.fw-slider-arrowDivNext');
let fwSlideWidth;
let fwSliderBorderInner;
let fwSliderVarSlideWidth=-287.5;
let fwSliderVarSlideWidth1200=-242.5;
let fwSliderVarSlideWidth992=-25.25;//Yüzde
let fwSliderVarSlideWidth768=-50.75;//Yüzde
let fwSliderVarSlideWidth576=-51;//Yüzde
let fwResponsive = true;

const slide = new Slider(fwResponsive,fwSlider,fwSliderSection,fwSliderarrowNext,fwSliderarrowPrev,sliderAllElements,fwSlideWidth,fwSliderBorderInner,4,4);





let dropdownBtn = document.querySelector('.menu-btn');
let menuContent = document.querySelector('.menu-content');
dropdownBtn.addEventListener('click',()=>{
   if(menuContent.style.display===""){
      menuContent.style.display="block";
   } else {
      menuContent.style.display="";
   }
})





