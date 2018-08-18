if(window.frameElement) {
  var $section_list = $(parent.document.getElementsByClassName("theme-editor__add-section")),
  	  $demo_list = $(parent.document.getElementsByClassName("ui-card theme-editor__card"));
  function addImageSection(obj_type,$append,json_obj){
    if(!json_obj['images'].hasOwnProperty(obj_type)) return false;
    var image = '<img src="' + json_obj['defaulturl'] +'section/'+ json_obj['images'][obj_type] + '" alt="">',
        $image = $(image);
    $image.css({
      'width': '100%',
      'margin-top': 10
    }); 
    $append.append($image);
  } 
  function setImage(json_obj){ 
    $section_list.each(function() {
      var $this = $(this),
          obj = $this.data('new-section'),
          obj_type,
          $button;
      if(!obj.type) return;
      else obj_type = obj.type;
      $button = $this.find('button').first();
      addImageSection(obj_type, $button, json_obj); 
      $button.css({ paddingRight: 15 });
      if($(parent.document.getElementsByClassName('theme-editor__subheading')).length) {
        $(parent.document.getElementsByClassName('theme-editor__subheading')).css({"font-weight": "700", "font-size":"16px", "color":"#212529"});
        $(parent.document.getElementsByClassName('theme-editor__add-section-item')).each(function(){
          $(this).find("img").length && $(this).css({"text-decoration":"underline","font-weight":"600"});
        });
      }
    });
  }  
  function setDemoImage(json_obj) {
    var i = 0;
    $demo_list.find('li').each(function(){ 
      i = i+1;
      var $this = $(this),
          $button = $this.find('button'); 
      if(!json_obj['demos'].hasOwnProperty(i)) return false;
      var image = '<img src="' + json_obj['defaulturl'] +'demos/'+ json_obj['demos'][i] + '" alt="">',
          $image = $(image);
      $image.css({
        'width': '100%',
        'margin-top': 10
      }); 
      $button.append($image);
      $button.css({"font-weight": "600", "font-size":"15px", "color":"#212529","text-decoration":"underline"});
    });
  }
  var json = {
    "defaulturl": "\/\/obest.org\/shopify\/porto\/adminpanel\/",
    "images": {
      "banner-fixed-grid": "banner-fixed-grid.jpg",
      "banner-fixed-grid2": "banner-fixed-grid2.jpg",
      "banner-fixed-grid3": "banner-fixed-grid3.jpg", 
      "banner-fullwidth": "banner-fullwidth.jpg", 
      "banner-grid": "banner-grid.jpg",
      "banner-masonry": "banner-masonry.jpg",
      "banner-slider-content": "banner-slider-content.jpg",
      "banner-text1": "banner-text1.jpg",
      "banner-text2": "banner-text2.jpg",
      "banner-text3": "banner-text3.jpg",
      "banner-text4": "banner-text4.jpg",
      "banner-text5": "banner-text5.jpg",
      "parallax-fixed-text": "parallax-fixed-text.jpg",
      "parallax-fullscreen": "parallax-fullscreen.jpg",
      "parallax-slider": "parallax-slider.jpg",
      "blog-posts": "blog-posts.jpg",
      "blog-testimonial": "blog-testimonial.jpg",
      "testimonials": "testimonials.jpg",
      "collection-brands": "collection-brands.jpg",
      "collection-slider": "collection-slider.jpg", 
      "instagram-section": "instagram-section.jpg",
      "main_section": "main_section.jpg",
      "main_section2": "main_section2.jpg",
      "main_section3": "main_section3.jpg",
      "collection-products": "collection-products.jpg",
      "collection-products-masonry": "collection-products-masonry.jpg",
      "group-products": "group-products.jpg",
      "group-products-slider": "group-products-slider.jpg",
      "onepage-collections": "onepage-collections.jpg",
      "products-slider-banner": "products-slider-banner.jpg",
      "products-slider-banner2": "products-slider-banner2.jpg",
      "products-filter-tab2": "products-filter-tab2.jpg",
      "products-slider-pallarax": "products-slider-pallarax.jpg",
      "products-filter-tab": "products-filter-tab.jpg",
      "slideshow-section": "slideshow-section.jpg",
      "slideshow-sidebar-collection": "slideshow-sidebar-collection.jpg",
      "slideshow-sidebar-menu": "slideshow-sidebar-menu.jpg",
      "slideshow-baner-right": "slideshow-baner-right.jpg",
      "slideshow-thumbnail": "slideshow-thumbnail.jpg"
    },
    "demos": {
      "1": "home01.jpg",
      "2": "home01_old.jpg",
      "3": "home02.jpg",
      "4": "home02_old.jpg",
      "5": "home03.jpg",
      "6": "home03_old.jpg",
      "7": "home04.jpg",
      "8": "home04_old.jpg",
      "9": "home05.jpg",
      "10": "home05_old.jpg",
      "11": "home06.jpg",
      "12": "home06_old.jpg",
      "13": "home07.jpg",
      "14": "home07_old.jpg",
      "15": "home08.jpg",
      "16": "home08_old.jpg", 
      "17": "home09.jpg",
      "18": "home09_old.jpg",
      "19": "home10.jpg",
      "20": "home11.jpg",
      "21": "home12.jpg",
      "22": "home12_old.jpg",
      "23": "home13.jpg",
      "24": "home13_old.jpg",
      "25": "home14.jpg",
      "26": "home15.jpg",
      "27": "home16.jpg",
      "28": "home16_old.jpg",
      "29": "home17.jpg",
      "30": "home17_old.jpg",
      "31": "home18.jpg",
      "32": "home18_old.jpg",
      "33": "home19.jpg",
      "34": "home19_old.jpg",
      "35": "home20.jpg",
      "36": "home20_old.jpg",
    }
  };
  $( document ).ready(function(){
    setImage(json); 
    setDemoImage(json);
  });
}