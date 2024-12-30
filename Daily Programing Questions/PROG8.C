#include<stdio.h>
#include<conio.h>

void main(){
  int n,i,j,k,arr[100];

  clrscr();

  printf("Enter the number of elements :");
  scanf("%d",&n);

  for(i=0;i<n;i++)
  {
    printf("\n%d no : ",i+1);
    scanf("%d",&arr[i]);
  }

  printf("\nArray before removing duplicates :");
  for(i=0;i<n;i++){
    printf("%d ",arr[i]);
  }

  //remove duplicate values
  for(i=0;i<n;i++){
    for(j=i+1;j<n;j++){
      if(arr[i] == arr[j]){
	for(k=j;k<n-1;k++){
	  arr[k] = arr[k+1];
	}
	n--;
	j--;
      }
    }
  }

  printf("\nArray after removing duplicates :");
  for(i=0;i<n;i++){
    printf("%d ",arr[i]);
  }

  getch();
}