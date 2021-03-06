var slider = {

    // Not sure if keeping element collections like this
    // together is useful or not.
    el: {
        slider: $("#slider"),
        allSlides: $(".slide"),
        sliderNav: $(".slider-nav"),
        allNavButtons: $(".slider-nav li > a"),
        pointsDiv: $(".coding .points"),
        points: $(".coding .points > a")
    },

    timing: 800,
    slideWidth: $(".slide").first().width(), // could measure this

    // In this simple example, might just move the
    // binding here to the init function
    init: function () {
        this.bindUIEvents();
    },

    bindUIEvents: function () {
        // You can either manually scroll...
        this.el.slider.on("scroll", function (event) {
            slider.moveSlidePosition(event);
        });
        // ... or click a thing
        this.el.sliderNav.on("click", "a", function (event) {
            slider.handleNavClick(event, this);
        });

        this.el.pointsDiv.on("click", "a", function (event) {
            slider.handlePointClick(event, this);
        });
        // What would be cool is if it had touch
        // events where you could swipe but it
        // also kinda snapped into place.
    },

    moveSlidePosition: function (event) {
        // Magic Numbers =(
        this.el.allSlides.css({
            "background-position": $(event.target).scrollLeft() / 6 - 100 + "px 0"
        });
    },

    handleNavClick: function (event, el) {
        event.preventDefault();
        var position = $(el).attr("href").split("-").pop();

        this.el.slider.animate({
            scrollLeft: position * this.slideWidth
        }, this.timing);

        this.changeActiveNav(position);
        this.changeActivePoint(position);
    },

    handlePointClick: function (event, el) {
        event.preventDefault();
        var position = $(el).attr("href").split("-").pop();

        this.el.slider.animate({
            scrollLeft: position * this.slideWidth
        }, this.timing);

        this.changeActiveNav(position);
        this.changeActivePoint(position);
    },

    changeActiveNav: function (position) {
        this.el.allNavButtons.removeClass("active");
        this.el.allNavButtons.get(+position).className="active";
    },
    changeActivePoint: function (position) {
        this.el.points.removeClass("active");
        this.el.points.get(+position).className="active";
    },


};

slider.init();

// https://codepen.io/BaylorRae/pen/ImGBC
// Originally added click links, so I ported over and re-wrote
