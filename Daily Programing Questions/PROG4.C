#include<stdio.h>


void main(){
	int i,n, arr[100];
	clrscr();

	printf("Enter the no of elements (1 to 100) :");
	scanf("%d",&n);

	for(i=0; i<n; i++){
		printf("\nEnter no %d :",i+1);
		scanf("%d",&arr[i]);
	}

	for(i=1; i<n; i++){
		if(arr[0]>arr[i])
		{	arr[0]=arr[i]; }
	}

	printf("\nThe largest no in the series is %d",arr[0]);
	getch();
}