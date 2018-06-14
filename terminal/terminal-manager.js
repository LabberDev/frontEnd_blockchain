
$ptty = $('#terminal').Ptty({
    i18n : {
        welcome : 'PR CHAIN VER 1.0.3 beta \nThe blockchain project\n\n',
    },
    ps: ">",

    

});

$ptty.echo('(C) ~ Daniele Potertì & Enzo Mattia Ruocco ')
//$ptty.run_command('clear'); //cancella quello scritto nel terminale