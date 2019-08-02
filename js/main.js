$(function() {
    var $close = $('.close');
    var $detailPage = $('.mask');

    var content = {
        "taylor" : {
            name : 'Taylor Dronfield',
            img : 'images/taylor.jpg',
            desp1 : 'Fanshawe Student',
            desp2 : 'I am from Ontario, Canada',
            desp3 : 'I am in the Interactive Media Design program.',
            desp4 : 'I like longboarding, photography, and music.'
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
