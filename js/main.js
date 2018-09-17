$(document).ready(function(){
    $('.btn').click(function(){
        var name = $('.text').clone().removeClass('text').addClass('name_chat');
        var z = $('.name').val();
        name.append(z);  

        var wraper = $('.text').clone().removeClass('text').addClass('wrapper');
        var inp = $('.inp').val();
        wraper.append(name,inp);
        $('.chat').append(wraper);

        $.ajax({
            url: 'server.php',
            type:"POST",
            data:{z,inp,action:"message"},
        }).done(function(res) {
            console.log(res)
            alert(res)
        }).fail(function(err) {
            console.log("err: "+err)
            alert(err)
        })

    });

    load();
    // setInterval(,3000)
    function load(){
        $.ajax({
            url: 'server.php',
            type:"POST",
            data:{action:"load"},
        }).done(function(res) {
            // console.log(res);
            res = res.split("{","}")
            console.log(res)
            // for(item in res) {
            //     console.log(typeof(res));
            //     console.log(res);
            // }
        }).fail(function(err) {
            console.log("err: "+err)
            alert(err)
        })
    }
});