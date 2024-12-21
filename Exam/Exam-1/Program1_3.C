#include<stdio.h>
#include<conio.h>

float bmi(float,float);

void main(){
	float b,height,weight;
	clrscr();
	printf("\nEnter your height:");
	scanf("%f",&height);
	printf("\nEnter your weight:");
	scanf("%f",&weight);
	b=bmi(height,weight);
	printf("Your BMI is %f",b);
	getch();
}
float bmi(float h, float w){
	return w/(h*h);
}