var nOfCellsInRow=9,nOfCellsInColumn=9,widthOfCell=25;
newGame();

var beg=document.getElementById('beginner');

beg.nOfCellsInRow=9;
beg.nOfCellsInColumn=9;
beg.widthOfCell=25;

beg.onclick=newGame();

var int=document.getElementById('intermediate');

int.nOfCellsInRow=16;
int.nOfCellsInColumn=16;
int.widthOfCell=25;

int.onclick=newGame();

var exp=document.getElementById('expert');

exp.nOfCellsInRow=30;
exp.nOfCellsInColumn=16;
exp.widthOfCell=25;

exp.onclick=newGame();

