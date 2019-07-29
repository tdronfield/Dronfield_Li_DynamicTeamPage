$(function() {
    var $close = $('.close');
    var $detailPage = $('.mask');

    var content = {
        "taylor" : {
            name : 'Taylor Dronfield',
            img : 'images/pink_smoke.jpg',
            desp1 : 'Fanshawe Student',
            desp2 : 'this is some info about me',
            desp3 : 'here is some more stuff <br>this is my bio',
            desp4 : 'this is some info about me <br>here is some more stuff'
        },
        'mengyang':{
            name : 'Mengyang Li',
            img : 'images/Li_Photo.JPG',
            desp1 : 'Fanshawe Student',
            desp2 : 'From Inner Mongolia<br> North part of China.',
            desp3 : 'Love Travelling, Music, Photograph, Design',
            desp4 : 'Email: m_li92329@Fanshaweonline.ca'
        }
    };

    $close.click(function () {
        $detailPage.css('display','none');
    });

    $('.content div').click(function (e) {
        var id = $(this).attr('data-id');
        $('.detail').empty().append(`<p>${content[id].name}</p>` +
            `<p>${content[id].desp1}</p>` +
            `<p>${content[id].desp2}</p>` +
            `<p>${content[id].desp3}</p>` +
            `<p>${content[id].desp4}</p>`);
        $('.photo img').attr('src',`${content[id].img}`);
        $detailPage.css('display','block');
    })


});