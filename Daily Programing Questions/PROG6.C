#include<stdio.h>
#include<conio.h>

void main(){
	int i,j;
	clrscr();
	//ascii value of A=65 and D=68
	for(i=65;i<=68;i++){
	     for(j=65;j<=i;j++){
		printf("%c",j);
	     }
	     printf("\n");
	}
	getch();
}