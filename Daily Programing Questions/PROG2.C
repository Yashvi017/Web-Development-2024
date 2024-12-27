#include<stdio.h>
#include<conio.h>

void main(){
	int num,i,result=1;
	clrscr();
	printf("\nEnter no :");
	scanf("%d",&num);
	for(i=num;i>=1;i--){
		result*=i;
	}
	printf("\nFactorial of %d is %d",num,result);
	getch();
}