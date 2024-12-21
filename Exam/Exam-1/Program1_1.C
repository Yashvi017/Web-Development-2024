#include<stdio.h>
#include<conio.h>

void main()
{
	int i,j;
	clrscr();ff
	for(j=1;j<=3;j++)
	{
		for(i=1;i<=j;i++)
		{
			printf("%d",i);
		}
		printf("\n");
	}
	getch();
}