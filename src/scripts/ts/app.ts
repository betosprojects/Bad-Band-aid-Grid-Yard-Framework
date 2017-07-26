// Dear future me (since you always forget sh!t :). --------------------------
// Install it as a Gulp dev-dependencie or globally:
// npm install -g typescript@next or yarn global add typescript@next

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=- jQuery Notes =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// Source:
// https://basarat.gitbooks.io/typescript/content/docs/why-typescript.html
// Declared definition for TypeScript to handle Jquery normally.TypeScript expects
// you to declare (i.e. use var somewhere) before you use a variable. As a quick fix
// you can tell TypeScript that there is indeed something called $ :
//

declare var $:any;

// Or this basic example definition to provide more information to help protect you from errors:

// declare var $: {
//   (selector: string): any;
// }

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
$(document).ready(function(){
    $(".hamburger").click(function(){
        $(".open").slideToggle();
    });
});
