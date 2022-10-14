window.onload= function()
{
    const status = document.getElementById("status");
    const board = document.getElementById("board");
    const button = document.getElementsByClassName("btn")[0];

    const gmesqr = board.querySelectorAll('div');
    let player = 'X';
    let sqr_pos = ['', '', '', '', '', '', '', '', ''];

    const winningConditions = 
    [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];


    for(let j=0; j<=8; j++)
    {
        gmesqr[j].setAttribute("class","square");
    }

    gmesqr.forEach((seg, position) => 
    {
        seg.addEventListener('click', () => userAction(seg, position));
        seg.addEventListener('mouseover', function()
        {
        seg.classList.add('hover');
       // seg.removeEventListener('click', () => userAction(seg, position))
        });
        seg.addEventListener('mouseout', function(){
            seg.classList.remove('hover');
        });
    });

    function checkWin()
    {
        for(let i=0; i<=7; i++){
            const win = winningConditions[i];
 
            const pos1= sqr_pos[win[0]];
            const pos2 = sqr_pos[win[1]];
            const pos3 = sqr_pos[win[2]];
            if (pos1 === ''|| pos2 === ''|| pos3===''){
                continue;
            }  
            if (pos1 === pos2 && pos2 === pos3)
            {
                status.innerHTML= 'Congratulations!' +  pos1 +' is the winner';
                status.classList.add('you-won');
                break;
            }     
        }
    }
    const userAction= (seg,position) =>
    {
        console.log(seg.innerText)

        if(seg.innerText !== 'X' || seg.innerText !== 'O')
        {
            seg.innerText= player;
            seg.classList.add(player);
            sqr_pos[position]=player;
            console.log(sqr_pos);
            checkWin();
            if (player === 'X' ? player ='O' : player ='X');
        }

    }

    button.addEventListener('click', ()=>
    {
        sqr_pos=['', '', '', '', '', '', '', '', ''];
        status.innerHTML= 'Move your mouse over a square and click to play an X or an O.'
        status.classList.remove('you-won');
        gmesqr.forEach(seg =>
            {
            seg.innerText ='';
            seg.classList.remove('X');
            seg.classList.remove('O');
        });
    });
}


