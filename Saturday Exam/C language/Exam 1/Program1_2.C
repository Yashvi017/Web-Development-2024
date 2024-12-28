#include<stdio.h>
#include<conio.h>

void main()
{
	int no;
	printf("\nEnter a number: ");
	scanf("%d",&no);
	if(no%2==0)
	{
		printf("Entered number is even");
	}
	else
	{
		printf("Entered number is odd");
	}
	getch();
}