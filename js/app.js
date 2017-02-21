(function () {
    animateMenu();
    let router = Sammy(function () {
        let app = $('#app');

        this.get('#/home', function () {
            app.load('includes/home.html', animateHome);
            document.title = 'Home';
        });

        this.get('#/about', function () {
            app.load('includes/about.html', animateAbout);
            document.title = 'about';
        });

        this.get('#/projects', function () {
            app.load('includes/projects.html', projects);
            document.title = 'projects';
        });
    });
    router.run('#/home');

    particlesJS.load('particles-js', 'js/libs/assets/particles.json');

})();

function projects() {
    let $btn = $('#projects').find('.btn');
    $btn.on('click', function (event) {
        event.preventDefault();
        let $this = $(this);
        let $ul = $this.next();

        if ($ul.is(':visible')) {
            $ul.hide();
            $this.text('More');
        } else {
            $ul.show();
            $this.text('Less');
        }
    });

    let $article = $('#projects').find('article');
    $article.hover(
        function () {
            let $this = $(this);
            let $overlay = $(this).find('.overlay');
            TweenLite.to($overlay, .3, {autoAlpha:1,left: "300px"});
        },
        function () {
            let $this = $(this);
            let $overlay = $(this).find('.overlay');
            $overlay.slideUp();
        }
    )
}

function animateMenu() {
    let $main = $('#mainHeader');
    TweenLite.from($main, .3, {autoAlpha: 0, x: -50, delay: 1.4, ease: Power4.easeOut});
}

function animateAbout() {
    let $about = $('#about');
    let $head = $about.find('h1');
    let $sectionHeaders = $about.find('header');
    let $email = $('#contact').find('a');
    let $pAbout = $('#aboutMe article');
    let tl2 = new TimelineLite();

    tl2.from($sectionHeaders,.3,{autoAlpha: 0, ease: Power1.easeIn, delay: .2})
        .from($head, .3, {autoAlpha: 0, y: -50, delay: .2, ease: Power4.easeIn})
        .from($pAbout, .3, {autoAlpha: 0, x: 100, ease: Power1.easeIn})
        .from($email,.3,{autoAlpha: 0,x: 50,y: 50, ease: Power1.easeOut});
}

function animateHome() {
    let $p = $('#home').find('p');
    let $h1 = $('#home').find('h1');
    let $logos = $('#logos li');
    let tl = new TimelineLite();

    tl
        .from($h1, .3, {autoAlpha: 0, delay: .2, ease: Power4.easeIn})
        .from($p, .3, {y: -50, autoAlpha: 0, ease: Power1.easeOut}, '+=.3')
        .staggerFrom($logos, 0.2, {
            cycle: {
                y: [20, -20],
                x: [-20, 20]
            }, autoAlpha: 0, ease: Power1.easeOut
        });
}