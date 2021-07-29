let Santai = ''
let Berkualitas = 'Berkualitas'
for(var i=1; i <= 20; i++)
{

    if(i % 2 == 1){
        Santai = 'Santai'
        console.log(i + ' - ' + Santai);

        if(i == 3 || i == 9 || i == 15){
            Santai = 'I Love Coding'
            console.log(i + ' - ' + Santai);
        }
    }

    if(i % 2 == 0){
        console.log(i + ' - ' + Berkualitas);
    }
}