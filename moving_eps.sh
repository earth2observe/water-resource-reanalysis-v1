for ben in et snowc summary swe swi twsa swia
do
	for met in annualmean  bias  biomes  globalbiasscore  interannualscore  overallscore  phase  phasescore  rmse  rmsescore taylorscore
	do
		mkdir $ben
		mkdir $ben/$met
		mkdir $ben/$met/tables
		mkdir $ben/$met/plots		
		mkdir $ben/$met/plots/EPS
		mkdir $ben/$met/plots/PNG
	done
done
mkdir summary/plots/EPS
mv summary/*eps summary/plots/EPS
