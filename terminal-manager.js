
$ptty = $('#terminal').Ptty({
    i18n : {
        welcome : '5D3 CHAIN VER 1.0.1 beta \nThe blockchain project\n\n',
    },
    ps: ">",

    

});

$ptty.echo('we tony')
//$ptty.run_command('clear'); //cancella quello scritto nel terminale