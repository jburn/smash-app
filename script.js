$(document).ready(function ()
{ 
    $('#new_game').click(function () 
    {
        change_tab($('#game_menu'), game_menu)
    });
    function change_tab(new_menu_obj, new_menu)
    {
    $('.menu_tab').hide();
    new_menu_obj.show();
    }
})

