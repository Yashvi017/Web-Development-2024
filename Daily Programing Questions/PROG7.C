#include<stdio.h>
#include<conio.h>

void main(){
	int num, sum=0,temp,digit,count=0;
	clrscr();

	printf("Enter a number :");
	scanf("%d",&num);
	temp=num;

	//count the digits in the number
	if(num !=0){
		temp/=10;
		count++;
	}
	temp=num;

	while(temp>0){
		digit = temp%10;
		sum+=digit*digit*digit;
		temp/=10;
	}

	if(sum==num){
		printf("\n %d is Armstrong number.",num);
	}
	else{
		printf("\n%d is not Armstrong number.",num);
	}



	getch();
}